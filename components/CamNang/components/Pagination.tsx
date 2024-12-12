"use client";

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import {
  PiLessThanOrEqualThin,
  PiGreaterThanOrEqualThin,
} from "react-icons/pi";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi2";

import Link from "next/link";

import "./style.css";

const buttons = [
  { id: "phongThuy", label: "Phong Thủy" },
  { id: "thietKe", label: "Thiết Kế" },
  { id: "tinhToanChiPhi", label: "Tính Toán Chi Phí" },
  { id: "chiaSe", label: "Chia Sẻ" },
];

const PaginatedData = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageRange, setPageRange] = useState(5); 

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  const [activeButton, setActiveButton] = useState("phongThuy");
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

  const handleClick = async (id: string) => {
    setActiveButton(id);

    try {
      const response = await fetch(`/api/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(`API Response for ${id}:`, data);
    } catch (error) {
      console.error(`Error fetching data for ${id}:`, error);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-4  ">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleClick(button.id)}
            className={`rounded-xl px-8 py-2 font-semibold transition-colors ${
              activeButton === button.id
                ? "bg-blue_main text-white"
                : "border border-blue_main bg-white text-blue_main hover:border-0 hover:bg-blue_main hover:text-white"
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-3 md:gap-x-15 md:gap-y-8">
        {currentData?.map((item, index) => {
          const dataItemDetail = encodeURIComponent(JSON.stringify(item))
          return(
            <div key={index}>
              <img
                src={item?.img}
                alt="error"
                className="h-45 w-full object-cover"
              />
              <div className="px-4">
                <div className="pb-2 pt-5 text-lg font-medium text-red_main">
                  {item?.title}
                </div>
                <div>{item?.description}</div>
                <div className="mt-2">
                  <Link
                    href={`/cam-nang/${dataItemDetail}`}
                    className=" bg-blue_main px-6 py-1.5 text-sm text-white hover:border hover:border-blue_main hover:bg-white hover:text-blue_main"
                  >
                    XEM CHI TIẾT
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="pagination-wrapper flex  items-center justify-center gap-1">
        <button
          onClick={goToFirstPage}
          className="bottom-1 rounded-full border border-grey_main p-2 text-grey_main hover:bg-blue_main hover:text-white "
        >
          <PiLessThanOrEqualThin />
        </button>
        <ReactPaginate
          previousLabel={<HiOutlineChevronDoubleLeft />}
          nextLabel={<HiOutlineChevronDoubleRight />}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={pageRange}
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
        <button
          onClick={goToLastPage}
          className="bottom-1 rounded-full border border-grey_main p-2 text-grey_main hover:bg-blue_main hover:text-white "
        >
          <PiGreaterThanOrEqualThin />
        </button>
      </div>
    </div>
  );
};

export default PaginatedData;
