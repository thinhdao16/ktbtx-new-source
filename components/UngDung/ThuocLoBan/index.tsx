import React from "react";
import HeaderBanner from "@/components/Header/Banner";

function ThuocLoBan() {
  return (
    <div>
      {" "}
      <HeaderBanner
        title="ỨNG DỤNG XEM THƯỚC LỖ BAN TRỰC TUYẾN"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "ứng dụng", href: "/ung-dung" },
          {
            label: "ỨNG DỤNG XEM THƯỚC LỖ BAN TRỰC TUYẾN",
            href: "/ung-dung/thuoc-lo-ban",
          },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
    </div>
  );
}

ThuocLoBan.propTypes = {};

export default ThuocLoBan;
