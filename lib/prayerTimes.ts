export interface PrayerTimesResponse {
  fajr: string;
  maghrib: string;
  date: string;
}

export interface PrayerTimesError {
  error: string;
}

// Calculation methods from AlAdhan API
export const CALCULATION_METHODS = [
  { id: 3, name: "Muslim World League" },
  { id: 2, name: "Islamic Society of North America (ISNA)" },
  { id: 4, name: "Umm Al-Qura University, Makkah" },
  { id: 5, name: "Egyptian General Authority of Survey" },
  { id: 1, name: "University of Islamic Sciences, Karachi" },
  { id: 7, name: "Institute of Geophysics, University of Tehran" },
  { id: 8, name: "Gulf Region" },
  { id: 9, name: "Kuwait" },
  { id: 10, name: "Qatar" },
  { id: 11, name: "Majlis Ugama Islam Singapura" },
  { id: 12, name: "Union Organization Islamic de France" },
  { id: 13, name: "Diyanet İşleri Başkanlığı, Turkey" },
  { id: 14, name: "Spiritual Administration of Muslims of Russia" },
  { id: 15, name: "Moonsighting Committee Worldwide" },
] as const;

export async function fetchPrayerTimes(
  city: string,
  country: string,
  method: number = 3
): Promise<PrayerTimesResponse | PrayerTimesError> {
  try {
    const today = new Date();
    const dateStr = `${today.getDate().toString().padStart(2, "0")}-${(today.getMonth() + 1).toString().padStart(2, "0")}-${today.getFullYear()}`;
    
    const params = new URLSearchParams({
      city: city.trim(),
      country: country.trim() || "United Kingdom",
      method: method.toString(),
    });

    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity/${dateStr}?${params}`,
      {
        next: { revalidate: 43200 }, // Cache for 12 hours
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch prayer times");
    }

    const data = await response.json();

    if (data.code !== 200 || !data.data?.timings) {
      throw new Error("Invalid response from prayer times API");
    }

    return {
      fajr: data.data.timings.Fajr,
      maghrib: data.data.timings.Maghrib,
      date: data.data.date.readable,
    };
  } catch {
    return {
      error: "Couldn't load times right now. Try again, or check your local mosque timetable.",
    };
  }
}
