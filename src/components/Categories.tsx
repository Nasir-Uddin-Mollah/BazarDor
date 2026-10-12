import { Suspense } from "react";
import { CategoryType } from "@/Types/Category";
import CategoryNav from "./CategoryNav";
import Marquee from "@/components/Marquee";

const getCategories = async (): Promise<CategoryType[]> => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/bazardor/categories",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error("Failed to fetch categories");
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

const Categories = async () => {
  const categories: CategoryType[] = await getCategories();

  return (
    <div className="w-full">
      <div className="border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-3 sm:px-4">
          <Suspense
            fallback={
              <ul className="categories-scroll flex items-center gap-4 overflow-x-auto py-1 sm:gap-5 sm:py-1.5 md:gap-6">
                {categories.map((c) => (
                  <li
                    key={c.id}
                    className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-gray-700 sm:text-[13px]"
                  >
                    <span className="text-xs sm:text-sm">{c.icon}</span>
                    <span className="whitespace-nowrap">{c.nameBn}</span>
                  </li>
                ))}
              </ul>
            }
          >
            <CategoryNav categories={categories} />
          </Suspense>
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default Categories;
