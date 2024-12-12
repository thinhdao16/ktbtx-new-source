import React from "react";
import { data } from "../data";
import GiveContactEmail from "@/components/GiveContactEmail";
import Link from "next/link";
import { getRandomItems } from "@/components/utils";
import AnimatedDiv from "@/components/AnimatedDiv";

const DetailInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-5 border-b border-blue_main pb-5">
      <div className="col-span-2 font-semibold text-blue_main">{title}</div>
      <div className="col-span-3 font-semibold">{description}</div>
    </div>
  );
};

function MauNhaDepDetail({ id }) {
  const dataId = data?.[0];

  const details = [
    { title: "Diện tích đất", description: dataId?.dienTichDat },
    { title: "Chi phí thi công", description: dataId?.chiPhiThiCong },
    { title: "Địa điểm", description: dataId?.diaDiem },
    { title: "Tổng diện tích sàn", description: dataId?.tongDienTichSan },
    { title: "Diện tích xây dựng", description: dataId?.dienTichXayDung },
    { title: "Loại công trình", description: dataId?.loaiCongTring },
    { title: "Năm thiết kế", description: dataId?.namThieKe },
  ];

  return (
    <div className="text-lg">
      <AnimatedDiv
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`bg-cotain relative flex h-[30vh] flex-col items-start justify-center bg-center md:h-screen`}
        style={{
          backgroundImage: `url('${dataId?.imgMain}')`,
        }}
      ></AnimatedDiv>
      <AnimatedDiv transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="mx-auto flex max-w-c-1154 flex-col gap-6 px-4 py-10 md:px-8 2xl:px-0">
          <div className="text-3xl font-medium text-red_main md:text-5xl">
            {" "}
            TỔNG QUAN{id}
          </div>
          <div>{dataId?.tieuDe}</div>
          <div>{dataId?.noiDung}</div>
          <div className="flex flex-col gap-5">
            {details.map((detail, index) => (
              <DetailInfo
                key={index}
                title={detail.title}
                description={detail.description}
              />
            ))}
          </div>
          <div>
            {dataId?.img?.map((dataImg) => <img src={dataImg} alt="" />)}
          </div>
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
              return (
                <div key={index}>
                  <Link href={`/mau-nha-dep/nha-vuon-dep/${index}`}>
                    <img
                      src={item?.imgMain}
                      alt="error"
                      className="h-80 w-full rounded-4xl object-cover md:h-[55vh]"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedDiv>

      <GiveContactEmail />
    </div>
  );
}

export default MauNhaDepDetail;
