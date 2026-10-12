"use client";

import React from "react";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface SocialButtonsProps {
  isSubmitting?: boolean;
  socialLoading?: "google" | "github" | null;
  onSocialClick: (provider: "google" | "github") => void;
  showDivider?: boolean;
  dividerText?: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({
  isSubmitting = false,
  socialLoading = null,
  onSocialClick,
  showDivider = true,
  dividerText = "অথবা",
}) => {
  const isAnyLoading = isSubmitting || socialLoading !== null;

  return (
    <>
      {showDivider && (
        <div className="my-5 flex w-full items-center gap-3">
          <div className="h-px flex-1 bg-[#E1E8E1]" />
          <span className="text-xs font-normal text-gray-500">{dividerText}</span>
          <div className="h-px flex-1 bg-[#E1E8E1]" />
        </div>
      )}

      <div className="grid w-full grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          isDisabled={isAnyLoading}
          onClick={() => onSocialClick("google")}
          className={`flex h-11 w-full items-center justify-center gap-1.5 rounded-xl px-2 text-xs font-medium shadow-none transition-colors ${
            socialLoading !== null
              ? "bg-[#E5ECE5] text-gray-500 border-transparent cursor-not-allowed"
              : isSubmitting
                ? "border border-[#E1E8E1] bg-white text-gray-400 cursor-not-allowed opacity-60"
                : "border border-[#E1E8E1] bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"
          }`}
        >
          {socialLoading === "google" ? (
            <>
              <span className="size-3.5 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
              <span className="truncate">Google দিয়ে চালিয়ে যান</span>
            </>
          ) : (
            <>
              <FcGoogle
                className={`size-4 shrink-0 text-base ${
                  socialLoading !== null ? "opacity-40 grayscale" : ""
                }`}
              />
              <span className="truncate">Google দিয়ে চালিয়ে যান</span>
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          isDisabled={isAnyLoading}
          onClick={() => onSocialClick("github")}
          className={`flex h-11 w-full items-center justify-center gap-1.5 rounded-xl px-2 text-xs font-medium shadow-none transition-colors ${
            socialLoading !== null
              ? "bg-[#E5ECE5] text-gray-500 border-transparent cursor-not-allowed"
              : isSubmitting
                ? "border border-[#E1E8E1] bg-white text-gray-400 cursor-not-allowed opacity-60"
                : "border border-[#E1E8E1] bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"
          }`}
        >
          {socialLoading === "github" ? (
            <>
              <span className="size-3.5 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
              <span className="truncate">GitHub দিয়ে চালিয়ে যান</span>
            </>
          ) : (
            <>
              <FaGithub
                className={`size-4 shrink-0 text-base ${
                  socialLoading !== null ? "text-gray-500" : "text-gray-800"
                }`}
              />
              <span className="truncate">GitHub দিয়ে চালিয়ে যান</span>
            </>
          )}
        </Button>
      </div>
    </>
  );
};

export default SocialButtons;
