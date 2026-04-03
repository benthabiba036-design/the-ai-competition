import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const endDate = new Date("2026-04-03T18:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, endDate - now);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [endDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MIN", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center gap-3 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="glass-panel rounded-lg px-3 py-2 sm:px-4 sm:py-3 neon-box-cyan animate-countdown-pulse min-w-[52px]">
              <span className="font-display text-xl sm:text-3xl font-bold text-primary tabular-nums">
                {String(u.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-display tracking-widest">{u.label}</span>
          </div>
          {i < units.length - 1 && (
            <span className="text-primary text-xl sm:text-2xl font-bold animate-flicker mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
