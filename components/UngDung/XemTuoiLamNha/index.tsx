import React from "react";
import HeaderBanner from "@/components/Header/Banner";

function XemTuoiLamNha() {
  return (
    <div>
      {" "}
      <HeaderBanner
        title="ỨNG DỤNG XEM tuổi làm nhà"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "ứng dụng", href: "/ung-dung" },
          {
            label: "ỨNG DỤNG XEM tuổi làm nhà",
            href: "/ung-dung/xem-tuoi-lam-nha",
          },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
    </div>
  );
}

XemTuoiLamNha.propTypes = {};

export default XemTuoiLamNha;
