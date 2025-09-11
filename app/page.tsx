import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-semibold mb-2 text-black">Welcome to E-Shop</h1>
      <p className="text-sm text-gray-600 mb-6">
        Manage your shopping experience. Browse products, track orders, and get support.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Orders Card */}
        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="font-medium mb-1 text-black">Orders</h2>
          <p className="text-sm text-gray-600 mb-3">
            View your order history and track deliveries.
          </p>
          <Link
            href="/orders"
            className="inline-block px-4 py-2 text-sm rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            View Orders
          </Link>
        </div>

        {/* Support Card */}
        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="font-medium mb-1 text-black">Support</h2>
          <p className="text-sm text-gray-600 mb-3">
            Get help with orders, returns, and account issues.
          </p>
          <Link
            href="/support"
            className="inline-block px-4 py-2 text-sm rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Get Support
          </Link>
        </div>
      </div>
    </div>
  );
}