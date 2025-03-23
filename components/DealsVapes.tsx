"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import DealsCard from "./ReusableComponents/DealVapeCard";
import { fetchVapeDeals, VapeDeal } from "./../app/actions/vapesDeals";
import { fetchMediaBucketUrl } from "./../app/actions/mediaBucketURL";
import SkeletonVapeCard from "./skeleton/SkeletonVapeCard";

// Import shadcn UI dropdown components (adjust the import paths as needed)
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DealsVapes = () => {
  const [vapeDeals, setVapeDeals] = useState<VapeDeal[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortCriteria, setSortCriteria] = useState<"default" | "priceAsc" | "priceDesc" | "discountDesc">("default");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const itemsPerPage = 6;

  // Fetch deals from Supabase
  useEffect(() => {
    async function loadDeals() {
      try {
        const res = await fetchVapeDeals();
        if (res.success) {
          // Sort by `sort` ascending before setting
          const sortedDeals = [...res.data].sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0));
          setVapeDeals(sortedDeals);
        } else {
          setError(res.error || "Error loading deals");
        }
      } catch (err: any) {
        setError(err.message);
      }
    }
    loadDeals();
  }, []);

  // Fetch the media bucket base URL from settings
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
  useEffect(() => {
    const element = document.getElementById("vapeDeals");
    if (element) {
      const navbarHeight = 80; // replace 80 with actual navbar height in pixels
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }, [currentPage]);

  // Filter and sort deals based on search and sortCriteria
  const filteredDeals = vapeDeals
    .filter((deal) => {
      // Filter by search query in vape_company or deal_tagline (case-insensitive)
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        deal.vape_company.toLowerCase().includes(query) ||
        deal.deal_tagline.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      if (sortCriteria === "priceAsc") {
        return Number(a.deal_tagline) - Number(b.deal_tagline);
      } else if (sortCriteria === "priceDesc") {
        return Number(b.deal_tagline) - Number(a.deal_tagline);
      } else if (sortCriteria === "discountDesc") {
        return b.discount_percent - a.discount_percent;
      }
      // default: keep the original sorted order (by sort property)
      return (a.sort ?? 0) - (b.sort ?? 0);
    });

  const totalPages = Math.ceil(filteredDeals.length / itemsPerPage);
  const paginatedDeals = filteredDeals.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handler for search input
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Handler for sort selection via dropdown
  const handleSort = (criteria: "priceAsc" | "priceDesc" | "discountDesc" | "default") => {
    setSortCriteria(criteria);
    setCurrentPage(1);
  };

  // Helper to show the current sort option label
  const getSortLabel = () => {
    switch (sortCriteria) {
      case "priceAsc":
        return "Price: Low to High";
      case "priceDesc":
        return "Price: High to Low";
      case "discountDesc":
        return "Discount: High to Low";
      default:
        return "Default";
    }
  };

  return (
    <div id="vapeDeals" className="relative w-full h-full py-8 pt-16 pb-4 md:pb-16">
      <div className="max-w-7xl mx-auto w-full h-full px-2">
        <div className="flex flex-col items-center justify-center pb-6 md:mb-8 md:py-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-lime-500 to-emerald-500 bg-clip-text text-transparent">
            Deals on Vapes
          </h1>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search vape deals..."
            className="w-56 lg:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          />

          {/* Sort Dropdown using shadcn UI */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="min-w-56 px-4 py-2 font-bold rounded-md bg-slate-700 text-cyan-200">
                Sort: {getSortLabel()}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => handleSort("default")}>
                Default
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleSort("priceAsc")}>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleSort("priceDesc")}>
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleSort("discountDesc")}>
                Discount: High to Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Deals Cards */}
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {paginatedDeals.length > 0 && baseUrl ? (
              paginatedDeals.map((deal) => (
                <DealsCard
                  key={deal.id}
                  vape_company={deal.vape_company}
                  base_deal={[{ buy_1: deal.deal_tagline, buy_2: deal.deal_tagline }]}
                  discount_percent={deal.discount_percent}
                  deal_tagline={deal.deal_tagline}
                  short_title={deal.short_title}
                  imgSrc={`${baseUrl}${deal.image_src}`}
                  bgGradient={deal.bg_gradient}
                  is_enabled={deal.is_enabled}
                />
              ))
            ) : (
              Array.from({ length: 6 }).map((_, index) => (
                <SkeletonVapeCard key={index} />
              ))
            )}
          </div>
        )}
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 px-4">
            {/* Previous button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="py-2.5 px-1.5 bg-gray-700 font-bold text-white rounded disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Small screens (mobile): pagination with ellipsis */}
            <div className="flex items-center gap-2 md:hidden">
              {currentPage > 2 && (
                <>
                  <button
                    onClick={() => setCurrentPage(1)}
                    className="p-2 rounded font-oxanium font-bold bg-gray-700 text-gray-200"
                  >
                    1
                  </button>
                  {currentPage > 3 && <span className="px-2 text-gray-500">...</span>}
                </>
              )}

              {Array.from({ length: totalPages })
                .map((_, i) => i + 1)
                .filter((page) => Math.abs(currentPage - page) <= 1)
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`p-2 rounded font-oxanium font-bold ${currentPage === page
                      ? "bg-cyan-300 text-black"
                      : "bg-gray-700 text-gray-200"
                      }`}
                  >
                    {page}
                  </button>
                ))}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && <span className="px-2 text-gray-500">...</span>}
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className="p-2 rounded font-oxanium font-bold bg-gray-700 text-gray-200"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            {/* Large screens: full pagination */}
            <div className="hidden md:flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`p-2 rounded font-oxanium font-bold ${currentPage === page
                      ? "bg-cyan-300 text-black"
                      : "bg-gray-700 text-gray-200"
                      }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="py-2.5 px-1.5 bg-gray-700 font-bold text-white rounded disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DealsVapes;