import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import cn from "../lib/utils.js";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    // if (storedTheme === "dark") {
    //   setIsDarkMode(true);
    //   document.documentElement.classList.add("dark");
    // } else {
    //   setIsDarkMode(false);
    //   document.documentElement.classList.add("light");
    // }
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      // No stored theme, use default (true = dark)
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      //   className={cn(
      //     "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
      //     "focus:outline-hidden",
      //   )}
      className={cn(
        "fixed bottom-5 right-5 sm:top-5 sm:bottom-auto z-[999] p-3 rounded-full transition-colors duration-300 bg-white dark:bg-gray-800 shadow-lg",
        "focus:outline-none",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
