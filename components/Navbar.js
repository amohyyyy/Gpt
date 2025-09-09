"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, setTheme }) {
  return (
    <nav className="bg-transparent py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-primary">
            Edu<span className="text-accent">Mate</span>
          </div>
          <div className="hidden md:block text-sm text-muted">منصة تعليمية ذكية</div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/student" className="text-sm">الدروس</Link>
          <Link href="/admin" className="text-sm">لوحة الأدمن</Link>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
}
