import logo from "../../src/assets/logo-40x40.png";
import {DarkModeSwitch} from "./DarkModeSwitch";

export function Header() {
  return (
    <div className="border-b-2 border-b-gray-400">
      <div className="flex justify-between ">
        <div className="flex flex-row items-center gap-2 p-4">
          <img src={logo} alt="logo" />
          <div>Note</div>
        </div>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
