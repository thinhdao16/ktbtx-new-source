"use client";
import React from "react";
import "./style.css";
import GiveContact from "../GiveContact";
import GiveContactEmail from "../GiveContactEmail";
import HeaderBanner from "../Header/Banner";
function VeChungToi() {
  return (
    <div>
      <HeaderBanner
        title="VỀ CHÚNG TÔI"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "CẨM NANG", href: "/vechungtoi" },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
      <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <img src="/images/vechungtoi/history-create.jpg" alt="error" className="aspect-square object-cover" />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-xl font-medium text-red_main md:text-3xl">
              LỊCH SỬ HÌNH THÀNH
            </div>
            <div className="pb-4 pt-1 text-3xl font-semibold text-blue_main md:text-5xl">
              BẦU TRỜI XANH
            </div>
            <div className="pb-3">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat,
            </div>
            <div>
              vel illum dolore eu feugiat nulla facilisis at vero eros et
              accumsan et iusto odio dignissim qui blandit praesent luptatum
              zzril delenit augue duis dolore te feugait nulla
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cotain relative flex  flex-col items-start justify-center bg-[url('/images/vechungtoi/main.jpg')] bg-center md:h-screen">
        <div className="background-image-vechung-toi relative z-10 flex flex-col items-start">
          <div className="mx-auto max-w-c-1154 px-4 py-20 md:px-8 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="flex gap-3 pb-4">
                  <span className="text-3xl font-semibold text-blue_main md:text-5xl">
                    TẦM NHÌN |
                  </span>
                  <span className="text-3xl font-semibold text-red_main md:text-5xl">
                    SỨ MỆNH
                  </span>
                </div>
                <div className="pr-0 md:pr-25">
                  <div className="pb-3">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat,
                  </div>
                  <div>
                    vel illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                  </div>
                </div>
              </div>
              <div>
                <img src="/images/vechungtoi/logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-c-1154 px-4 py-14 text-center md:px-8 2xl:px-0">
        <span className=" text-4xl font-medium text-red_main ">
          VĂN HÓA BẦU TRỜI XANH
        </span>
        <div className="mt-5 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              TRÁCH NHIỆM
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">UY TÍN</span>
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
      <GiveContact />
      <GiveContactEmail />
    </div>
  );
}

export default VeChungToi;
