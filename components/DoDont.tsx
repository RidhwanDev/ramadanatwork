interface DoDontProps {
  dos?: string[];
  donts?: string[];
}

export function DoDont({ dos, donts }: DoDontProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {dos && dos.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-green-700 mb-4">
            <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-sm">
              ✓
            </span>
            Do
          </h3>
          <ul className="space-y-3">
            {dos.map((item, i) => (
              <li key={i} className="flex gap-3 text-night-700">
                <span className="text-green-500 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {donts && donts.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-red-700 mb-4">
            <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-sm">
              ✗
            </span>
            Don&apos;t
          </h3>
          <ul className="space-y-3">
            {donts.map((item, i) => (
              <li key={i} className="flex gap-3 text-night-700">
                <span className="text-red-400 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
