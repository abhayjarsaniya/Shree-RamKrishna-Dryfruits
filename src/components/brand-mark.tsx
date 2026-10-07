import Link from "next/link";
import { BRAND_FULL, BRAND_SHORT, BRAND_SUBTITLE } from "@/data/site";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-2 sm:gap-2.5 ${className}`}
      aria-label={BRAND_FULL}
    >
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#6E2635] bg-[#FAF8F5] text-[#6E2635] shadow-xs sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-4 w-4 sm:h-[18px] sm:w-[18px]" fill="none">
          <path
            d="M16 5.5 C12.2 10.2 10.2 14.2 10.2 18 C10.2 21.3 12.8 24 16 24 C19.2 24 21.8 21.3 21.8 18 C21.8 14.2 19.8 10.2 16 5.5 Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M16 11v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path
            d="M16 15.5c1.8-1.2 3.2-.4 3.2 1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <div className="flex flex-col">
        <span className="truncate whitespace-nowrap font-serif text-[14px] font-semibold leading-none tracking-tight text-ink min-[360px]:text-[15px] sm:text-xl">
          {BRAND_SHORT}
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6E2635]">
          {BRAND_SUBTITLE}
        </span>
      </div>
    </Link>
  );
}
