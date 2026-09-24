import { appInfo } from "../appInfo";

export default function Privacy() {
  return (
    <section className="mx-auto max-w-prose px-6 py-20">
      <h1 className="font-display text-4xl font-medium">Privacy Policy</h1>
      <p className="mt-3 text-sm text-ink/50">Last updated: [DATE]</p>

      <div className="mt-10 space-y-10 text-ink/80">
        <div>
          <h2 className="font-display text-xl font-medium text-ink">Information</h2>
          <p className="mt-3">
            This policy describes how {appInfo.name} ({appInfo.platform}, package{" "}
            <code className="font-mono text-sm">{appInfo.packageName}</code>) handles
            information. SubTrack lets you record recurring subscriptions — name, price,
            currency, and billing period.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-ink">Data storage</h2>
          <p className="mt-3">
            [CONFIRM WITH DEVELOPER]: Please confirm exactly how and where subscription
            data is stored (for example, only on the device, or synced to an account) and
            replace this paragraph with an accurate description. Do not publish this page
            until this section reflects the real behavior of the app.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-ink">Permissions</h2>
          <p className="mt-3">The installed APK requests the following Android permissions:</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Internet access</li>
            <li>Network state access</li>
            <li>Biometric / fingerprint authentication</li>
          </ul>
          <p className="mt-3 text-sm text-ink/60">
            [NOTE] The app package also includes Google Firebase authentication and
            Firestore components. If these are active in the app (for example, sign-in or
            cloud sync of subscriptions), this policy must say so explicitly, including
            what is sent off-device and to whom. Please confirm and update this section
            before publishing.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-ink">Third-party services</h2>
          <p className="mt-3">
            [CONFIRM WITH DEVELOPER]: List any third-party services the app actually uses
            (for example, Google Sign-In or Firebase) and what data, if any, they receive.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-ink">Data sharing</h2>
          <p className="mt-3">
            [CONFIRM WITH DEVELOPER]: Describe whether any data is shared with third
            parties. If none, state that plainly.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-ink">Contact</h2>
          <p className="mt-3">
            Questions about this policy can be sent to{" "}
            <span className="font-mono text-sm">[CONTACT EMAIL]</span>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-medium text-ink">Changes to this policy</h2>
          <p className="mt-3">
            This policy may be updated from time to time. Changes will be posted on this
            page with a revised "Last updated" date.
          </p>
        </div>
      </div>
    </section>
  );
}
