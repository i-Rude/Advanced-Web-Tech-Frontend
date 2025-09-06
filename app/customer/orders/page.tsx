"use client";

import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-1">Your Orders</h1>
      <p className="text-sm text-black/70 dark:text-black/70 mb-6">
        View and manage your recent orders.
      </p>

      <div className="space-y-3">
        <Link
          href="/customer/orders/1001"
          className="block w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-4 py-3 hover:bg-black/5"
        >
          Order #1001
        </Link>

        <Link
          href="/customer/orders/1002"
          className="block w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-4 py-3 hover:bg-black/5"
        >
          Order #1002
        </Link>

        <Link
          href="/customer/orders/1003"
          className="block w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-4 py-3 hover:bg-black/5"
        >
          Order #1003
        </Link>

        <Link
          href="/customer/orders/1004"
          className="block w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-4 py-3 hover:bg-black/5"
        >
          Order #1004
        </Link>

        <Link
          href="/customer/orders/1005"
          className="block w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-4 py-3 hover:bg-black/5"
        >
          Order #1005
        </Link>

        <Link
          href="/customer/orders/1006"
          className="block w-full rounded-md border border-black/[.08] dark:border-black/[.145] px-4 py-3 hover:bg-black/5"
        >
          Order #1006
        </Link>

      </div>

      <p className="text-sm mt-4">
        Need help?{" "}
        <Link className="underline" href="/customer/support">
          Get support
        </Link>
      </p>

    </div>
  );
}
