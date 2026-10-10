import Link from "next/link";
import { CategoryType } from "@/Types/Category";

const getCategories = async (): Promise<CategoryType[]> => {
    try {
        const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
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
            <div className="mx-auto max-w-6xl px-3 sm:px-4">
                <ul className="categories-scroll flex items-center gap-6 overflow-x-auto py-2.5 sm:gap-7 sm:py-3 md:gap-8 lg:gap-5">
                    {categories.map((category: CategoryType) => (
                        <li key={category?.id} className="shrink-0">
                            <Link
                                href={`/${category?.slug || category?.id}`}
                                className="group flex items-center gap-1 text-sm font-semibold text-gray-800 transition-colors hover:text-emerald-700 sm:gap-2 sm:text-[15px]"
                            >
                                <span className="text-base select-none transition-transform duration-150 group-hover:scale-110 sm:text-lg">
                                    {category?.icon}
                                </span>
                                <span className="whitespace-nowrap">
                                    {category?.nameBn}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;