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
      <div>
        <iframe
          src="https://xdnd-w-m.vercel.app/xdnd/vn/xem-mau-hop-tuoi-get.html"
          style={{
            width: "100%",
            height: `450px`,
            border: "none",
          }}
          title="Ứng dụng tính chi phí xây dựng"
        ></iframe>
      </div>
    </div>
  );
}

XemMauHopTuoi.propTypes = {};

export default XemMauHopTuoi;
