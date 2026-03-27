"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8 flex flex-col items-center justify-center">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Week 9 – Shopping List with Auth
      </h1>

      {!user && (
        <>
          <p className="text-lg mb-4">Please log in with GitHub to continue.</p>

          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md 
                       hover:bg-slate-700 transition text-white"
          >
            Log in with GitHub
          </button>
        </>
      )}

      {user && (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">
            Welcome, <strong>{user.displayName}</strong> ({user.email})
          </p>

          <Link
            href="/week-10/shopping-list"
            className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition text-white"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-500 transition text-white"
          >
            Log Out
          </button>
        </div>
      )}
    </main>
  );
}