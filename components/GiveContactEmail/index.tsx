import React from "react";
import "./style.css";
function GiveContactEmail() {
  return (
    <div
      className="background-image-givecontactemail  flex justify-center"
      style={{ marginBottom: "-1px" }}
    >
      <div className="mx-auto w-c-1154 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="flex items-center justify-center  text-3xl font-medium text-white md:justify-start md:text-4xl">
            ĐĂNG KÝ ĐƯỢC TƯ VẤN
          </div>
          <div className="flex px-4">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Nhập số điện thoại của bạn"
              className="w-64 rounded-l-full pl-6 outline-none placeholder:font-semibold placeholder:text-gray-600 md:w-80"
            />
            <button className="rounded-r-full bg-blue_main py-3 pl-3 pr-4 text-xl font-semibold text-white md:py-4 md:pl-6  md:pr-12">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiveContactEmail;
