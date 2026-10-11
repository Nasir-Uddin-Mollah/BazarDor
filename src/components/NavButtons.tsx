import Link from "next/link";

const NavButtons = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Link
        href="/sign-in"
        className="flex h-9 items-center justify-center rounded-lg px-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-300 sm:h-10 sm:px-4 sm:text-sm"
      >
        সাইন ইন
      </Link>
      <Link
        href="/sign-up"
        className="flex h-9 items-center justify-center rounded-lg bg-emerald-700 px-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 sm:h-10 sm:px-4 sm:text-sm"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default NavButtons;
