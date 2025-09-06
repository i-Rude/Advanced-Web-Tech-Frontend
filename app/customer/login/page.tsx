"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-1">Customer Login</h1>
      <p className="text-sm text-black/70 dark:text-black/70 mb-6">
        Access your account to view orders and manage your profile.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-3 py-2 bg-transparent"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm mb-1">Password</label>
          <input
            id="password"
            type="password"
            className="w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-3 py-2 bg-transparent"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-black text-white px-3 py-2 text-sm"
        >
          Login
        </button>
      </form>

      <p className="text-sm mt-4">
        New customer? <Link className="underline" href="/customer/register">Create an account</Link>
      </p>
    </div>
  );
}
