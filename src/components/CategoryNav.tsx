"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CategoryType } from "@/Types/Category";

interface CategoryNavProps {
  categories: CategoryType[];
}

const CategoryNav = ({ categories }: CategoryNavProps) => {
  const pathname = usePathname();

  return (
    <ul className="categories-scroll flex items-center gap-4 overflow-x-auto py-1 sm:gap-5 sm:py-1.5 md:gap-6">
      {categories.map((category: CategoryType) => {
        const isActive = pathname === `/category/${category?.slug}`;

        return (
          <li key={category?.id} className="shrink-0">
            <Link
              href={`/category/${category?.slug}`}
              className={`group flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors sm:text-[13px] ${
                isActive
                  ? "bg-[#EAF5EE] text-[#1e7f47] font-bold"
                  : "text-gray-700 hover:bg-gray-100/60 hover:text-emerald-700"
              }`}
            >
              <span className="text-xs sm:text-sm select-none">
                {category?.icon}
              </span>
              <span className="whitespace-nowrap">{category?.nameBn}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryNav;
