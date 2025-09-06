import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <h1 className="text-2xl font-semibold mb-2">Welcome to E-Shop</h1>
      <p className="text-sm text-gray-600 mb-6">
        Manage your shopping experience. Browse products, track orders, and get support.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <div className="rounded-lg border border-black-200 p-4">
          <h2 className="font-medium mb-1">Orders</h2>
          <p className="text-sm text-gray-600 mb-3">
            View your order history and track deliveries.
          </p>

          <Link
            href="/customer/orders"
            className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-black text-white font-semibold text-3xl tracking-tight"
          >
            View Orders
          </Link>
        </div>


        <div className="rounded-lg border border-black-200 p-4">
          <h2 className="font-medium mb-1">Support</h2>
          <p className="text-sm text-gray-600 mb-3">
            Get help with orders, returns, and account issues.
          </p>

          <Link
            href="/customer/support"
            className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-black text-white font-semibold text-3xl tracking-tight"
          >
            Get Support
          </Link>
        </div>

        
      </div>
    </div>
  );
}
