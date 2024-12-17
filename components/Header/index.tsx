import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";
import AnimatedDiv from "../AnimatedDiv";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  const router = useRouter()

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const handleNaviRouter = (data) => {
    router.push(data)
    if (window.innerWidth < 1200) {
      setDropdownToggler(!dropdownToggler)
      setNavigationOpen(!navigationOpen)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <AnimatedDiv transition={{ duration: 0.8, delay: 0.2 }}
      className={`sticky left-0 top-0 z-99999 w-full pt-7 ${stickyMenu
        ? "bg-white !pt-7 shadow transition duration-100 dark:bg-black"
        : ""
        }`}
    >
      <div className="relative mx-auto items-center justify-between ">
        <div className="mb-1 flex justify-between px-4 md:justify-center md:px-8 2xl:px-0">
          <a href="/">
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className="w-72 dark:hidden"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          className={`invisible  font-500  h-0 w-full items-center justify-center bg-blue_main md:px-8 xl:visible xl:flex xl:h-auto  xl:w-full 2xl:px-0 ${navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md  p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem: any, key) => (
                <div
                  key={key}
                  className={` text-white ${menuItem.submenu ? "group relative" : ""
                    } ${pathUrl === menuItem.path
                      ? ""
                      : "hover:bg-red_main"
                    } ${menuItem.submenu ? "" : "px-4 py-3"}`}
                  onClick={() => {
                    if (!menuItem.submenu) {
                      router.push(menuItem.path)
                    }
                  }}
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => handleNaviRouter(menuItem.path)}
                        className="px-4 py-3 flex cursor-pointer items-center gap-3  w-full justify-between"
                      >
                        {menuItem.title}
                        <span
                          onClick={(e) => {
                            if (window.innerWidth < 1200) {
                              router.push("")
                              return;
                            }
                          }}
                        >
                          <svg
                            className="h-3 w-3 cursor-pointer fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown bg-gray_main text-blue_main ${dropdownToggler ? "flex" : ""
                          }`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="w-65 md:w-full">
                            <Link href={item.path || "#"}
                              onClick={() => {
                                if (window.innerWidth < 1200) {
                                  setNavigationOpen(!navigationOpen)
                                }
                              }}
                            >{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={`${menuItem.path}`} onClick={() => {
                      if (window.innerWidth < 1200) {
                        setNavigationOpen(!navigationOpen)
                      }
                    }}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </AnimatedDiv>
  );
};

// w-full delay-300

export default Header;
