"use client";

import Link from "next/link";
import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="hover:text-blue-600">
          My Ecommerce
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>
          <button className="md:hidden">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Static mobile menu for plain UI preview */}
      <nav className="md:hidden bg-white shadow-md">
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <Link href="/" className="block hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="block hover:text-blue-600">
              Products
            </Link>
          </li>
          <li>
            <Link href="/checkout" className="block hover:text-blue-600">
              Checkout
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
