import Link from "next/link";
import React from "react";

function QuyTrinh() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-18">
      <Link href="/phong-thuy/ho-so-tieu-chi">
        <img
          src="images/phongthuy/ho-so-tieu-chi.jpg"
          alt="error"
          className="rounded-6xl aspect-square object-cover "
        />
        <div className="pt-5 text-center">
          <div className="text-xl font-semibold text-red_main">
            QUY TRÌNH THỰC HIỆN
          </div>
          <div className="text-2xl font-semibold text-blue_main">
            HỒ SƠ TIÊU CHÍ PHONG THỦY
          </div>
        </div>
      </Link>
      <Link href="/phong-thuy/ban-ve-thi-cong">
        <img
          src="images/phongthuy/ban-ve-thi-cong.jpg"
          alt="error"
          className="rounded-6xl aspect-square object-cover "
        />
        <div className="pt-5 text-center">
          <div className="text-xl font-semibold text-red_main">
            QUY TRÌNH THIẾT KẾ
          </div>
          <div className="text-2xl font-semibold text-blue_main">
            BẢN VẼ THI CÔNG NHÀ ĐẸP CHUẨN PHONG THỦY
          </div>
        </div>
      </Link>
      <Link href="/phong-thuy/mat-bang-chuan">
        <img
          src="images/phongthuy/mat-bang-chuan.jpg"
          alt="error"
          className="rounded-6xl aspect-square object-cover "
        />
        <div className="pt-5 text-center">
          <div className="text-xl font-semibold text-red_main">
            QUY TRÌNH THIẾT KẾ
          </div>
          <div className="text-2xl font-semibold text-blue_main">
            MẶT BẰNG CHUẨN PHONG THỦY HỢP CÔNG NĂNG
          </div>
        </div>
      </Link>
    </div>
  );
}

export default QuyTrinh;
