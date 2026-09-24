import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { appInfo } from "../appInfo";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#screenshots", label: "Screenshots" },
  { href: "/#download", label: "Download" },
  { href: "/privacy", label: "Privacy" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-ledger bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-medium text-ink">
          <svg width="24" height="24" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#1F5F4A" />
            <path d="M16 22h32M16 32h32M16 42h20" stroke="#F5F6F3" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="42" r="6" fill="#F5F6F3" />
          </svg>
          {appInfo.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) =>
            onHome ? (
              <a key={l.href} href={l.href} className="text-ink/70 transition hover:text-ink">
                {l.label}
              </a>
            ) : (
              <Link key={l.href} to={l.href} className="text-ink/70 transition hover:text-ink">
                {l.label}
              </Link>
            )
          )}
          <a
            href={appInfo.apkPath}
            download
            className="rounded-full bg-moss px-4 py-2 text-sm font-medium text-paper transition hover:bg-mossdark"
          >
            Download APK
          </a>
        </nav>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-ledger px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4 text-sm">
            {links.map((l) =>
              onHome ? (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink/80">
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-ink/80">
                  {l.label}
                </Link>
              )
            )}
            <a
              href={appInfo.apkPath}
              download
              className="rounded-full bg-moss px-4 py-2 text-center text-sm font-medium text-paper"
            >
              Download APK
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
