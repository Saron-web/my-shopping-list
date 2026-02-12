"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      <ul className="list-disc ml-6">
        <li>
          <Link href="/week-5" className="text-blue-600 underline">
            Week 5
          </Link>
        </li>
      </ul>
    </main>
  );
}
