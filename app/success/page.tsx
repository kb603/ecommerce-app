"use client";

import { useCartStore } from "@/store/cartStore";
import Link from "next/link";
import { useEffect } from "react";

export default function page() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
      <p className="text-lg mb-2">Your order has been successfully placed.</p>
      <p className="text-lg mb-4">
        We appreciate your business and hope you enjoy your purchase!
      </p>
      <Link href={"/products"}>Continue Shopping</Link>
    </div>
  );
}
