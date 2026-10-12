import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductType, Market } from "@/Types/Product";
import { toBn, getUnitBn } from "@/components/Marquee";

interface ProductDetailPageProps {
  params: Promise<{ slug: number }>;
}

const getProduct = async (slug: number) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?slug=${slug}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) throw new Error(`Failed to fetch product`);
    const data = await res.json();
    return data[0] || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";
  const pct = Number(Math.abs(product.change?.pct ?? 0)).toFixed(1);

  const diff = product.today - product.yesterday;
  const priceDiffText =
    diff > 0
      ? `গতকালের তুলনায় আজ দাম বেড়েছে ${toBn(diff)}%`
      : diff < 0
        ? `গতকালের তুলনায় আজ দাম কমেছে ${toBn(Math.abs(diff))}%`
        : "গতকালের তুলনায় আজ দাম অপরিবর্তিত";

  const markets: Market[] = product.markets ?? [];

  let lowestPrice = Infinity;
  let lowestMarket: Market | null = null;
  let highestPrice = -Infinity;
  let highestMarket: Market | null = null;

  for (const m of markets) {
    if (m.min < lowestPrice) {
      lowestPrice = m.min;
      lowestMarket = m;
    }
    if (m.max > highestPrice) {
      highestPrice = m.max;
      highestMarket = m;
    }
  }

  const sortedMarkets = [...markets].sort((a, b) => {
    const avgA = (a.min + a.max) / 2;
    const avgB = (b.min + b.max) / 2;
    return avgA - avgB;
  });

  return (
    <main className="w-full flex-1 py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <nav className="mb-4 flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            হোম
          </Link>
          <span className="text-gray-400">›</span>
          <Link
            href={`/category/${product.category}`}
            className="hover:text-emerald-700 transition-colors"
          >
            {product.categoryNameBn}
          </Link>
          <span className="text-gray-400">›</span>
          <span className="font-medium text-gray-800">{product.nameBn}</span>
        </nav>

        <div className="mb-8 flex flex-col justify-between gap-6 rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-center gap-5">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] text-4xl select-none sm:size-24 sm:text-5xl">
              {product.image}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {product.nameBn}
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                প্রতি {getUnitBn(product.unit)} · {product.categoryNameBn}
              </p>
              <p className="mt-3 text-xs font-semibold text-gray-700 sm:text-sm">
                {priceDiffText}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F0F5F0]/70 p-4 text-center sm:px-7 sm:py-5 min-w-[140px]">
            <span className="text-xs text-gray-500 font-medium">আজকের দাম</span>
            <p className="mt-0.5 text-3xl font-black text-gray-900 sm:text-4xl">
              {toBn(product.today)}
            </p>
            <span className="text-xs text-gray-500">
              টাকা / {getUnitBn(product.unit)}
            </span>
            <div
              className={`mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                isUp
                  ? "text-red-500"
                  : isDown
                    ? "text-emerald-600"
                    : "text-gray-500"
              }`}
            >
              <span>{isUp ? "▲" : isDown ? "▼" : "—"}</span>
              <span>{toBn(pct)}%</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E1E8E1] bg-[#FAFCFA] p-6 sm:p-8">
          <div className="mb-8">
            <h2 className="mb-4 text-base font-bold text-gray-800 sm:text-lg">
              দামের সারসংক্ষেপ
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E1E8E1] bg-white p-5">
                <span className="text-xs font-medium text-gray-500">
                  সর্বনিম্ন দাম
                </span>
                <p className="mt-1 text-xl font-bold text-emerald-600 sm:text-2xl">
                  {lowestPrice !== Infinity ? `${toBn(lowestPrice)} টাকা` : "—"}
                </p>
                <p className="mt-2 text-xs text-gray-500 truncate">
                  {lowestMarket ? `সবচেয়ে কম দামের বাজার` : "—"}
                </p>
              </div>

              <div className="rounded-2xl border border-[#E1E8E1] bg-white p-5">
                <span className="text-xs font-medium text-gray-500">
                  সর্বাধিক দাম
                </span>
                <p className="mt-1 text-xl font-bold text-red-500 sm:text-2xl">
                  {highestPrice !== -Infinity
                    ? `${toBn(highestPrice)} টাকা`
                    : "—"}
                </p>
                <p className="mt-2 text-xs text-gray-500 truncate">
                  {highestMarket ? `সবচেয়ে বেশি দামের বাজার` : "—"}
                </p>
              </div>

              <div className="rounded-2xl border border-[#E1E8E1] bg-white p-5">
                <span className="text-xs font-medium text-gray-500">গড় দাম</span>
                <p className="mt-1 text-xl font-bold text-emerald-700 sm:text-2xl">
                  {toBn(product.today)} টাকা
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  প্রতি {getUnitBn(product.unit)}-এর হিসাবে
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold text-gray-800 sm:text-lg">
              বাজারভিত্তিক আজকের দাম
            </h2>
            <div className="overflow-hidden rounded-2xl border border-[#E1E8E1] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#E1E8E1] text-gray-500">
                    <th className="py-3.5 px-4 font-semibold">বাজার</th>
                    <th className="py-3.5 px-4 font-semibold">বিভাগ</th>
                    <th className="py-3.5 px-4 text-right font-semibold">
                      সর্বনিম্ন
                    </th>
                    <th className="py-3.5 px-4 text-right font-semibold">
                      সর্বাধিক
                    </th>
                    <th className="py-3.5 px-4 text-right font-semibold">
                      গড়
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E8E1]/60">
                  {sortedMarkets.length > 0 ? (
                    sortedMarkets.map((m, idx) => {
                      const avg = (m.min + m.max) / 2;
                      const avgStr =
                        avg % 1 === 0 ? avg.toString() : avg.toFixed(2);
                      return (
                        <tr
                          key={idx}
                          className={`transition-colors hover:bg-emerald-50/60 text-gray-700 ${
                            idx % 2 === 0 ? "bg-[#F0F5F0]/70" : "bg-transparent"
                          }`}
                        >
                          <td className="py-3.5 px-4 font-medium text-gray-800">
                            {m.market}
                          </td>
                          <td className="py-3.5 px-4 text-gray-600">
                            {m.division}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            {toBn(m.min)} টাকা
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            {toBn(m.max)} টাকা
                          </td>
                          <td className="py-3.5 px-4 text-right font-medium text-gray-800">
                            {toBn(avgStr)} টাকা
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="py-6 text-center text-gray-500"
                      >
                        বাজারের তথ্য পাওয়া যায়নি
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-6">
          <Link
            href={`/category/${product.category}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-800 transition-colors hover:text-emerald-700 mb-12"
          >
            <span className="text-base select-none">{product.categoryIcon}</span>
            <span>সব {product.categoryNameBn}</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;

