"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import DealFlowerBudCard from "./ReusableComponents/DealFlowerBudCard";
import { fetchHempFlowerDeals, HempFlowerDeal } from "@/app/actions/hempFlowerDeals";
import { fetchMediaBucketUrl } from "@/app/actions/mediaBucketURL";
import SkeletonFlowerCard from "./skeleton/SkeletonFlowerCard";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useResponsiveItemsPerPage } from "@/hooks/useResponsiveItemsPerPage";

const DealsFlowerBuds = () => {
    const itemsPerPage = useResponsiveItemsPerPage();

    const [flowerDeals, setFlowerDeals] = useState<HempFlowerDeal[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [baseUrl, setBaseUrl] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [sortCriteria, setSortCriteria] = useState<"default" | "oneGramAsc" | "oneGramDesc" | "fourGramAsc" | "fourGramDesc">("default");
    const [searchQuery, setSearchQuery] = useState<string>("");

    // const itemsPerPage = 5;

    useEffect(() => {
        async function loadDeals() {
            try {
                const res = await fetchHempFlowerDeals();
                if (res.success) {
                    setFlowerDeals(res.data.sort((a, b) => {
                        const sortDiff = (a.sort ?? 0) - (b.sort ?? 0);
                        return sortDiff !== 0 ? sortDiff : a.id - b.id;  // Fallback sorting by ID
                    }));
                } else {
                    setError(res.error || "Error loading deals");
                }
            } catch (err: any) {
                setError(err.message);
            }
        }
        loadDeals();
    }, []);

    useEffect(() => {
        async function loadBaseUrl() {
            try {
                const url = await fetchMediaBucketUrl();
                setBaseUrl(url);
            } catch (err: any) {
                console.error("Error fetching base URL", err);
            }
        }
        loadBaseUrl();
    }, []);

    // Scroll to top of component when page changes
    const scrollToFlowerDeals = () => {
        const element = document.getElementById("flowerDeals");
        if (element) {
            const navbarHeight = 80; // Adjust this height accordingly
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const filteredDeals = flowerDeals
        .filter((deal) => deal.is_enabled) // Filter out disabled deals
        .filter((deal) => {
            if (!searchQuery.trim()) return true;
            return deal.bud_name.toLowerCase().includes(searchQuery.toLowerCase());
        })
        .sort((a, b) => {
            switch (sortCriteria) {
                case "oneGramAsc":
                    return a.one_gram_price - b.one_gram_price;
                case "oneGramDesc":
                    return b.one_gram_price - a.one_gram_price;
                case "fourGramAsc":
                    return a.four_gram_price - b.four_gram_price;
                case "fourGramDesc":
                    return b.four_gram_price - a.four_gram_price;
                default:
                    const sortDiff = (a.sort ?? 0) - (b.sort ?? 0);
                    return sortDiff !== 0 ? sortDiff : a.id - b.id;
            }
        });

    const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);
    const paginatedDeals = filteredDeals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleSort = (criteria: typeof sortCriteria) => {
        setSortCriteria(criteria);
        setCurrentPage(1);
    };

    const getSortLabel = () => {
        switch (sortCriteria) {
            case "oneGramAsc": return "1g Price: Low to High";
            case "oneGramDesc": return "1g Price: High to Low";
            case "fourGramAsc": return "4g Price: Low to High";
            case "fourGramDesc": return "4g Price: High to Low";
            default: return "Default";
        }
    };

    return (
        <div id="flowerDeals" className="relative w-full h-full py-8 pt-16 pb-4 md:pb-16">
            <div className="max-w-7xl mx-auto w-full h-full px-2">
                <div className="flex items-center justify-center pb-6 md:mb-8 md:py-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
                        Flower Buds Deals
                    </h1>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search flower buds..."
                        className="w-56 lg:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="min-w-56 px-2.5 py-2 font-bold rounded-md text-sm bg-slate-700 text-cyan-200 flex items-center justify-between">
                                <span className="py-1 px-1.5 mr-2 bg-gray-800 font-mono rounded-md text-sm text-gray-100">Sort</span> {getSortLabel()}
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onSelect={() => handleSort("default")}>Default</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleSort("oneGramAsc")}>1g Price: Low to High</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleSort("oneGramDesc")}>1g Price: High to Low</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleSort("fourGramAsc")}>4g Price: Low to High</DropdownMenuItem>
                            <DropdownMenuItem onSelect={() => handleSort("fourGramDesc")}>4g Price: High to Low</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                        {paginatedDeals.length > 0 && baseUrl ? (
                            paginatedDeals.map((deal) => (
                                <DealFlowerBudCard
                                    key={deal.id}
                                    id={deal.id}
                                    budName={deal.bud_name}
                                    OneGramPrice={deal.one_gram_price}
                                    FourGramPrice={deal.four_gram_price}
                                    imgSrc={`${baseUrl}${deal.image_src}`}
                                    bgGradient={deal.bg_gradient}
                                    is_enabled={deal.is_enabled}
                                />
                            ))
                        ) : Array.from({ length: itemsPerPage - 2 }).map((_, idx) => (
                            <SkeletonFlowerCard key={idx} />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-8 px-4">
                        {/* Prev Button */}
                        <button
                            onClick={() => {
                                setCurrentPage((prev) => Math.max(prev - 1, 1));
                                scrollToFlowerDeals();
                            }}
                            disabled={currentPage === 1}
                            className="py-2.5 px-1.5 bg-gray-700 font-bold text-white rounded disabled:opacity-50"
                        >
                            <p className="sr-only">Previous</p>
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        {/* Small Screen Pagination with Ellipsis (Mobile) */}
                        <div className="flex items-center justify-center gap-2 md:hidden">
                            {currentPage > 2 && (
                                <>
                                    <button
                                        onClick={() => {
                                            setCurrentPage(1);
                                            scrollToFlowerDeals();
                                        }}
                                        className="p-2 font-oxanium bg-gray-700 font-bold text-gray-200 rounded"
                                    >
                                        1
                                    </button>
                                    {currentPage > 3 && <span className="px-2 py-2 text-gray-500">...</span>}
                                </>
                            )}

                            {Array.from({ length: totalPages })
                                .map((_, i) => i + 1)
                                .filter((page) => Math.abs(currentPage - page) <= 1)
                                .map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => {
                                            setCurrentPage(page);
                                            scrollToFlowerDeals();
                                        }}
                                        className={`p-2 font-oxanium font-bold rounded ${currentPage === page
                                            ? "bg-cyan-300 text-black"
                                            : "bg-gray-700 text-gray-200"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                            {currentPage < totalPages - 1 && (
                                <>
                                    {currentPage < totalPages - 2 && <span className="p-2 text-gray-500">...</span>}
                                    <button
                                        onClick={() => {
                                            setCurrentPage(totalPages);
                                            scrollToFlowerDeals();
                                        }}
                                        className="p-2 font-oxanium bg-gray-700 font-bold text-gray-200 rounded"
                                    >
                                        {totalPages}
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Large Screen Pagination (Full view) */}
                        <div className="hidden md:flex items-center justify-center gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => {
                                            setCurrentPage(page);
                                            scrollToFlowerDeals();
                                        }}
                                        className={`p-2 font-oxanium font-bold rounded ${currentPage === page
                                            ? "bg-cyan-300 text-black"
                                            : "bg-gray-700 text-gray-200"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => {
                                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                                scrollToFlowerDeals();
                            }}
                            disabled={currentPage === totalPages}
                            className="py-2.5 px-1.5 bg-gray-700 font-bold text-white rounded disabled:opacity-50"
                        >
                            <p className="sr-only">Next</p>
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DealsFlowerBuds;