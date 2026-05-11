"use client";

import { useState } from "react";

type Variant = "hero" | "footer";

export function EmailForm({ variant = "hero" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to ESP (Brevo, Loops, Resend, ConvertKit…)
    console.log("[conseilpatrimoine] subscribe", email);
    setDone(true);
    if (typeof window !== "undefined") {
      window.alert("Merci ! Vous recevrez le brief demain matin à 7h.");
    }
  };

  if (variant === "footer") {
    return (
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vous@cabinet.fr"
          disabled={done}
          className="flex-1 bg-[var(--color-bg)] border border-[var(--color-rule)] rounded-[10px] px-4 py-3 font-mono text-sm focus:outline-none focus:border-[var(--color-accent)] disabled:opacity-60"
        />
        <button type="submit" disabled={done} className="btn-primary text-sm whitespace-nowrap disabled:opacity-60">
          {done ? "Inscrit·e" : "Recevoir 7h →"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-2xl border border-[var(--color-rule)] shadow-[0_24px_48px_-32px_rgba(15,15,15,0.25)]">
        <div className="flex-1 flex items-center gap-3 px-4">
          <span className="text-[var(--color-ink-mute)] font-mono text-xs hidden sm:inline">@</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="prenom@votre-cabinet.fr"
            disabled={done}
            className="flex-1 bg-transparent py-3 sm:py-4 text-base focus:outline-none disabled:opacity-60 font-mono"
          />
        </div>
        <button type="submit" disabled={done} className="btn-primary disabled:opacity-60">
          {done ? "✓ Inscrit·e" : "Recevoir le brief de demain →"}
        </button>
      </div>
      <p className="mt-3 label flex items-center gap-2 flex-wrap">
        <span>Gratuit</span>
        <span className="opacity-40">·</span>
        <span>Désinscription en 1 clic</span>
        <span className="opacity-40">·</span>
        <span>Aucun partage email</span>
      </p>
    </form>
  );
}
