'use client'
import React from "react";
import HeaderBanner from "../Header/Banner";
import GiveContactEmail from "../GiveContactEmail";
import AnimatedDiv from "../AnimatedDiv";
import Link from "next/link";
import { applications } from "./config";

function UngDung() {
  return (
    <div>
      <HeaderBanner
        title="ứng dụng"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "ứng dụng", href: "/ung-dung" },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
      <AnimatedDiv className="mx-auto max-w-c-1154 px-4 py-14 text-center md:px-8 2xl:px-0">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-12">
          {applications.map((app, index) => (
            <Link key={index} href={app.href}>
              <img src={app.imgSrc} alt="" className="mb-3 rounded-4xl" />
              <div className="px-2 text-sm font-semibold uppercase text-blue_main">
                {app.title}
              </div>
            </Link>
          ))}
        </div>
      </AnimatedDiv>
      <GiveContactEmail />
    </div>
  );
}

export default UngDung;
