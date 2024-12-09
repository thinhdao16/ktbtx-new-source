import React from "react";

import "./style.css";

function GiveContact() {

  return (
    <div className="background-image">
      <div className="mx-auto max-w-c-1154 px-4 py-20 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="text-3xl font-semibold text-red_main">
              NHẬN TƯ VẤN TỪ
            </p>
            <div className="mb-3 mt-2 text-5xl font-semibold text-blue_main">
              {" "}
              BẦU TRỜI XANH
            </div>
            <div>
              Nếu có bất kỳ thắc mắc nào về thiết kế phong thủy nhà ở,vui lòng
              gửi thông tin cho chúng tôi ể ược tư vấn
            </div>
            <div className="mb-5 mt-3">
              <input
                type="text"
                placeholder="Họ và tên *"
                className="w-full border border-black px-4 py-2 text-sm text-black outline-none placeholder:text-black "
              />
              <div className="my-3 grid grid-cols-2 gap-4 ">
                <input
                  type="text"
                  placeholder="Số điện thoại *"
                  className="w-full border border-black px-4 py-2 text-sm text-black outline-none placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Email *"
                  className="w-full border border-black px-4 py-2 text-sm text-black outline-none placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Diện tích căn nhà *"
                  className="w-full  border border-black px-4 py-2 text-sm text-black outline-none placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Thời gian bắt ầu xây nhà *"
                  className="w-full border border-black px-4 py-2 text-sm text-black outline-none placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Anh chị sống ở thành phố nào? *"
                  className="w-full border border-black px-4 py-2 text-sm text-black outline-none placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Bạn biết đến Bầu Trời Xanh từ đầu ? *"
                  className="w-full border border-black px-4 py-2 text-sm text-black outline-none placeholder:text-black"
                />
              </div>
              <textarea
                placeholder="Vấn đề cụ thể liên quan tới phong thủy nhà ở? *"
                className="h-40 w-full border border-black px-4 py-2 text-sm text-black outline-none placeholder:left-0 placeholder:top-0 placeholder:pt-2 placeholder:text-black"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 justify-between">
              <div>
                recaptcha
              </div>
              <div className="text-end">
                <button className="text-md bg-blue_main px-6 py-1.5 text-white">
                  GỬI YÊU CẦU
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiveContact;
