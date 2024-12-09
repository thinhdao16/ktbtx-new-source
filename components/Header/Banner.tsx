interface Breadcrumb {
  label: string;
  href: string;
}

interface HeaderBannerProps {
  title?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}
const HeaderBanner: React.FC<HeaderBannerProps> = ({
  title,
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
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-start gap-1 md:gap-6 pl-10 pr-2  md:px-67">
        <span className="flex items-center justify-center text-xl font-semibold leading-none md:leading-tight text-white md:text-7xl">
          {title}
        </span>
        <div className="flex gap-2 text-base font-extralight text-white md:text-2xl">
          {breadcrumbs.map((breadcrumb: any, index) => (
              <span key={index}>
                <a href={breadcrumb.href}>{breadcrumb.label}</a>
                {index < breadcrumbs.length - 1 && " / "}
              </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
