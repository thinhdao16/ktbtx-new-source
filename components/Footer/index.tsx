"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-blue_main text-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1154 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10 lg:py-10">
            <div className="flex flex-wrap gap-0 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top mb-8 w-1/2 md:mb-0 lg:w-1/4"
              >
                <a href="/">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white p-5 md:mt-8 md:h-65 md:w-65">
                    <img
                      src="/images/logo/logo-vertical.png"
                      alt="Logo"
                      className="dark:hidden"
                    />
                  </div>
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:w-2/3 ">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top grid grid-cols-12"
                >
                  <div className="col-span-5">
                    <div className="mb-3 font-medium">VỀ CHÚNG TÔI</div>
                    <div className="flex flex-col gap-1 font-extralight">
                      <a href="/ve-chung-toi">Về công ty BẦU TRỜI XANH</a>
                      <a href="/ve-chung-toi">Dịch vụ của BẦU TRỜI XANH</a>
                      <a href="/ve-chung-toi">Vì sao chọn chúng tôi</a>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <div className="mb-3 font-medium">PHONG THỦY</div>
                    <div className="flex flex-col gap-1 font-extralight">
                      <a href="/phong-thuy/ho-so-tieu-chi">
                        Quy trình thực hiện hồ sơ tiêu chí phong thủy
                      </a>
                      <a href="/phong-thuy/ban-ve-thi-cong">
                        Quy trình thiết kế mặt bằng chuẩn pt hợp công năng
                      </a>
                      <a href="/phong-thuy/mat-bang-chuan">
                        Quy trình thiết kế bản vẽ thi công nhà đẹp chuẩn phong
                        thủy
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top grid grid-cols-12"
                >
                  <div className="col-span-5">
                    <div className="mb-3 font-medium">MẪU NHÀ ĐẸP</div>
                    <div className="flex flex-col gap-1 font-extralight">
                      <a href="/mau-nha-dep/nha-vuon-dep">Nhà vườn đẹp</a>
                      <a href="/mau-nha-dep/nha-pho-dep">Nhà phố đẹp</a>
                      <a href="/mau-nha-dep/biet-thu-dep">Biệt thự đẹp</a>
                    </div>
                  </div>
                  <div className="col-span-7">
                    <div className="mb-3 font-medium">BẢNG GIÁ</div>
                    <div className="flex flex-col gap-1 font-extralight">
                      <a href="/bang-gia">Hồ sơ tiêu chí phong thủy</a>
                      <a href="/bang-gia">Thiết kế mặt bằng phong thủy</a>
                      <a href="/bang-gia">Thiết kế nhà đẹp chuẩn phong thủy</a>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top flex gap-4 "
                >
                  <div className="whitespace-nowrap font-medium">LIÊN HỆ</div>
                  <div className="flex flex-col gap-1 font-extralight">
                    <span>
                      Ngõ 170, khu phố 5, phường Tiến Thành, thành phố Đồng
                      Xoài, Tỉnh Bình Phước, Việt Nam
                    </span>
                    <a href="tel:0988800926">0988.800.926</a>
                    <a href="ktbtx.vn@gmail.com"> ktbtx.vn@gmail.com</a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
