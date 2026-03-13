import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 p-6 text-slate-100">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
        CPRG 306: Web Development 2
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col gap-6 w-full max-w-sm">

        {/* Week 2 */}
        <Link
          href="/week-2"
          className="text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 rounded-xl text-xl transition shadow-md hover:shadow-lg"
        >
          Week-2
        </Link>

        {/* Week 3 */}
        <Link
          href="/week-3"
          className="text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 rounded-xl text-xl transition shadow-md hover:shadow-lg"
        >
          Week-3
        </Link>

        {/* Week 4 */}
        <Link
          href="/week-4"
          className="text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 rounded-xl text-xl transition shadow-md hover:shadow-lg"
        >
          Week-4
        </Link>

        {/* Week 5 */}
        <Link
          href="/week-5"
          className="text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 rounded-xl text-xl transition shadow-md hover:shadow-lg"
        >
          Week-5
        </Link>

        {/* Week 6 */}
        <Link
          href="/week-6"
          className="text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 rounded-xl text-xl transition shadow-md hover:shadow-lg"
        >
          Week-6
        </Link>

        {/* Week 7 */}
        <Link
          href="/week-7"
          className="text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 rounded-xl text-xl transition shadow-md hover:shadow-lg"
        >
          Week-7
        </Link>

        {/* Week 8 */}
        <Link
          href="/week-8"
          className="text-center border border-slate-600 bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold py-4 rounded-xl text-xl transition shadow-md hover:shadow-lg"
        >
          Week-8
        </Link>

      </div>
    </main>
  );
}
