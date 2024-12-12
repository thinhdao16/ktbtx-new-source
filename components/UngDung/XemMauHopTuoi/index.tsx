import React from "react";
import PropTypes from "prop-types";
import HeaderBanner from "@/components/Header/Banner";

function XemMauHopTuoi() {
  return (
    <div>
      <HeaderBanner
        title="ỨNG DỤNG XEM màu hợp tuổi"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "ứng dụng", href: "/ung-dung" },
          {
            label: "ỨNG DỤNG XEM màu hợp tuổi",
            href: "/ung-dung/xem-mau-hop-tuoi",
          },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
    </div>
  );
}

XemMauHopTuoi.propTypes = {};

export default XemMauHopTuoi;
