import { Star } from "lucide-react";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-gold text-gold" />
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="size-6 shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9h11.8c-.5 2.8-2 5.1-4.4 6.7v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.5z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7C8.1 41.3 15.4 46 24 46z"
      />
      <path fill="#FBBC05" d="M11.8 28.3A13.2 13.2 0 0 1 11.1 24c0-1.5.3-3 .7-4.3v-5.7H4.5A22 22 0 0 0 2 24c0 3.6.9 6.9 2.5 9.9l7.3-5.6z" />
      <path
        fill="#EA4335"
        d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8.1 6.7 4.5 14l7.3 5.7c1.7-5.2 6.5-9 12.2-9z"
      />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg viewBox="0 0 48 48" className="size-6 shrink-0" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#1877F2" />
      <path
        fill="#fff"
        d="M31 24h-5v16h-6V24h-4v-5h4v-3.6c0-4 1.9-6.4 6.6-6.4H31v5h-2.6c-1.5 0-1.9.6-1.9 2V19H31l-.6 5z"
      />
    </svg>
  );
}

export function ReviewBadges({ tone = "light" }: { tone?: "light" | "dark" }) {
  const shell =
    tone === "dark"
      ? "bg-forest-foreground/10 border-forest-foreground/20 text-forest-foreground"
      : "bg-card border-border text-foreground shadow-sm";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {[
        { mark: <GoogleMark />, name: "Google Reviews", score: "5.0", count: "48" },
        { mark: <FacebookMark />, name: "Facebook", score: "5.0", count: "32" },
      ].map((r) => (
        <div
          key={r.name}
          className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 ${shell}`}
        >
          {r.mark}
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight">{r.score}</span>
              <Stars />
            </div>
            <span className={`text-[0.72rem] font-medium ${tone === "dark" ? "text-forest-foreground/85" : "text-muted-foreground"}`}>
              {r.name} · {r.count} reviews
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
