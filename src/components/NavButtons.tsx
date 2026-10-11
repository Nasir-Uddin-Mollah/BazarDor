"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button, Dropdown, Label, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavButtons = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে সাইন আউট হয়েছে।");
          router.push("/sign-in");
        },
      },
    });
  };

  return (
    <>
      {session?.user ? (
        <Dropdown>
          <Button
            aria-label="User Menu"
            variant="ghost"
            className="flex h-9 items-center gap-2 rounded-xl bg-[#E5ECE5] px-2.5 py-1.5 transition-colors hover:bg-[#dce3dc] border-0 outline-none shadow-none cursor-pointer sm:h-10"
          >
            <div className="flex size-6 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white sm:size-7">
              {session.user.name?.[0]?.toLowerCase() || "u"}
            </div>
            <span className="text-xs font-medium text-gray-800 sm:text-sm">
              {session.user.name || "User"}
            </span>
            <FaCaretDown className="size-2.5 text-gray-600" />
          </Button>

          <Dropdown.Popover
            placement="bottom end"
            className="w-52 rounded-2xl border border-[#E1E8E1] bg-white p-3 shadow-xl outline-none sm:w-56"
          >
            <div className="px-2 pt-1 pb-2">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {session.user.name || "User"}
              </p>
              <p className="text-xs text-gray-400 mt-0.5 truncate">
                {session.user.email || ""}
              </p>
            </div>

            <Dropdown.Menu className="flex flex-col gap-1 p-0 outline-none">
              <Dropdown.Item
                id="profile"
                textValue="আমার প্রোফাইল"
                className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 cursor-pointer outline-none"
              >
                <Link
                  href="/profile"
                  className="flex w-full items-center gap-2.5"
                >
                  <FaUser className="size-3.5 text-gray-800 shrink-0" />
                  <Label className="cursor-pointer text-sm font-medium text-gray-800">
                    আমার প্রোফাইল
                  </Label>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item
                id="logout"
                textValue="সাইন আউট"
                variant="danger"
                onAction={handleSignOut}
                className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-rose-500 transition-colors hover:bg-rose-50 cursor-pointer outline-none"
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-2.5 border-0 bg-transparent p-0 text-left outline-none cursor-pointer"
                >
                  <span className="text-sm font-bold text-rose-500 shrink-0 leading-none">
                    ↩
                  </span>
                  <Label className="cursor-pointer text-sm font-medium text-rose-500">
                    সাইন আউট
                  </Label>
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      ) : (
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
      )}
    </>
  );
};

export default NavButtons;
