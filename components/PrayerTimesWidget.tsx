"use client";

import { useState, useCallback } from "react";
import { site } from "@/lib/content";
import { CALCULATION_METHODS } from "@/lib/prayerTimes";
import { formatTime } from "@/lib/utils";

interface PrayerTimesResult {
  fajr: string;
  maghrib: string;
  date: string;
}

export function PrayerTimesWidget() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [method, setMethod] = useState(3); // Muslim World League
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [times, setTimes] = useState<PrayerTimesResult | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        city: city.trim(),
        country: country.trim() || "United Kingdom",
        method: method.toString(),
      });

      const response = await fetch(`/api/prayer-times?${params}`);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setTimes(null);
      } else {
        setTimes(data);
        setError(null);
      }
    } catch {
      setError(site.errors.prayerTimes);
      setTimes(null);
    } finally {
      setLoading(false);
    }
  }, [city, country, method]);

  return (
    <div className="card p-6 bg-gradient-to-br from-dusk-50/30 to-sand-50">
      <h3 className="font-display text-lg font-semibold text-night-800 mb-2">
        {site.prayerTimes.title}
      </h3>
      <p className="text-sm text-night-600 mb-4">
        {site.prayerTimes.helperText}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-night-700 mb-1">
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder={site.prayerTimes.cityPlaceholder}
              className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-white text-night-800 placeholder:text-night-400 focus:outline-none focus:ring-2 focus:ring-dusk-400 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-night-700 mb-1">
              Country
            </label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder={site.prayerTimes.countryPlaceholder}
              className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-white text-night-800 placeholder:text-night-400 focus:outline-none focus:ring-2 focus:ring-dusk-400 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="method" className="block text-sm font-medium text-night-700 mb-1">
            {site.prayerTimes.methodLabel}
          </label>
          <select
            id="method"
            value={method}
            onChange={(e) => setMethod(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-lg border border-sand-300 bg-white text-night-800 focus:outline-none focus:ring-2 focus:ring-dusk-400 focus:border-transparent"
          >
            {CALCULATION_METHODS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading || !city.trim()}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Loading...
            </span>
          ) : (
            "Get times"
          )}
        </button>
      </form>

      {/* Results */}
      {times && (
        <div className="mt-6 p-4 bg-white rounded-lg border border-sand-200">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-night-500 mb-1">{site.prayerTimes.fajrLabel}</p>
              <p className="text-2xl font-display font-semibold text-night-800">
                {formatTime(times.fajr)}
              </p>
            </div>
            <div>
              <p className="text-sm text-night-500 mb-1">{site.prayerTimes.maghribLabel}</p>
              <p className="text-2xl font-display font-semibold text-night-800">
                {formatTime(times.maghrib)}
              </p>
            </div>
          </div>
          <p className="text-xs text-center text-night-400 mt-3">
            {times.date} · {site.prayerTimes.footnote}
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}
