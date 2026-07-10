"use client";

import { useState } from "react";
import type { Company } from "@/data/companies";

function sitePreviewUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800`;
}

function isDark(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

interface SitePreviewProps {
  company: Company;
}

export default function SitePreview({ company }: SitePreviewProps) {
  const [imgSrc, setImgSrc] = useState(sitePreviewUrl(company.url));
  const [loaded, setLoaded] = useState(false);
  const darkChrome = isDark(company.chrome);
  const chromeText = darkChrome ? "rgba(255,255,255,0.7)" : company.accent;
  const dotMuted = darkChrome ? "rgba(255,255,255,0.25)" : `${company.accent}33`;

  return (
    <div
      className="flex flex-col border-b"
      style={{
        backgroundColor: company.chrome,
        borderColor: `${company.accent}22`,
      }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2.5"
        style={{ borderBottom: `1px solid ${company.accent}18` }}
      >
        <div className="flex gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: company.accent }}
          />
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dotMuted }} />
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: dotMuted }} />
        </div>
        <div
          className="mx-auto flex min-w-0 max-w-[70%] items-center justify-center rounded-sm px-3 py-1"
          style={{ backgroundColor: company.surface }}
        >
          <span
            className="truncate text-[10px]"
            style={{ color: chromeText }}
          >
            {company.domain}
          </span>
        </div>
      </div>

      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ backgroundColor: company.surface }}
      >
        {!loaded && (
          <div
            className="absolute inset-0 animate-pulse"
            style={{ backgroundColor: company.tint }}
          />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={`${company.name} website preview`}
          className={`h-full w-full object-cover object-top transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (imgSrc !== company.image) {
              setImgSrc(company.image);
              setLoaded(false);
            }
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: `${company.accent}cc` }}
        >
          <span className="text-[11px] font-medium tracking-wide text-white">
            Open live site →
          </span>
        </div>
      </div>
    </div>
  );
}
