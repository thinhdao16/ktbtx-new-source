import React from "react";
import HeaderBanner from "../Header/Banner";
import AnimatedDiv from "../AnimatedDiv";
import GiveContactEmail from "../GiveContactEmail";
import Link from "next/link";
import { data } from "./dataNav";

function BangGia() {
  return (
    <div>
    <HeaderBanner
      title="Bảng giá"
      breadcrumbs={[
        { label: "TRANG CHỦ", href: "/" },
        { label: "Bảng giá", href: "/bang-gia/content" },
      ]}
      backgroundImage="/images/phongthuy/main.jpg"
    />
    <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-18">
        {data?.map((data, key) => (
          <Link href={data?.href} key={key}>
            <img
              src={data?.img}
              alt="error"
              className="rounded-6xl aspect-square object-cover w-full "
            />
            <div className="pt-5 text-center text-2xl font-bold text-blue_main uppercase">
              {data?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
    <GiveContactEmail />
  </div>
  );
}

export default BangGia;
