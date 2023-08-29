import {useState, useEffect} from "react";

export function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("color-theme") || "light");

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("color-theme", darkMode);
  }, [darkMode]);

  function handleDarkMode() {
    setDarkMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <div className="p-4">
      <button
        type="button"
        className="w-40 py-2 px-4 bg-transparent dark:hover:bg-gray-100 hover:bg-gray-900 hover:text-white dark:hover:text-black text-black dark:text-white font-semibold border-2 border-black dark:border-white rounded"
        onClick={handleDarkMode}
      >
        Dark Mode: {darkMode === "dark" ? "ON" : "OFF"}
      </button>
    </div>
  );
}
