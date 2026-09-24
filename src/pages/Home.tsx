import { appInfo } from "../appInfo";

const fields = [
  { label: "Name", desc: "What the subscription is called, so it's easy to recognize in a list." },
  { label: "Price", desc: "The amount charged each billing cycle." },
  { label: "Currency", desc: "The currency the subscription is billed in." },
  { label: "Billing period", desc: "How often it renews — monthly or yearly." },
];

const screenshots = [
  { id: "home", label: "Home — subscription list" },
  { id: "add", label: "Add subscription" },
  { id: "settings", label: "Settings" },
];

const steps = [
  { n: "01", title: "Download the APK", body: "Get SubTrack.apk from the download section below." },
  { n: "02", title: "Open the file", body: "Open the downloaded file from your notifications or downloads folder." },
  { n: "03", title: "Follow the prompt", body: "Android will ask you to confirm the install. Allow it to continue." },
  { n: "04", title: "Open SubTrack", body: "Launch the app and start adding your subscriptions." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-ledger">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-moss">Android · APK download</p>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] text-ink md:text-6xl">
              {appInfo.name}
            </h1>
            <p className="mt-5 max-w-prose text-lg text-ink/70">
              Track your subscriptions in one simple place.
            </p>
            <p className="mt-3 max-w-prose text-ink/60">
              SubTrack is a lightweight Android app for keeping a plain list of what you're
              paying for — name, price, currency and billing period — so nothing renews as
              a surprise.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={appInfo.apkPath}
                download
                className="rounded-full bg-moss px-6 py-3 font-medium text-paper transition hover:bg-mossdark"
              >
                Download APK
              </a>
              <a href="#features" className="rounded-full border border-ink/20 px-6 py-3 font-medium text-ink transition hover:border-ink/40">
                View features
              </a>
            </div>
          </div>

          {/* A simple ledger-style illustration of the concept, not a fake app screenshot */}
          <div className="rounded-2xl border border-ledger bg-white/60 p-6 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-wide text-ink/40">This month</p>
            <ul className="mt-4 divide-y divide-ledger">
              {[
                ["Cloud Storage", "$9.99", "Monthly"],
                ["Music", "$11.99", "Monthly"],
                ["News Archive", "$79.00", "Yearly"],
              ].map(([name, price, period]) => (
                <li key={name} className="flex items-center justify-between py-3">
                  <span className="text-sm text-ink/80">{name}</span>
                  <span className="flex items-center gap-3 text-sm">
                    <span className="font-mono text-ink/60">{period}</span>
                    <span className="font-medium text-ink">{price}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink/40">Illustrative example — not a product screenshot.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-ledger">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-medium">What SubTrack tracks</h2>
          <p className="mt-3 max-w-prose text-ink/60">
            Every subscription you add is recorded with four fields, kept simple on purpose.
          </p>

          <dl className="mt-10 divide-y divide-ledger border-y border-ledger">
            {fields.map((f) => (
              <div key={f.label} className="grid gap-1 py-5 md:grid-cols-[10rem_1fr] md:items-baseline md:gap-6">
                <dt className="font-mono text-sm text-moss">{f.label}</dt>
                <dd className="text-ink/70">{f.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* App information */}
      <section className="border-b border-ledger bg-white/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-medium">App information</h2>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">App</dt>
              <dd className="mt-1 text-ink">{appInfo.name}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">Platform</dt>
              <dd className="mt-1 text-ink">{appInfo.platform}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">Version</dt>
              <dd className="mt-1 text-ink">{appInfo.versionName}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">Package</dt>
              <dd className="mt-1 break-all text-ink">{appInfo.packageName}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">APK</dt>
              <dd className="mt-1 text-ink">{appInfo.apkFileName}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">File size</dt>
              <dd className="mt-1 text-ink">~{appInfo.apkSizeMB} MB</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink/40">Requires Android</dt>
              <dd className="mt-1 text-ink">7.0 or later</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Screenshots */}
      <section id="screenshots" className="border-b border-ledger">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-medium">Screenshots</h2>
          <p className="mt-3 max-w-prose text-ink/60">
            Screenshots haven't been added to this site yet. Replace the placeholders below
            with real images at <code className="font-mono text-sm">public/images/</code>.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {screenshots.map((s) => (
              <div
                key={s.id}
                className="flex aspect-[9/16] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-ink/25 bg-white/40 text-center"
              >
                <span className="font-mono text-xs uppercase tracking-wide text-ink/40">Image slot</span>
                <span className="px-4 text-sm text-ink/60">{s.label}</span>
                <span className="font-mono text-[11px] text-ink/30">
                  public/images/subtrack-{s.id}.png
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-b border-ledger bg-mossdark text-paper">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-medium">Download {appInfo.name}</h2>
          <p className="mt-3 max-w-prose text-paper/70">
            Get the Android APK directly from the official {appInfo.name} website.
          </p>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <dl className="grid grid-cols-3 gap-8 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-paper/50">Version</dt>
                <dd className="mt-1">{appInfo.versionName}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-paper/50">Platform</dt>
                <dd className="mt-1">{appInfo.platform}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wide text-paper/50">File</dt>
                <dd className="mt-1">{appInfo.apkFileName}</dd>
              </div>
            </dl>

            <a
              href={appInfo.apkPath}
              download
              className="whitespace-nowrap rounded-full bg-paper px-8 py-4 text-center font-medium text-mossdark transition hover:bg-white"
            >
              Download APK
            </a>
          </div>

          <p className="mt-6 text-sm text-paper/50">
            Android may ask you to allow installation from this source.
          </p>
        </div>
      </section>

      {/* Installation */}
      <section className="border-b border-ledger">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-display text-3xl font-medium">Installing the APK</h2>

          <ol className="mt-10 grid gap-8 sm:grid-cols-2">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-4">
                <span className="font-mono text-sm text-moss">{s.n}</span>
                <div>
                  <p className="font-medium text-ink">{s.title}</p>
                  <p className="mt-1 text-sm text-ink/60">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
