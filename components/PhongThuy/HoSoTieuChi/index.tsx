import HeaderBanner from "@/components/Header/Banner";
import React from "react";
import { steps } from "./data";

function HoSoTieuChi() {
  return (
    <div>
      <HeaderBanner
        title="QUY TRÌNH THỰC HIỆN HỒ SƠ TIÊU CHÍ PHONG THỦY"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "PHONG THỦY", href: "/phong-thuy" },
          {
            label: "QUY TRÌNH THỰC HIỆN HỒ SƠ TIÊU CHÍ PHONG THỦY",
            href: "/phong-thuy",
          },
        ]}
        backgroundImage="/images/phongthuy/main.jpg"
      />
      <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div>
          {steps.map((step, i) => (
            <div>
              <div className="grid grid-cols-11 items-center">
                <div className="col-span-2 text-xl font-semibold text-red_main md:col-span-1 md:text-3xl">
                  {step.head}
                </div>
                <div className="col-span-1 flex justify-center">
                  <div className=" h-3 w-3 rounded-full bg-red_main"></div>
                </div>
                <div className="col-span-8 text-xl font-semibold text-red_main md:col-span-9 md:text-3xl ">
                  {step.title}
                </div>
              </div>
              <div className="grid grid-cols-11 items-center">
                <div className="col-span-2 text-red_main md:col-span-1">
                  {""}
                </div>
                <div className="col-span-1 flex h-full items-center justify-center">
                  <button
                    style={{
                      ...(i !== steps.length - 1 && {
                        borderLeft: "solid 1px #BA2031",
                        marginTop: 0,
                        marginBottom: 0,
                      }),
                      marginLeft: 0,
                      paddingLeft: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      height: "108%",
                    }}
                  >
                    {""}
                  </button>
                </div>
                <div className="col-span-8 py-5 md:col-span-9">
                  <div className="pb-3">{step.description}</div>
                  <img
                    src={step.image}
                    alt="error"
                    className="h-50 w-full border-4 border-gray-700 object-cover md:h-80 md:w-1/2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HoSoTieuChi;
