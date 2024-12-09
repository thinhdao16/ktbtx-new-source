import React from "react";
import HeaderBanner from "../Header/Banner";
import Link from "next/link";
import GiveContactEmail from "../GiveContactEmail";
import QuyTrinh from "./components/QuyTrinh";

function PhongThuy() {
  return (
    <div>
      <HeaderBanner
        title="PHONG THỦY"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "PHONG THỦY", href: "/phong-thuy" },
        ]}
        backgroundImage="/images/phongthuy/main.jpg"
      />
      <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <QuyTrinh />
      </div>
      <GiveContactEmail />
    </div>
  );
}

export default PhongThuy;
