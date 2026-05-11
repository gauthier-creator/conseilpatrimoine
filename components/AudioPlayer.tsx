"use client";

import { useEffect, useRef, useState } from "react";

export function AudioPlayer() {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onTime = () => {
      setTime(el.currentTime);
      setProgress(el.duration ? (el.currentTime / el.duration) * 100 : 0);
    };
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => setPlaying(false);
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play();
      setPlaying(true);
    }
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, "0")}`;
  };

  return (
    <div className="card p-5 sm:p-6 flex items-center gap-4">
      <audio ref={ref} src="/emilie-edition-zero.mp3" preload="metadata" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="shrink-0 w-14 h-14 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center hover:bg-[var(--color-accent-deep)] transition-colors shadow-[0_8px_22px_-8px_rgba(255,91,38,0.6)]"
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <p className="font-display font-semibold text-sm sm:text-base truncate">
            Emilie — l'édito audio du vendredi
          </p>
          <span className="font-mono text-xs text-[var(--color-ink-mute)] shrink-0">
            {fmt(time)} / {fmt(duration || 0)}
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-[var(--color-bg-2)] overflow-hidden">
          <div
            className="h-full bg-[var(--color-ink)] transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="label mt-2 truncate">Episode pilote · Bonus newsletter du vendredi</p>
      </div>
    </div>
  );
}
