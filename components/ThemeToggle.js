use client";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg ring-1 ring-slate-200 dark:ring-0"
      aria-label="تبديل الثيم"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
