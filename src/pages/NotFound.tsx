import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-prose px-6 py-32 text-center">
      <h1 className="font-display text-4xl font-medium">Page not found</h1>
      <p className="mt-4 text-ink/60">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-8 inline-block rounded-full bg-moss px-6 py-3 font-medium text-paper hover:bg-mossdark">
        Back to home
      </Link>
    </section>
  );
}
