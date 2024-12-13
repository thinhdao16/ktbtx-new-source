"use client";  // Đảm bảo mã chạy ở phía client

import HeaderBanner from "@/components/Header/Banner";
import React, { useEffect, useRef, useState } from "react";

function TinhChiPhi() {
  const iframeRef: any = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(600); 
  const [clickFlag, setClickFlag] = useState(false);  

  const handleElementClick = (event: React.MouseEvent) => {
    console.log("Element clicked", event.target);
    setClickFlag((prevFlag) => !prevFlag);  
  };

  useEffect(() => {
    const updateIframeHeight = () => {
      const iframe: any = iframeRef.current;
      console.log(iframe)
      if (iframe && iframe. contentWindow) {
        const iframeDocument = iframe.contentWindow.document;
        const heightElement = iframeDocument.getElementById("height_web");

        if (heightElement) {
          setIframeHeight(heightElement.offsetHeight);
        }
      }
    };

    if (iframeRef.current) {
      iframeRef.current.onload = updateIframeHeight;
    }
    window.addEventListener("resize", updateIframeHeight);
    return () => {
      window.removeEventListener("resize", updateIframeHeight);
    };
  }, [clickFlag]); 

 

  return (
    <div onClick={handleElementClick}>
      <HeaderBanner
        title="ỨNG DỤNG TÍNH CHI PHÍ XÂY DỰNG"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "ứng dụng", href: "/ung-dung" },
          {
            label: "ỨNG DỤNG TÍNH CHI PHÍ XÂY DỰNG",
            href: "/ung-dung/tinh-chi-phi",
          },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
      <div id="click_iframe">
        <iframe
          ref={iframeRef}
          src="http://127.0.0.1:5500/xdnd/vn/tinh-chi-phi.html"
          style={{
            width: "100%",
            height: `${iframeHeight}px`, // Sử dụng chiều cao động
            border: "none",
          }}
          title="Ứng dụng tính chi phí xây dựng"
        ></iframe>
      </div>
    </div>
  );
}

export default TinhChiPhi;
