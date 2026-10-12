import { ProductGridSkeleton } from "@/components/skeletons/ProductSkeleton";

export default function Loading() {
  return (
    <div className="flex-1 py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="mb-10 flex min-h-[260px] w-full items-center justify-between rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA] p-6 sm:p-8 animate-pulse">
          <div className="w-full max-w-md space-y-3.5">
            <div className="h-5 w-32 rounded-full bg-gray-200/80" />
            <div className="h-8 w-3/4 rounded-lg bg-gray-200/80 sm:h-10" />
            <div className="h-4 w-full rounded bg-gray-200/70" />
            <div className="h-9 w-28 rounded-lg bg-gray-200/80" />
          </div>
          <div className="hidden md:block size-44 shrink-0 rounded-2xl bg-gray-200/60" />
        </div>

        <div className="mb-10">
          <div className="mb-4 h-6 w-36 rounded-md bg-gray-200/80 animate-pulse" />
          <ProductGridSkeleton count={6} />
        </div>
      </div>
    </div>
  );
}
