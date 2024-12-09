'use client'
import React from "react";
import GiveContact from "../GiveContact";
function TrangChu() {
  return (
    <div className="">
      <div className="bg-cotain relative flex h-[30vh] md:h-screen flex-col items-center justify-center bg-[url('/images/trangchu/main.jpg')] bg-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="w-3/4 md:w-7/12 text-center text-xl md:text-7xl font-semibold text-white">
            THIẾT KẾ NHÀ Ở CHUẨN PHONG THỦY
          </span>
          <div className="flex gap-8">
            <button className="bg-red_main px-11 py-3 text-lg md:text-2xl font-semibold text-white">
              TƯ VẤN
            </button>
            <button className="bg-white px-11 py-3 text-lg md:text-2xl font-semibold text-red_main">
              BẢNG GIÁ
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-15 py-8 md:grid-cols-2">
          <div className="flex flex-col pr-0 md:pr-10">
            <span className="text-4xl font-medium text-red_main">
              GIỚI THIỆU VỀ
            </span>
            <span className="pt-2 text-5xl font-semibold text-blue_main">
              BẦU TRỜI XANH
            </span>
            <div className="py-6">
              <p className="pb-3">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat,
              </p>
              <span>
                vel illum dolore eu feugiat nulla facilisis at vero eros et
                accumsan et iusto odio dignissim qui blandit praesent luptatum
                zzril delenit augue duis dolore te feugait nulla
              </span>
            </div>
            <div>
              <button className="bg-red_main px-11 py-3 text-2xl font-semibold text-white ">
                XEM THÊM
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 pr-0 md:grid-cols-2 md:pr-10">
            <div className="pb-0 md:pb-20">
              <img
                src="/images/trangchu/intro-1.jpg"
                className="h-full rounded-3xl object-cover"
                alt="error"
              />
            </div>
            <div className="pt-0 md:pt-20">
              <img
                src="/images/trangchu/intro-2.jpg"
                className="h-full rounded-3xl object-cover"
                alt="error"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-blue_main py-10 text-white">
        <div className="flex max-w-c-1154 flex-col items-center justify-center px-4">
          <span className="text-4xl font-medium">
            TOP 5 CÔNG CỤ HỖ TRỢ TƯ VẤN THIẾT KẾ NHÀ Ở
          </span>
          <div className="mt-5 grid grid-cols-2  gap-14 md:grid-cols-5">
            <div className="text-center text-sm">
              <img
                src="/images/trangchu/dutoan.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">
                  ỨNG DỤNG TÍNH CHI PHÍ XÂY DỰNG
                </span>
              </div>
            </div>
            <div className="text-center text-sm">
              <img
                src="/images/trangchu/xemtuoi.jpg"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">ỨNG DỤNG XEM TUỔI LÀM NHÀ</span>
              </div>
            </div>
            <div className="text-center text-sm">
              <img
                src="/images/trangchu/loban.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">
                  ỨNG DỤNG XEM THƯỚC LỖ BAN TRỰC TUYẾN
                </span>
              </div>
            </div>
            <div className="text-center text-sm">
              <img
                src="/images/trangchu/huongnha.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6 ">
                <span className="font-medium">
                  ỨNG DỤNG XEM HƯỚNG NHÀ HỢP TUỔI
                </span>
              </div>
            </div>
            <div className="text-center text-sm">
              <img
                src="/images/trangchu/mautuoi.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6 ">
                <span className="font-medium">ỨNG DỤNG XEM MÀU HỢP TUỔI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-c-1154 px-4 py-14 text-center md:px-8 2xl:px-0">
        <span className=" text-4xl font-medium text-red_main ">
          VÌ SAO CHỌN BẦU TRỜI XANH
        </span>
        <div className="mt-5 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              ĐỘI NGŨ GIÀU KINH NGHIỆM
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              KIẾN THỨC PHONG THỦY CHUYÊN SÂU
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              HỖ TRỢ LINH HOẠT
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray_main py-10 ">
        <div className="flex max-w-c-1154 flex-col items-center justify-center px-4">
          <span className="text-4xl font-medium">PHONG THỦY TRONG NHÀ Ở</span>
          <div className="mt-5 grid grid-cols-1  gap-14 md:grid-cols-3">
            <div className="text-md text-start">
              <img
                src="/images/trangchu/intro-1.jpg"
                alt=""
                className="mb-3 h-45 w-full object-cover"
              />
              <div className="px-6">
                <span className="font-medium text-red_main">
                  TẠI SAO CẦN PHONG THỦY TRONG THIẾT KẾ NHÀ Ở
                </span>
                <p className="py-1">
                  Lorem ipsumnibhnibh dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh nibheuismod tinciduntv ummyummy
                  nibhnibh
                </p>
                <button className="bg-blue_main px-6 py-1.5 text-sm text-white">
                  XEM CHI TIẾT
                </button>
              </div>
            </div>
            <div className="text-md text-start">
              <img
                src="/images/trangchu/intro-2.jpg"
                alt=""
                className="mb-3 h-45 w-full object-cover "
              />
              <div className="px-6">
                <span className="font-medium text-red_main">
                  TẠI SAO CẦN PHONG THỦY TRONG THIẾT KẾ NHÀ Ở
                </span>
                <p className="py-1">
                  Lorem ipsumnibhnibh dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh nibheuismod tinciduntv ummyummy
                  nibhnibh
                </p>
                <button className="bg-blue_main px-6 py-1.5 text-sm text-white">
                  XEM CHI TIẾT
                </button>
              </div>
            </div>
            <div className="text-md text-start">
              <img
                src="/images/trangchu/intro-1.jpg"
                alt=""
                className="mb-3 h-45 w-full object-cover "
              />
              <div className="px-6">
                <span className="font-medium text-red_main">
                  TẠI SAO CẦN PHONG THỦY TRONG THIẾT KẾ NHÀ Ở
                </span>
                <p className="py-1">
                  Lorem ipsumnibhnibh dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh nibheuismod tinciduntv ummyummy
                  nibhnibh
                </p>
                <button className="bg-blue_main px-6 py-1.5 text-sm text-white">
                  XEM CHI TIẾT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-blue_main py-10 text-white">
        <div className="flex max-w-c-1154 flex-col items-center justify-center px-4">
          <span className="text-4xl font-medium">BẢNG GIÁ</span>
          <div className="mt-5 grid grid-cols-2  gap-14 md:grid-cols-4">
            <div className="text-center ">
              <img
                src="/images/trangchu/dutoan.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">PHONG THỦY</span>
              </div>
            </div>
            <div className="text-center ">
              <img
                src="/images/trangchu/xemtuoi.jpg"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">THIẾT KẾ</span>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/images/trangchu/loban.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">PHONG THỦY</span>
              </div>
            </div>
            <div className="text-center ">
              <img
                src="/images/trangchu/huongnha.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6 ">
                <span className="font-medium">PHONG THỦY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GiveContact />
    </div>
  );
}

export default TrangChu;
