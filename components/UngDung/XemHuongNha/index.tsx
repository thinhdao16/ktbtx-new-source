import React from "react";
import PropTypes from "prop-types";
import HeaderBanner from "@/components/Header/Banner";

function XemHuongNha() {
  return (
    <div>
      {" "}
      <HeaderBanner
        title="ỨNG DỤNG XEM hướng nhà hợp tuổi"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "ứng dụng", href: "/ung-dung" },
          {
            label: "ỨNG DỤNG XEM hướng nhà hợp tuổi",
            href: "/ung-dung/xem-huong-nha-hop-tuoi",
          },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
        <div>
        <iframe
          src="https://xdnd-w-m.vercel.app/xdnd/vn/xem-huong-lam-nha-hop-tuoi.html"
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

XemHuongNha.propTypes = {};

export default XemHuongNha;
