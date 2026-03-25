import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-200 px-4 py-8 md:px-8 md:py-12">
      <main className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-stone-300 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] md:min-h-170 md:grid-cols-2">
        <section className="group relative min-h-65 md:min-h-full">
          <Image
            src="/login.png"
            alt="Login visual"
            fill
            priority
            className="object-cover object-[50%_78%] login-image-motion"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-zinc-950/65 via-zinc-900/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-zinc-950/75 to-transparent" />
          <div className="absolute bottom-6 left-6 max-w-sm text-white md:bottom-10 md:left-10">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-100/85">
              Curated Workspace
            </p>
            <h1 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
              Craft your day with a focused login experience.
            </h1>
          </div>
        </section>

        <section className="flex items-center p-6 md:p-12">
          <form className="w-full max-w-md space-y-5" action="#" method="post">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Welcome Back
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
                Log In
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
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
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-200"
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
                className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2 text-zinc-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-stone-300 text-amber-700 focus:ring-amber-300"
                  name="remember"
                />
                Remember me
              </label>
              <a
                href="#"
                className="font-medium text-zinc-800 underline-offset-4 transition hover:text-amber-700 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-zinc-600">
              New here?{" "}
              <a
                href="#"
                className="font-semibold text-zinc-900 underline-offset-4 transition hover:text-amber-700 hover:underline"
              >
                Create an account
              </a>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
