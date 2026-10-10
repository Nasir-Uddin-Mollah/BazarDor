import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import NavButtons from "./NavButtons";
import Categories from "./Categories";

export const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Navbar = () => {
  return (
    <header className="sticky w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex min-h-[68px] max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:h-[68px] sm:px-4 sm:py-0 border-b border-gray-100">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-700">
            <FaCartShopping aria-hidden="true" className="size-5 text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="whitespace-nowrap text-[22px] leading-7 font-bold text-gray-800 sm:text-[26px]">
              বাজার দর
            </h2>
            <p
              suppressHydrationWarning
              className="w-[108px] text-xs leading-4 text-gray-500 sm:w-auto sm:whitespace-nowrap"
            >
              {date}
            </p>
          </div>
        </Link>
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <NavButtons />
        </div>
      </nav>
      <Categories />
    </header>
  );
};

export default Navbar;