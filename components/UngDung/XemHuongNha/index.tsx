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
    </div>
  );
}

XemHuongNha.propTypes = {};

export default XemHuongNha;
