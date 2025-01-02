import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "TRANG CHỦ",
  //   newTab: false,
  //   path: "/",
  // },
  {
    id: 2,
    title: "VỀ CHÚNG TÔI",
    newTab: false,
    path: "/ve-chung-toi",
  },
  {
    id: 2.1,
    title: "PHONG THỦY",
    newTab: false,
    path: "/phong-thuy",
    submenu: [
      {
        id: 1,
        title: "Quy trình thực hiện hồ sơ tiêu chí phong thủy",
        newTab: false,
        path: "/phong-thuy/ho-so-tieu-chi",
      },
      {
        id: 2,
        title: "Quy trình thiết kế mặt bằng chuẩn phong thủy hợp công năng",
        newTab: false,
        path: "/phong-thuy/ban-ve-thi-cong",
      },
      {
        id: 3,
        title: "Quy trình thiết kế bản vẽ thi công nhà đẹp chuẩn phong thủy",
        newTab: false,
        path: "/phong-thuy/mat-bang-chuan",
      },
    ],
  },
  {
    id: 2.2,
    title: "MẪU NHÀ ĐẸP",
    newTab: false,
    path: "/mau-nha-dep",
    submenu: [
      {
        id: 4,
        title: "Nhà vườn đẹp",
        newTab: false,
        path: "/mau-nha-dep/nha-vuon-dep",
      },
      {
        id: 5,
        title: "Nhà phố đẹp",
        newTab: false,
        path: "/mau-nha-dep/nha-pho-dep",
      },
      {
        id: 6,
        title: "Biệt thự đẹp",
        newTab: false,
        path: "/mau-nha-dep/biet-thu-dep",
      },
    ],
  },
  {
    id: 3,
    title: "CẨM NANG",
    newTab: false,
    path: "/cam-nang",
  },
  {
    id: 4,
    title: "ỨNG DỤNG",
    newTab: false,
    path: "/ung-dung",
    submenu: [
      {
        id: 7,
        title: "Tính chi phí",
        newTab: false,
        path: "/ung-dung/tinh-chi-phi",
      },
      {
        id: 8,
        title: "Thước lỗ ban",
        newTab: false,
        path: "/ung-dung/thuoc-lo-ban",
      },
      {
        id:9,
        title: "Xem màu hợp tuổi",
        newTab: false,
        path: "/ung-dung/xem-mau-hop-tuoi",
      },
      {
        id: 10,
        title: "Xem tuổi làm nhà",
        newTab: false,
        path: "/ung-dung/xem-tuoi-lam-nha",
      },
      {
        id: 11,
        title: "Xem hướng nhà hợp tuổi",
        newTab: false,
        path: "/ung-dung/xem-huong-nha-hop-tuoi",
      },
    ],
  },
  {
    id: 5,
    title: "BẢNG GIÁ",
    newTab: false,
    path: "",
    submenu: [
      {
        id: 12,
        title: "Hồ sơ tiêu chí phong thủy",
        newTab: false,
        path: "/bang-gia",
      },
      {
        id: 13,
        title: "Thiết kế mặt bằng phong thủy",
        newTab: false,
        path: "/bang-gia",
      },
      {
        id: 14,
        title: "Thiết kế nhà đẹp chuẩn phong thủy",
        newTab: false,
        path: "/bang-gia",
      },
      // {
      //   id: 31,
      //   title: "Hồ sơ tiêu chí phong thủy",
      //   newTab: false,
      //   path: "/bang-gia/ho-so-tieu-chi",
      // },
      // {
      //   id: 34,
      //   title: "Thiết kế mặt bằng phong thủy",
      //   newTab: false,
      //   path: "/bang-gia/thiet-ke-mat-bang",
      // },
      // {
      //   id: 35,
      //   title: "Thiết kế nhà đẹp chuẩn phong thủy",
      //   newTab: false,
      //   path: "/bang-gia/thiet-ke-nha-dep",
      // },
    ],
  },
  {
    id: 6,
    title: "LIÊN HỆ",
    newTab: false,
    path: "/lien-he",
  },
];

export default menuData;
