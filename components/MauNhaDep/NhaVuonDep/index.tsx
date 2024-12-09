import GiveContactEmail from "@/components/GiveContactEmail";
import HeaderBanner from "@/components/Header/Banner";
import React from "react";

function NhaVuonDep() {
  return (
    <div>
      <HeaderBanner
        title="NHÀ VƯỜN ĐẸP"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "MẪU NHÀ ĐẸP", href: "/mau-nha-dep" },
          { label: "NHÀ VƯỜN ĐẸP", href: "/mau-nha-dep/nha-vuon-dep" },
        ]}
        backgroundImage="/images/phongthuy/main.jpg"
      />
      <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-18"></div>
      </div>
      <GiveContactEmail />
    </div>
  );
}

export default NhaVuonDep;
