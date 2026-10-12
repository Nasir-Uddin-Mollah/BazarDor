export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-4 sm:p-5 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="size-11 shrink-0 rounded-xl bg-gray-200/80 sm:size-12" />
        <div className="min-w-0 flex-1">
          <div className="h-4.5 w-28 rounded-md bg-gray-200/80 sm:h-5" />
          <div className="mt-2 h-3 w-16 rounded bg-gray-200/70 sm:h-3.5" />
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-2">
        <div>
          <div className="h-3 w-14 rounded bg-gray-200/70" />
          <div className="mt-1.5 h-6 w-20 rounded-md bg-gray-200/80 sm:h-6.5" />
        </div>
        <div className="h-6 w-14 rounded-full bg-gray-200/80" />
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-5">
      {Array.from({ length: count }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div className="py-6">
      <div className="mx-auto mb-6 max-w-6xl px-3 sm:px-4">
        <div className="flex items-center gap-4 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-5 animate-pulse">
          <div className="size-14 shrink-0 rounded-2xl bg-gray-200/80" />
          <div className="flex-1 space-y-2">
            <div className="h-6 w-32 rounded-md bg-gray-200/80 sm:h-7" />
            <div className="h-4 w-44 rounded bg-gray-200/70" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="h-4 w-36 rounded bg-gray-200/70 animate-pulse" />
          <div className="h-9 w-28 rounded-lg bg-gray-200/70 animate-pulse" />
        </div>
        <ProductGridSkeleton count={6} />
      </div>
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <main className="w-full flex-1 py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-12 rounded bg-gray-200/70 animate-pulse" />
          <span className="text-gray-300">›</span>
          <div className="h-4 w-16 rounded bg-gray-200/70 animate-pulse" />
          <span className="text-gray-300">›</span>
          <div className="h-4 w-24 rounded bg-gray-200/70 animate-pulse" />
        </div>

        <div className="mb-8 flex flex-col justify-between gap-6 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-6 sm:flex-row sm:items-center sm:p-7 animate-pulse">
          <div className="flex items-center gap-5">
            <div className="size-20 shrink-0 rounded-2xl bg-gray-200/80 sm:size-24" />
            <div className="space-y-2">
              <div className="h-7 w-36 rounded-md bg-gray-200/80 sm:h-8" />
              <div className="h-4 w-28 rounded bg-gray-200/70" />
              <div className="h-4 w-44 rounded bg-gray-200/70" />
            </div>
          </div>

          <div className="flex min-w-[140px] flex-col items-center justify-center rounded-2xl bg-[#F0F5F0]/70 p-4 sm:px-7 sm:py-5">
            <div className="h-3 w-16 rounded bg-gray-200/70" />
            <div className="mt-2 h-8 w-24 rounded bg-gray-200/80" />
            <div className="mt-1.5 h-3 w-20 rounded bg-gray-200/70" />
            <div className="mt-2 h-5 w-16 rounded-full bg-gray-200/80" />
          </div>
        </div>

        <div className="rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA] p-6 sm:p-8 animate-pulse">
          <div className="mb-8">
            <div className="mb-4 h-5 w-36 rounded bg-gray-200/80" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#E1E8E1] bg-white p-5 space-y-2.5"
                >
                  <div className="h-3 w-20 rounded bg-gray-200/70" />
                  <div className="h-6 w-28 rounded bg-gray-200/80" />
                  <div className="h-3 w-36 rounded bg-gray-200/60" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 h-5 w-44 rounded bg-gray-200/80" />
            <div className="overflow-hidden rounded-2xl border border-[#E1E8E1] bg-white p-4 space-y-3">
              <div className="h-8 w-full rounded bg-gray-200/60" />
              <div className="h-10 w-full rounded bg-gray-200/40" />
              <div className="h-10 w-full rounded bg-gray-200/60" />
              <div className="h-10 w-full rounded bg-gray-200/40" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
