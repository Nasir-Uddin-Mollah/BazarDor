import { ProductType } from "@/Types/Product";
import { getUnitBn, toBn } from "./Marquee";

const ProductCard = ({ product }: { product: ProductType }) => {
  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";
  const pct = Number(Math.abs(product.change?.pct ?? 0)).toFixed(1);

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#E1E8E1] bg-[#FAFCFA] p-4 transition-colors hover:border-emerald-600 sm:p-5">
      <div className="flex items-center gap-3">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl select-none sm:size-12">
          {product.image}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-gray-800 sm:text-lg">
            {product.nameBn}
          </h3>
          <p className="text-xs text-gray-400 sm:text-sm">
            প্রতি {getUnitBn(product.unit)}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-2">
        <div>
          <span className="block text-xs text-gray-400">আজকের দাম</span>
          <p className="mt-0.5 text-lg font-extrabold text-gray-900 sm:text-xl">
            {toBn(product.today)}{" "}
            <span className="text-sm font-semibold text-gray-800">টাকা</span>
          </p>
        </div>

        <div
          className={`inline-flex items-center gap-1 rounded-full bg-[#F0F5F0] px-2.5 py-1 text-xs font-semibold ${
            isUp
              ? "text-red-500"
              : isDown
                ? "text-emerald-600"
                : "text-gray-500"
          }`}
        >
          <span>{isUp ? "▲" : isDown ? "▼" : ""}</span>
          <span>{toBn(pct)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
