import { Button } from "@heroui/react";

const NavButtons = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <Button
        variant="ghost"
        className="h-9 rounded-lg border-0 bg-transparent px-2 text-xs font-semibold text-gray-800 shadow-none hover:bg-gray-300 sm:h-10 sm:px-4 sm:text-sm"
      >
        সাইন ইন
      </Button>
      <Button className="h-9 rounded-lg bg-emerald-700 px-2 text-xs font-semibold text-white shadow-sm hover:bg-emerald-800 sm:h-10 sm:px-4 sm:text-sm">
        সাইন আপ
      </Button>
    </div>
  );
};

export default NavButtons;
