import logo from "../../src/assets/logo-40x40.png";
import {DarkModeSwitch} from "./DarkModeSwitch";

export function Header() {
  return (
    <div className="ml-4 mr-4 border-b-2 dark:border-white">
      <div className="flex justify-between ">
        <div className="flex flex-row items-center gap-2 p-4">
          <img src={logo} alt="logo" />
          <div className="text-black dark:text-white">Note</div>
        </div>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
