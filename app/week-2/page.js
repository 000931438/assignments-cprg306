import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-8">

      {/* Navigation Bar */}
      <div className="w-full max-w-2xl flex justify-between mb-10">

        <Link
          href="/"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm font-medium hover:bg-slate-700 transition"
        >
          ← Previous
        </Link>

        <Link
          href="/week-3"
          className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-sm font-medium hover:bg-slate-700 transition"
        >
          Next →
        </Link>

      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>

      {/* Student Info Card */}
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-slate-700">
        <StudentInfo />
      </div>
    </main>
  );
}
