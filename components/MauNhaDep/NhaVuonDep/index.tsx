'use client'
import GiveContactEmail from "@/components/GiveContactEmail";
import HeaderBanner from "@/components/Header/Banner";
import Pagination from "@/components/MauNhaDep/Pagination";
import React, { useEffect, useState } from "react";
import { getHouseModel } from "../api";
import { Spin } from "antd"
function NhaVuonDep() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postings = await getHouseModel("gardenHouse");
        setData(postings);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Spin spinning={loading} fullscreen />
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
