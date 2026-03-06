import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8 max-w-2xl mx-auto">

      {/* Top Navigation */}
      <div className="flex justify-between w-full mb-10">
        <Link
          href="/week-3"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md 
                     text-sm font-medium hover:bg-slate-700 transition"
        >
          ← Previous
        </Link>

        <Link
          href="/week-5"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md 
                     text-sm font-medium hover:bg-slate-700 transition"
        >
          Next →
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2 text-center">
        Shopping List
      </h1>

      {/* Item List Container */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
        <ItemList />
      </div>

      {/* Bottom Home Button */}
      <div className="flex justify-center mt-12">
        <Link
          href="/"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md 
                     text-sm font-medium hover:bg-slate-700 transition"
        >
          Home
        </Link>
      </div>

    </main>
  );
}
