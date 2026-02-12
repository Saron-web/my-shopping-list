"use client";

import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <section className="w-full max-w-lg">
        <NewItem />
      </section>
    </main>
  );
}