import { getAllAnimeList } from "@/apis/getAnimes";
import AnimeCard from "@/components/AnimeCard";
import { useEffect, useState } from "react";
import { Anime } from "@/types/types"; // Import your Animes type
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import LoadingComponent from "@/components/common/LoadingComponent";

type Props = {
  page: number;
};

const HomePage = () => {
  const PAGE_SIZE = 12;

  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAllAnime = async ({ page }: Props) => {
    try {
      setLoading(true);
      const response = await getAllAnimeList("anime", page, PAGE_SIZE);
      setAnimeList(response.data);
      setTotalPages(response.meta.totalPage);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllAnime({
      page: currentPage,
    });
  }, [currentPage]);

  const renderPageNumbers = () => {
    const pages = [];
    const totalDisplay = 3; // Number of page links to show around the current page

    // Determine the start and end page for the pagination
    let startPage = Math.max(1, currentPage - Math.floor(totalDisplay / 2));
    let endPage = Math.min(totalPages, startPage + totalDisplay - 1);

    if (endPage - startPage < totalDisplay - 1) {
      startPage = Math.max(1, endPage - totalDisplay + 1);
    }

    // Add First page button
    if (startPage > 1) {
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" onClick={() => setCurrentPage(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        pages.push(<PaginationEllipsis key="ellipsis-start" />);
      }
    }

    // Add individual page numbers
    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            onClick={() => setCurrentPage(page)}
            isActive={page === currentPage}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Add Last page button
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<PaginationEllipsis key="ellipsis-end" />);
      }
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" onClick={() => setCurrentPage(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };

  return (
    <div className="flex h-full items-center flex-col space-y-2  px-4 py-2 md:px-8 md:py-6 w-full">
      <div className="h-full w-full flex items-center justify-center">
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {animeList &&
              animeList.map((data: Anime) => {
                return <AnimeCard key={data._id} anime={data} />;
              })}
          </div>
        )}
      </div>
      <div className="p-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  if (currentPage === 1) {
                    e.preventDefault(); // Prevent action if already on the first page
                  } else {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                  }
                }}
                className={
                  currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                }
              />
            </PaginationItem>

            {renderPageNumbers()}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  if (currentPage === totalPages) {
                    e.preventDefault(); // Prevent action if already on the last page
                  } else {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }
                }}
                className={
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default HomePage;
