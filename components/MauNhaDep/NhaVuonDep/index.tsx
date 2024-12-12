import GiveContactEmail from "@/components/GiveContactEmail";
import HeaderBanner from "@/components/Header/Banner";
import Pagination from "@/components/MauNhaDep/Pagination";
import React from "react";
import { data } from "../data";

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
      <div>
        <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
            <Pagination data={data} itemsPerPage={6} />
        
        </div>
      </div>
      <GiveContactEmail />
    </div>
  );
}

export default NhaVuonDep;
