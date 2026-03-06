import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Jaspreet Kaur</h2>

      <p className="text-slate-300">
        GitHub:{" "}
        <Link
          href="https://github.com/000931438/cprg306-assignments"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
