"use client";

import HeaderBanner from "@/components/Header/Banner";
import React from "react";

function TinhChiPhi() {
  return (
    <div>
      <HeaderBanner
        title="ỨNG DỤNG TÍNH CHI PHÍ XÂY DỰNG"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "ứng dụng", href: "/ung-dung" },
          {
            label: "ỨNG DỤNG TÍNH CHI PHÍ XÂY DỰNG",
            href: "/ung-dung/tinh-chi-phi",
          },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
      <div>
        <iframe
          src="https://xdnd-w-m.vercel.app/xdnd/vn/tinh-chi-phi.html"
          style={{
            width: "100%",
            height: `600px`,
            border: "none",
          }}
          title="Ứng dụng tính chi phí xây dựng"
        ></iframe>
      </div>
    </div>
  );
}

export default TinhChiPhi;
