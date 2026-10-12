"use client";
import { ProductType } from "@/Types/Product";
import ProductCard from "./ProductCard";
import { toBn } from "./Marquee";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import NotFoundPage from "@/app/not-found";

interface AllProductsClientProps {
  products: ProductType[];
  title?: string;
}

const AllProductsClient = ({ products, title }: AllProductsClientProps) => {
  const [sortBy, setSortBy] = useState<string>("default");

  const sortedProducts = [...products].sort(
    (a: ProductType, b: ProductType) => {
      if (sortBy === "low-to-high") return a.today - b.today;
      if (sortBy === "high-to-low") return b.today - a.today;
      return 0;
    },
  );

  return (
    <section id="সব-পণ্য" className="w-full pb-8 sm:pb-10 scroll-mt-32">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <div className="mb-6">
          {title && (
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800 sm:text-xl">
              {title}
            </h2>
          )}
          <div className="mt-1 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-500">
              মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-gray-600 sm:text-sm">
                সাজান
              </span>
              <div className="relative inline-block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none cursor-pointer rounded-lg border border-[#E1E8E1] bg-[#FAFCFA] py-2 pl-3 pr-8 text-xs font-medium text-gray-800 transition-colors hover:border-zinc-400 focus:border-zinc-500 focus:outline-none sm:text-sm"
                >
                  <option value="default">ডিফল্ট</option>
                  <option value="low-to-high">দামঃ কম থেকে বেশি</option>
                  <option value="high-to-low">দামঃ বেশি থেকে কম</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-zinc-400">
                  <LuChevronDown className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {sortedProducts.length === 0 ? (
          <NotFoundPage />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 md:gap-5">
            {sortedProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProductsClient;
