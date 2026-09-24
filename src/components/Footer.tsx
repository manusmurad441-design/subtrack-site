import { Link } from "react-router-dom";
import { appInfo } from "../appInfo";

export default function Footer() {
  return (
    <footer className="border-t border-ledger bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-lg font-medium">{appInfo.name}</p>
            <p className="mt-1 text-sm text-ink/60">Android subscription tracker</p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href={appInfo.apkPath} download className="text-ink/80 hover:text-ink">
              Download APK
            </a>
            <Link to="/privacy" className="text-ink/80 hover:text-ink">
              Privacy Policy
            </Link>
            <Link to="/license" className="text-ink/80 hover:text-ink">
              License
            </Link>
          </div>
        </div>

        <p className="mt-10 text-xs text-ink/50">Copyright © 2026 {appInfo.name}</p>
      </div>
    </footer>
  );
}
