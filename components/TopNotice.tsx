import { site } from "@/lib/content";

export function TopNotice() {
  return (
    <div className="bg-night-800 text-sand-200 py-3">
      <div className="section-container">
        <p className="text-sm text-center">
          {site.disclaimer}
        </p>
      </div>
    </div>
  );
}
