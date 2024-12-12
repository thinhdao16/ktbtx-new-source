import AnimatedDiv from "@/components/AnimatedDiv";
import HeaderBanner from "@/components/Header/Banner";
import { getRandomItems } from "@/components/utils";
import Link from "next/link";
import React from "react";
import { data } from "../data";

function CamNangDetail({ dataDetail }) {
  function getCategoryName(type: string) {
    const categoryMap = {
      design: "Thiết kế",
      fengShui: "Phong thủy",
      costCalculation: "Tính toán chi phí",
      share: "Chia sẻ",
    };

    return categoryMap[type] || "Không xác định"; // Trả về "Không xác định" nếu không tìm thấy.
  }
  return (
    <div>
      <HeaderBanner
        title="CẨM NANG"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "CẨM NANG", href: "/cam-nang" },
          { label: getCategoryName(dataDetail?.type), href: "/cam-nang" },
          { label: dataDetail?.title, href: "/cam-nang" },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
      <AnimatedDiv className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="text-start text-xl font-semibold text-red_main md:text-5xl">
          {dataDetail?.title}
        </div>
      </AnimatedDiv>
      <AnimatedDiv
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gray_main"
      >
        <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
          <div className="pb-5 text-center text-3xl font-medium text-red_main md:text-4xl">
            CÁC DỰ ÁN KHÁC
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-7">
            {getRandomItems(data, 3).map((item, index) => {
              const dataItemDetail = encodeURIComponent(JSON.stringify(item));
              return (
                <div key={index}>
                  <img
                    src={item?.img}
                    alt="error"
                    className="h-45 w-full object-cover"
                  />
                  <div className="px-4">
                    <div className="pb-2 pt-5 text-lg font-medium text-red_main">
                      {item?.title}
                    </div>
                    <div>{item?.description}</div>
                    <div className="mt-2">
                      <Link
                        href={`/cam-nang/${dataItemDetail}`}
                        className=" bg-blue_main px-6 py-1.5 text-sm text-white hover:border hover:border-blue_main hover:bg-white hover:text-blue_main"
                      >
                        XEM CHI TIẾT
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}

export default CamNangDetail;
