'use client'
import React, { useEffect, useState } from "react";
import GiveContact from "../GiveContact";
import Link from "next/link";
import { message } from "antd";
import { getHandBookRandoom } from "../CamNang/api";
import { useRouter } from "next/navigation";
import ExpandableParagraph from "../ExpandableParagraph";
function TrangChu() {
  const [dataRandom, setDataRandom] = useState([])

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postings = await getHandBookRandoom(3);
        setDataRandom(postings);
      } catch (error) {
        message.error(error?.response?.message)
      } finally {
      }
    };
    fetchData()
  }, [])

  return (
    <div className="">
      <div className="bg-cotain relative flex h-[30vh] flex-col items-center justify-center bg-[url('/images/trangchu/main.jpg')] bg-center md:h-screen">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <span className="w-3/4 text-center text-xl font-semibold text-white md:w-7/12 md:text-7xl">
            THIẾT KẾ NHÀ Ở CHUẨN PHONG THỦY
          </span>
          <div className="flex gap-8">
            <button
              onClick={() => router.push('/lien-he')}
              className="bg-red_main px-11 py-3 text-lg font-semibold text-white md:text-2xl">
              TƯ VẤN
            </button>
            <button
              onClick={() => router.push('/bang-gia')}
              className="bg-white px-11 py-3 text-lg font-semibold text-red_main md:text-2xl">
              BẢNG GIÁ
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-15 py-8 md:grid-cols-2">
          <div className="flex flex-col pr-0 md:pr-10">
            <span className="text-4xl font-medium text-red_main">
              GIỚI THIỆU VỀ
            </span>
            <span className="pt-2 text-5xl font-semibold text-blue_main">
              BẦU TRỜI XANH
            </span>
            <div className="py-6">
              <p className="pb-3">
                Kiến trúc không chỉ là nghệ thuật sắp đặt không gian, mà còn là
                sự kết nối giữa con người và môi trường xung quanh. Với sự phát
                triển của công nghệ và tư duy sáng tạo, kiến trúc đương đại
                hướng đến sự hài hòa giữa công năng, thẩm mỹ và tính bền vững.
              </p>
              <span>
                Tại "Bầu Trời Xanh", chúng tôi cam kết mang đến những giải pháp
                kiến trúc tối ưu, kết hợp giữa phong cách hiện đại và giá trị
                truyền thống. Mỗi công trình đều được thiết kế để phản ánh phong
                cách sống và nhu cầu cá nhân, đồng thời tôn trọng thiên nhiên và
                văn hóa địa phương.
              </span>
            </div>
            <div>
              <button
                onClick={() => router.push('/ve-chung-toi')}
                className="bg-red_main px-11 py-3 text-2xl font-semibold text-white hover:border hover:border-red_main hover:bg-white hover:text-red_main"
              >
                XEM THÊM
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 pr-0 md:grid-cols-2 md:pr-10">
            <div className="pb-0 md:pb-20">
              <img
                src="/images/trangchu/intro-1.jpg"
                className=" rounded-3xl object-cover md:h-full"
                alt="error"
              />
            </div>
            <div className="pt-0 md:pt-20">
              <img
                src="/images/trangchu/intro-2.jpg"
                className="rounded-3xl object-cover md:h-full"
                alt="error"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-blue_main py-10 text-white">
        <div className="flex max-w-c-1154 flex-col items-center justify-center px-4">
          <span className="text-4xl font-medium">
            TOP 5 CÔNG CỤ HỖ TRỢ TƯ VẤN THIẾT KẾ NHÀ Ở
          </span>
          <div className="mt-5 grid grid-cols-2  gap-14 md:grid-cols-5">
            <div className="text-center text-sm" onClick={() => router.push('/ung-dung/tinh-chi-phi')}>
              <img
                src="/images/trangchu/dutoan.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">
                  ỨNG DỤNG TÍNH CHI PHÍ XÂY DỰNG
                </span>
              </div>
            </div>
            <div className="text-center text-sm" onClick={() => router.push('/ung-dung/xem-tuoi-lam-nha')}>
              <img
                src="/images/trangchu/xemtuoi.jpg"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">ỨNG DỤNG XEM TUỔI LÀM NHÀ</span>
              </div>
            </div>
            <div className="text-center text-sm" onClick={() => router.push('/ung-dung/thuoc-lo-ban')}>
              <img
                src="/images/trangchu/loban.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">
                  ỨNG DỤNG XEM THƯỚC LỖ BAN TRỰC TUYẾN
                </span>
              </div>
            </div>
            <div className="text-center text-sm" onClick={() => router.push('/ung-dung/xem-huong-nha-hop-tuoi')}>
              <img
                src="/images/trangchu/huongnha.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6 ">
                <span className="font-medium">
                  ỨNG DỤNG XEM HƯỚNG NHÀ HỢP TUỔI
                </span>
              </div>
            </div>
            <div className="text-center text-sm" onClick={() => router.push('/ung-dung/xem-mau-hop-tuoi')}>
              <img
                src="/images/trangchu/mautuoi.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6 ">
                <span className="font-medium">ỨNG DỤNG XEM MÀU HỢP TUỔI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-c-1154 px-4 py-14 text-center md:px-8 2xl:px-0">
        <span className=" text-4xl font-medium text-red_main ">
          VÌ SAO CHỌN BẦU TRỜI XANH
        </span>
        <div className="mt-5 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <ExpandableParagraph
              text={
                'ĐỘI NGŨ GIÀU KINH NGHIỆM'
              }
              rows={1}
              className="text-lg font-medium text-red_main"
            />
            <ExpandableParagraph
              text=
              'Đội ngũ chuyên gia của chúng tôi sở hữu nhiều năm kinh nghiệm trong lĩnh vực kiến trúc, mang đến những giải pháp tối ưu và sáng tạo cho mọi dự án.'
              rows={3}
              className="text-base text-grey_main font-400"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>

            <ExpandableParagraph
              text={
                'KIẾN THỨC PHONG THỦY CHUYÊN SÂU'
              }
              rows={1}
              className="text-lg font-medium text-red_main"
            />
            <ExpandableParagraph
              text=
              ' Chúng tôi am hiểu sâu sắc về phong thủy, giúp các công trình không  chỉ đẹp mắt mà còn hài hòa với yếu tố tâm linh và văn hóa.'
              rows={3}
              className="text-base text-grey_main font-400"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>

            <ExpandableParagraph
              text={
                'KIẾN THỨC PHONG THỦY CHUYÊN SÂU HỖ TRỢ LINH HOẠT'
              }
              rows={1}
              className="text-lg font-medium text-red_main"
            />
            <ExpandableParagraph
              text=' Với phong cách làm việc chuyên nghiệp và linh hoạt, chúng tôi luôn
              sẵn sàng hỗ trợ khách hàng trong mọi giai đoạn của dự án.'
              rows={3}
              className="text-base text-grey_main font-400"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray_main py-10 ">
        <div className="flex max-w-c-1154 flex-col items-center justify-center px-4">
          <span className="text-4xl font-medium">PHONG THỦY TRONG NHÀ Ở</span>
          <div className="mt-5 grid grid-cols-1  gap-14 md:grid-cols-3">
            {dataRandom?.map((item: any, index) => {
              const dataItemDetail = encodeURIComponent(JSON.stringify(item));
              return (
                <div className="text-md  w-80" key={index}>
                  <img
                    src={item?.img}
                    alt="error"
                    className="mb-3 h-45 w-full object-cover"
                  />
                  <div className="px-6">
                    <ExpandableParagraph
                      text={item?.title}
                      rows={1}
                      className="font-medium text-red_main text-lg"
                    />
                    <ExpandableParagraph
                      text={item?.description}
                      rows={3}
                      className="font-400 text-grey_main text-base"
                    />
                    <div className="mt-2">
                      <Link
                        href={`/cam-nang/${dataItemDetail}`}
                        className=" bg-blue_main px-6 py-1.5 text-sm text-white hover:border hover:border-blue_main hover:bg-white hover:text-blue_main"
                      >
                        XEM CHI TIẾT
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-blue_main py-10 text-white">
        <div className="flex max-w-c-1154 flex-col items-center justify-center px-4">
          <span className="text-4xl font-medium">BẢNG GIÁ</span>
          <div className="mt-5 grid grid-cols-2  gap-14 md:grid-cols-4">
            <Link href="/bang-gia" className="text-center ">
              <img
                src="/images/trangchu/dutoan.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">PHONG THỦY</span>
              </div>
            </Link>
            <Link href="/bang-gia" className="text-center ">
              <img
                src="/images/trangchu/xemtuoi.jpg"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">THIẾT KẾ</span>
              </div>
            </Link>
            <Link href="/bang-gia" className="text-center ">
              <img
                src="/images/trangchu/loban.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6">
                <span className="font-medium">PHONG THỦY</span>
              </div>
            </Link>
            <Link href="/bang-gia" className="text-center ">
              <img
                src="/images/trangchu/huongnha.png"
                alt=""
                className="mb-3 rounded-3xl"
              />
              <div className="px-6 ">
                <span className="font-medium">PHONG THỦY</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <GiveContact />
    </div>
  );
}

export default TrangChu;
