import {Button} from "../components/buttons/Button";

export function DarkModeSwitch() {
  function handleDarkMode() {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  }

  return (
    <div className="p-4">
      <Button
        borderColor="border-green-500"
        backgroundColorHover="hover:bg-green-700"
        textColor="text-green-700"
        onClick={handleDarkMode}
      >
        Dark Mode
      </Button>
    </div>
  );
}
