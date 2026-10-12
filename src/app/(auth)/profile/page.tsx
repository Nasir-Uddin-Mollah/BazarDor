"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoReturnDownBackOutline } from "react-icons/io5";
import ProfileSkeleton from "@/components/skeletons/ProfileSkeleton";
import { Button, Form, Input, Label, TextField } from "@heroui/react";

const ProfilePage = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/sign-in");
    }
  }, [isPending, session, router]);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            toast.success("সফলভাবে সাইন আউট হয়েছে।");
            router.replace("/");
            router.refresh();
          },
          onError: () => {
            setIsSigningOut(false);
            toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
          },
        },
      });
    } catch {
      setIsSigningOut(false);
      toast.error("সাইন আউট করতে সমস্যা হয়েছে।");
    }
  };

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const { data: updatedUser, error } = await updateUser({
        name: data.name as string,
      });
      if (error) {
        toast.error("প্রোফাইল আপডেট হয়নি।");
        return;
      }
      if (updatedUser) {
        toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে।");
      }
    } catch {
      toast.error("প্রোফাইল আপডেট করতে সমস্যা হয়েছে।");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isPending || !session) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-12">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          আমার প্রোফাইল
        </h1>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-4">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "Avatar"}
              width={64}
              height={64}
              className="size-16 rounded-2xl border border-[#E1E8E1] object-cover"
            />
          ) : (
            <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-700 text-xl font-bold text-white">
              {session.user.name?.[0]?.toUpperCase() || (
                <FaUser className="size-6 text-white" />
              )}
            </div>
          )}
          <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              {session.user.name}
            </h2>
            <p className="text-xs text-gray-500 sm:text-sm">
              {session.user.email}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="inline-flex items-center justify-center gap-1.5 self-start rounded-xl border border-rose-300 bg-white px-4 py-2 text-xs font-semibold text-rose-500 transition-colors hover:bg-rose-50 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 sm:self-center sm:text-sm"
        >
          {isSigningOut ? (
            <>
              <span className="size-3.5 animate-spin rounded-full border-2 border-rose-500 border-t-transparent" />
              <span>সাইন আউট হচ্ছে...</span>
            </>
          ) : (
            <>
              <IoReturnDownBackOutline className="size-4 shrink-0 text-rose-500" />
              <span>সাইন আউট</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5 sm:p-6">
        <h3 className="text-base font-bold text-gray-900 sm:text-lg">তথ্য</h3>
        <Form className="mt-5 flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            key={session?.user?.name || "name"}
            name="name"
            aria-label="নাম"
            defaultValue={session?.user?.name || ""}
            className="flex w-full flex-col gap-1.5 [&_.label]:after:!hidden"
          >
            <Label className="text-xs font-semibold text-gray-800 sm:text-sm">
              নাম
            </Label>
            <Input
              name="name"
              aria-label="নাম"
              placeholder="আপনার নাম"
              className="h-11 w-full rounded-xl border border-[#E1E8E1] bg-white px-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </TextField>
          <Button
            type="submit"
            isDisabled={isSubmitting}
            className={`mt-2 h-11 w-full rounded-xl text-sm font-semibold transition-colors ${
              isSubmitting
                ? "bg-[#E5ECE5] text-gray-500 cursor-not-allowed shadow-none"
                : "bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 cursor-pointer"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="size-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
                <span>অপেক্ষা করুন...</span>
              </span>
            ) : (
              "আপডেট"
            )}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
