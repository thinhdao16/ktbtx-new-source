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
       <div>
        <iframe
          src="https://xdnd-w-m.vercel.app/xdnd/vn/thuoc-lo-ban.html"
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

ThuocLoBan.propTypes = {};

export default ThuocLoBan;
