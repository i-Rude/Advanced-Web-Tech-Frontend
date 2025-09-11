"use client";
import { use } from "react";
import Link from "next/link";

export default function OrderOID({
  params,
}: { params: Promise<{ o_id: string }> }) {
  const { o_id } = use(params);

  return (
    <div className="max-w-md mx-auto p-6 border border-black/[.08] rounded-md mt-8">
      <h1 className="text-2xl font-semibold mb-4">Order Details</h1>

      <div className="space-y-2">
        <p>
          <span className="font-medium">Order ID:</span> {o_id}
        </p>
        <p>
          <span className="font-medium">Status:</span>{" "}
          <span className="text-yellow-600 font-medium">Processing...</span>
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          href="/orders"
          className="inline-block px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Back to Orders
        </Link>

        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Cancel Order
        </button>
      </div>
    </div>
  );
}

