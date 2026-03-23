import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16 text-zinc-50">
      <main className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl backdrop-blur">
        <p className="text-sm uppercase tracking-[0.24em] text-amber-300">
          Starter App
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Welcome Back
        </h1>
        <p className="mt-4 max-w-lg text-zinc-300">
          Your Next.js project is ready. Continue to the login screen to test
          the form experience.
        </p>
        <div className="mt-8">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
          >
            Open Login Page
          </Link>
        </div>
      </main>
    </div>
  );
}
