'use client'
import React from "react";
import GiveContact from "../GiveContact";
import Link from "next/link";
function TrangChu() {
  return (
    <div className="">
      <div className="bg-cotain relative flex h-[30vh] flex-col items-center justify-center bg-[url('/images/trangchu/main.jpg')] bg-center md:h-screen">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="w-3/4 text-center text-xl font-semibold text-white md:w-7/12 md:text-7xl">
            THIẾT KẾ NHÀ Ở CHUẨN PHONG THỦY
          </span>
          <div className="flex gap-8">
            <button className="bg-red_main px-11 py-3 text-lg font-semibold text-white md:text-2xl">
              <Link href="/lien-he">TƯ VẤN</Link>
            </button>
            <button className="bg-white px-11 py-3 text-lg font-semibold text-red_main md:text-2xl">
              <Link href="/bang-gia">BẢNG GIÁ</Link>
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
                Kiến trúc không chỉ là nghệ thuật sắp đặt không gian, mà còn là
                sự kết nối giữa con người và môi trường xung quanh. Với sự phát
                triển của công nghệ và tư duy sáng tạo, kiến trúc đương đại
                hướng đến sự hài hòa giữa công năng, thẩm mỹ và tính bền vững.
              </p>
              <span>
                Tại "Bầu Trời Xanh", chúng tôi cam kết mang đến những giải pháp
                kiến trúc tối ưu, kết hợp giữa phong cách hiện đại và giá trị
                truyền thống. Mỗi công trình đều được thiết kế để phản ánh phong
                cách sống và nhu cầu cá nhân, đồng thời tôn trọng thiên nhiên và
                văn hóa địa phương.
              </span>
            </div>
            <div>
              <button className="bg-red_main px-11 py-3 text-2xl font-semibold text-white hover:border hover:border-red_main hover:bg-white hover:text-red_main ">
                XEM THÊM
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 pr-0 md:grid-cols-2 md:pr-10">
            <div className="pb-0 md:pb-20">
              <img
                src="/images/trangchu/intro-1.jpg"
                className=" rounded-3xl object-cover md:h-full"
                alt="error"
              />
            </div>
            <div className="pt-0 md:pt-20">
              <img
                src="/images/trangchu/intro-2.jpg"
                className="rounded-3xl object-cover md:h-full"
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
              Đội ngũ chuyên gia của chúng tôi sở hữu nhiều năm kinh nghiệm
              trong lĩnh vực kiến trúc, mang đến những giải pháp tối ưu và sáng
              tạo cho mọi dự án.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              KIẾN THỨC PHONG THỦY CHUYÊN SÂU
            </span>
            <p>
              Chúng tôi am hiểu sâu sắc về phong thủy, giúp các công trình không
              chỉ đẹp mắt mà còn hài hòa với yếu tố tâm linh và văn hóa.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              HỖ TRỢ LINH HOẠT
            </span>
            <p>
              Với phong cách làm việc chuyên nghiệp và linh hoạt, chúng tôi luôn
              sẵn sàng hỗ trợ khách hàng trong mọi giai đoạn của dự án.
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
                <div className="font-medium text-red_main">
                  TẠI SAO CẦN PHONG THỦY TRONG THIẾT KẾ NHÀ Ở
                </div>
                <p className="py-1">
                  Phong thủy là yếu tố quan trọng trong việc định hình không
                  gian sống, tạo nên sự cân bằng và hài hòa giữa con người và
                  môi trường xung quanh.
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
                  TẦM QUAN TRỌNG CỦA PHONG THỦY TRONG KHÔNG GIAN SỐNG
                </span>
                <p className="py-1">
                  Áp dụng phong thủy đúng cách giúp gia tăng vượng khí, cải
                  thiện sức khỏe, tài lộc và sự thịnh vượng cho gia đình.
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
                  GIẢI PHÁP PHONG THỦY TOÀN DIỆN
                </span>
                <p className="py-1">
                  Chúng tôi cung cấp các giải pháp phong thủy toàn diện, từ
                  thiết kế ban đầu đến tối ưu hóa không gian sống theo nguyên
                  tắc phong thủy.
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
