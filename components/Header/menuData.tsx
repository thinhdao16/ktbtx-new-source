import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "TRANG CHỦ",
    newTab: false,
    path: "/",
  },
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
        id: 31,
        title: "Quy trình thực hiện hồ sơ tiêu chí phong thủy",
        newTab: false,
        path: "/phong-thuy/ho-so-tieu-chi",
      },
      {
        id: 34,
        title: "Quy trình thiết kế mặt bằng chuẩn phong thủy hợp công năng",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Quy trình thiết kế bản vẽ thi công nhà đẹp chuẩn phong thủy",
        newTab: false,
        path: "/auth/signup",
      },
    ],
  },
  {
    id: 2.3,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    path: "/blog",
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
