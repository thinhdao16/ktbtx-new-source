"use client";

import React from "react";
import ReactPaginate from "react-paginate";

import {
  PiLessThanOrEqualThin,
  PiGreaterThanOrEqualThin,
} from "react-icons/pi";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi2";

import "./style.css";
import Link from "next/link";

const PaginatedData = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const goToFirstPage = () => {
    setCurrentPage(0);
  };

  const goToLastPage = () => {
    setCurrentPage(pageCount - 1);
  };

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-7">
        {currentData.map((item, index: string) => {
          const dataItemDetail = encodeURIComponent(JSON.stringify(item))
          return (
            <div key={index}>
              <Link href={`/mau-nha-dep/nha-vuon-dep/${dataItemDetail}`}>
                <img
                  src={item?.img?.[0]}
                  alt="error"
                  className="h-80 w-full rounded-4xl object-cover md:h-[65vh]"
                />
              </Link>
            </div>
          )
        }
        )}
      </div>
      <div className="pagination-wrapper flex  items-center justify-center gap-1">
        <button onClick={goToFirstPage} className="border bottom-1 border-grey_main p-2 rounded-full hover:bg-blue_main text-grey_main hover:text-white ">
          <PiLessThanOrEqualThin />
        </button>
        <ReactPaginate
          previousLabel={<HiOutlineChevronDoubleLeft />}
          nextLabel={<HiOutlineChevronDoubleRight />}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          forcePage={currentPage}
        />
        <button onClick={goToLastPage} className="border bottom-1 border-grey_main p-2 rounded-full hover:bg-blue_main text-grey_main hover:text-white ">
          <PiGreaterThanOrEqualThin />
        </button>
      </div>
    </div>
  );
};

export default PaginatedData;
