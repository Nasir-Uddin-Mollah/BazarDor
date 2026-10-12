export const ProfileSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-12 animate-pulse">
      <div className="mb-6 space-y-2">
        <div className="h-7 w-36 rounded-lg bg-gray-200/80 sm:h-8" />
        <div className="h-4 w-52 rounded bg-gray-200/60" />
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-center gap-4">
          <div className="size-16 shrink-0 rounded-2xl bg-gray-200/80" />
          <div className="space-y-2">
            <div className="h-5 w-32 rounded bg-gray-200/80" />
            <div className="h-4 w-44 rounded bg-gray-200/60" />
          </div>
        </div>
        <div className="h-9 w-24 rounded-xl bg-gray-200/70" />
      </div>

      <div className="mt-6 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5 sm:p-6 space-y-4">
        <div className="h-5 w-16 rounded bg-gray-200/80" />
        <div className="h-11 w-full rounded-xl bg-gray-200/60" />
        <div className="h-11 w-full rounded-xl bg-gray-200/80" />
      </div>
    </div>
  );
};

export default ProfileSkeleton;
