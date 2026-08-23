import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-center">
      <p className="font-mono text-sm text-dim">404</p>
      <h1 className="mt-3 text-2xl font-semibold">Page not found</h1>
      <Link
        href="/"
        className="mt-6 rounded-panel border border-line px-4 py-2 text-sm text-ink"
      >
        Return to command center
      </Link>
    </main>
  );
}
