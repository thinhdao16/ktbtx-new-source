interface Breadcrumb {
    label: string; // Nhãn của breadcrumb (ví dụ: "TRANG CHỦ")
    href: string;  // Đường dẫn liên kết của breadcrumb (ví dụ: "/")
  }
  
  interface HeaderBannerProps {
    title?: string; // Tiêu đề chính (mặc định là "VỀ CHÚNG TÔI")
    breadcrumbs?: Breadcrumb[]; // Mảng breadcrumb
    backgroundImage?: string; // Đường dẫn ảnh nền
  }
  const HeaderBanner: React.FC<HeaderBannerProps> = ({
  title ,
  breadcrumbs = [],
  backgroundImage,
}) => {
  return (
    <div
      className={`bg-cotain relative flex h-[30vh] flex-col items-start justify-center bg-center md:h-screen`}
      style={{
        backgroundImage: `url('${
          backgroundImage || "/images/vechungtoi/main.jpg"
        }')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start gap-6 pl-10  md:px-67">
        <span className="flex items-center justify-center text-xl font-semibold text-white md:text-7xl leading-loose">
          {title}
        </span>
        <div className="flex gap-2 text-lg font-extralight text-white md:text-2xl">
          {breadcrumbs.map(
            (breadcrumb: any, index) => (
              <span key={index}>
                <a href={breadcrumb.href}>{breadcrumb.label}</a>
                {index < breadcrumbs.length - 1 && " / "}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
