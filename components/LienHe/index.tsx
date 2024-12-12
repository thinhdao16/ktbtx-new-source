import React from "react";
import HeaderBanner from "../Header/Banner";
import GiveContact from "../GiveContact";
import GiveContactEmail from "../GiveContactEmail";
import AnimatedDiv from "../AnimatedDiv";
import Link from "next/link";

function LienHe() {
  return (
    <div>
      <HeaderBanner
        title="liên hệ"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "liên hệ", href: "/lien-he" },
        ]}
        backgroundImage="/images/phongthuy/main.jpg"
      />
      <AnimatedDiv className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="grid grid-cols-2 gap-8 text-base font-semibold md:grid-cols-3 md:text-xl">
          <div className="col-span-1 hidden md:block ">
            <img
              src="/images/lienhe/contact.jpg"
              alt="error"
              className="h-80 w-80 rounded-5xl object-cover"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-12">
              <div className="col-span-3  text-blue_main">Địa chỉ</div>
              <div className="col-span-9">
                {" "}
                Ngõ 170, khu phố 5, phường Tiến Thành, thành phố Đồng Xoài, Tỉnh
                Bình Phước, Việt Nam
              </div>
            </div>
            <hr className="border-t-1 my-3 border-blue_main" />
            <div className="grid grid-cols-12">
              <div className="col-span-3  text-blue_main">Số điện thoại</div>
              <div className="col-span-9">0988 800 926</div>
            </div>
            <hr className="border-t-1 my-3 border-blue_main" />
            <div className="grid grid-cols-12">
              <div className="col-span-3  text-blue_main">Email</div>
              <div className="col-span-9">ktbtx@gmail.com</div>
            </div>
            <div className="grid grid-cols-12 mt-6">
              <div className="col-span-3  text-blue_main"></div>
              <div className="col-span-9">
                <Link href="tel:0988800926">
                <button className="bg-red_main hover:bg-white text-white hover:text-red_main hover:border hover:border-red_main uppercase text-xl md:text-2xl px-4 py-2 ">liên hệ ngay </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv>
      <GiveContact />
      <GiveContactEmail />
    </div>
  );
}

LienHe.propTypes = {};

export default LienHe;
