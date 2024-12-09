import React from "react";
import "./style.css";
function GiveContactEmail() {
  return (
    <div className="background-image-givecontactemail  flex justify-center">
      <div className="w-c-1154 mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="text-3xl text-white md:text-4xl  flex items-center justify-center md:justify-start font-medium">
            ĐĂNG KÝ ĐƯỢC TƯ VẤN
          </div>
          <div className="flex px-4">
            <input type="text" name="phone" id="phone" placeholder="Nhập số điện thoại của bạn" className="w-64 md:w-80 outline-none placeholder:text-gray-600 placeholder:font-semibold pl-6 rounded-l-full"  />
            <button className="bg-blue_main text-xl font-semibold text-white py-3 md:py-4 pl-3 pr-4 md:pl-6 md:pr-12  rounded-r-full">
            ĐĂNG KÝ
          </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default GiveContactEmail;
