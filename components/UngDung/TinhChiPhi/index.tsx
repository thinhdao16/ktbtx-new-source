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
          { label: "ỨNG DỤNG TÍNH CHI PHÍ XÂY DỰNG", href: "/ung-dung/tinh-chi-phi" },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
    </div>
  );
}

TinhChiPhi.propTypes = {};

export default TinhChiPhi;
