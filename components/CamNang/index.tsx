"use client";
import React, { useState } from "react";
import AnimatedDiv from "../AnimatedDiv";
import HeaderBanner from "../Header/Banner";
import { data } from "./data";
import PaginatedData from "./components/Pagination";

function CamNang() {

  return (
    <div>
      <HeaderBanner
        title="CẨM NANG"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "CẨM NANG", href: "/cam-nang" },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
      <AnimatedDiv className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
      <PaginatedData data={data} itemsPerPage={3} />
      </AnimatedDiv>
    </div>
  );
}

CamNang.propTypes = {};

export default CamNang;
