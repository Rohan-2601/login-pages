import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-100 px-4 py-8 md:px-8 md:py-12">
      <main className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl md:min-h-170 md:grid-cols-2">
        <section className="relative min-h-65 md:min-h-full">
          <Image
            src="/login.png"
            alt="Login visual"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-zinc-900/55 via-zinc-900/20 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-xs text-white md:bottom-10 md:left-10">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-100/85">
              Workspace Login
            </p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              Welcome back. Sign in to continue.
            </h1>
          </div>
        </section>

        <section className="flex items-center p-6 md:p-12">
          <form className="w-full max-w-md space-y-5" action="#" method="post">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
                Log In
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                Use your email and password to access your account.
              </p>
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-zinc-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
              />
            </div>

            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-zinc-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/20"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-zinc-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-300"
                  name="remember"
                />
                Remember me
              </label>
              <a href="#" className="font-medium text-zinc-900 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
