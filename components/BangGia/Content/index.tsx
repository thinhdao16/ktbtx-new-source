import React from "react";
import HeaderBanner from "../../Header/Banner";
import AnimatedDiv from "../../AnimatedDiv";
import GiveContactEmail from "../../GiveContactEmail";
import Link from "next/link";

function BangGiaContent() {
  return (
    <div>
      <HeaderBanner
        title="bảng giá"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "BẢNG GIÁ", href: "/bang-gia" },
        ]}
        backgroundImage="/images/phongthuy/main.jpg"
      />
      <AnimatedDiv className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div>
            <div className="font-550 text-lg text-red_main md:text-xl">
              GÓI XIN PHÉP XÂY DỰNG
            </div>
            <div className="font-600 mt-2 text-xl text-blue_main md:text-3xl">
              ĐƠN GIÁ TIÊU CHUẨN: 80.000/M²
            </div>
            <div className="mt-3 flex flex-col gap-2  md:gap-4">
              <div>
                <h2 className="font-bold">ĐỐI VỚI</h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình hai mặt tiền cộng thêm: 20.000/m²
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình ở khu vực HCM cộng thêm: 30.000/m²
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold">HỒ SƠ XPXD</h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Hồ sơ bản vẽ xin phép xây dựng (kiến trúc cơ sở)
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Hồ sơ năng lực đơn vị thiết kế
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold">Ý TƯỞNG</h2>
                <p>Bầu Trời Xanh đưa ra ý tưởng và điều chỉnh 1 lần</p>
              </div>
            </div>
            <Link href="/lien-he">
              <button className="font-600 mt-3 bg-red_main px-6 py-2 text-center uppercase text-white hover:border hover:border-red_main hover:bg-white hover:text-red_main md:mt-8 md:px-12">
                liên hệ
              </button>
            </Link>
          </div>
          <div className=" pl-0 md:pl-14">
            <img
              src="/images/banggia/1.jpg"
              alt="error"
              className="h-30 w-full object-cover md:h-100"
            />
          </div>
        </div>
        <hr className="border-t-1 my-15 border-blue_main" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="pr-0 md:pr-12 ">
            <img
              src="/images/banggia/2.jpg"
              alt="error"
              className="h-30 w-full object-cover md:h-100"
            />
          </div>
          <div>
            <div className="font-550 text-lg text-red_main md:text-xl">
              GÓI Ý TƯỞNG
            </div>
            <div className="font-600 mt-2 text-xl text-blue_main md:text-3xl">
              ĐƠN GIÁ TIÊU CHUẨN: 120.000/M²
            </div>
            <div className="mt-3 flex flex-col gap-2  md:gap-4">
              <div>
                <h2 className="font-bold">ĐỐI VỚI</h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình hai mặt tiền cộng thêm: 20.000/m²
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình ở khu vực HCM cộng thêm: 30.000/m²
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Đối với quy mô trên 200m2 thiết kế: Giảm 5%/Đơn giá tiêu
                    chuẩn
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Đối với quy mô trên 300m2 thiết kế: Giảm 15%/Đơn giá tiêu
                    chuẩn
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold">
                  BAO GỒM GÓI XIN PHÉP XÂY DỰNG + HỒ SƠ KIẾN TRÚC + HỈNH ẢNH 3D
                  NGOÀI THẤT:
                </h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Triển khai chi tiết phần kiến trúc dùng để thi công xây
                    dựng, đầy đủ kích thước chi tiết trong phần kiến trúc, thống
                    kê gạch ốp lát, thiết bị vệ sinh... (khoảng 30 đến 40 bản
                    vẽ).
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Hình ảnh 3D thể hiện ngoại thất công trình.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold">Ý TƯỞNG</h2>
                <p>Bầu Trời Xanh đưa ra ý tưởng và điều chỉnh 1 lần</p>
              </div>
            </div>
            <Link href="/lien-he">
              <button className="font-600 mt-3 bg-red_main px-6 py-2 text-center uppercase text-white hover:border hover:border-red_main hover:bg-white hover:text-red_main md:mt-8 md:px-12">
                liên hệ
              </button>
            </Link>
          </div>
        </div>
        <hr className="border-t-1 my-15 border-blue_main" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div>
            <div className="font-550 text-lg text-red_main md:text-xl">
              GÓI XIN PHÉP XÂY DỰNG
            </div>
            <div className="font-600 mt-2 text-xl text-blue_main md:text-3xl">
              ĐƠN GIÁ TIÊU CHUẨN: 80.000/M²
            </div>
            <div className="mt-3 flex flex-col gap-2  md:gap-4">
              <div>
                <h2 className="font-bold">ĐỐI VỚI</h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình hai mặt tiền cộng thêm: 20.000/m²
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình ở khu vực HCM cộng thêm: 30.000/m²
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold">HỒ SƠ XPXD</h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Hồ sơ bản vẽ xin phép xây dựng (kiến trúc cơ sở)
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Hồ sơ năng lực đơn vị thiết kế
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold">Ý TƯỞNG</h2>
                <p>Bầu Trời Xanh đưa ra ý tưởng và điều chỉnh 1 lần</p>
              </div>
            </div>
            <Link href="/lien-he">
              <button className="font-600 mt-3 bg-red_main px-6 py-2 text-center uppercase text-white hover:border hover:border-red_main hover:bg-white hover:text-red_main md:mt-8 md:px-12">
                liên hệ
              </button>
            </Link>
          </div>
          <div className=" pl-0 md:pl-14">
            <img
              src="/images/banggia/3.jpg"
              alt="error"
              className="h-30 w-full object-cover md:h-100"
            />
          </div>
        </div>
        <hr className="border-t-1 my-15 border-blue_main" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="pr-0 md:pr-12 ">
            <img
              src="/images/banggia/4.jpg"
              alt="error"
              className="h-30 w-full object-cover md:h-100"
            />
          </div>
          <div>
            <div className="font-550 text-lg text-red_main md:text-xl">
              GÓI Ý TƯỞNG
            </div>
            <div className="font-600 mt-2 text-xl text-blue_main md:text-3xl">
              ĐƠN GIÁ TIÊU CHUẨN: 120.000/M²
            </div>
            <div className="mt-3 flex flex-col gap-2  md:gap-4">
              <div>
                <h2 className="font-bold">ĐỐI VỚI</h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình hai mặt tiền cộng thêm: 20.000/m²
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Công trình ở khu vực HCM cộng thêm: 30.000/m²
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Đối với quy mô trên 200m2 thiết kế: Giảm 5%/Đơn giá tiêu
                    chuẩn
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Đối với quy mô trên 300m2 thiết kế: Giảm 15%/Đơn giá tiêu
                    chuẩn
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold">
                  BAO GỒM GÓI XIN PHÉP XÂY DỰNG + HỒ SƠ KIẾN TRÚC + HỈNH ẢNH 3D
                  NGOÀI THẤT:
                </h2>
                <ul className="">
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Triển khai chi tiết phần kiến trúc dùng để thi công xây
                    dựng, đầy đủ kích thước chi tiết trong phần kiến trúc, thống
                    kê gạch ốp lát, thiết bị vệ sinh... (khoảng 30 đến 40 bản
                    vẽ).
                  </li>
                  <li className="flex">
                    <span className="mr-2">•</span>
                    Hình ảnh 3D thể hiện ngoại thất công trình.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold">Ý TƯỞNG</h2>
                <p>Bầu Trời Xanh đưa ra ý tưởng và điều chỉnh 1 lần</p>
              </div>
            </div>
            <Link href="/lien-he">
              <button className="font-600 mt-3 bg-red_main px-6 py-2 text-center uppercase text-white hover:border hover:border-red_main hover:bg-white hover:text-red_main md:mt-8 md:px-12">
                liên hệ
              </button>
            </Link>
          </div>
        </div>
      </AnimatedDiv>
      <GiveContactEmail />
    </div>
  );
}

export default BangGiaContent;
