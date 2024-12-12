import AnimatedDiv from "../AnimatedDiv";

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
    <AnimatedDiv
      className={`bg-cotain relative flex h-[30vh] flex-col items-start justify-center bg-center md:h-screen`}
      style={{
        backgroundImage: `url('${
          backgroundImage || "/images/vechungtoi/main.jpg"
        }')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="uppercase relative z-10 flex flex-col items-start gap-1 pl-10 pr-2 md:gap-4  md:pl-67">
        <div className="mr-10 md:mr-60 flex items-center justify-center text-xl font-semibold leading-none text-white md:text-7xl md:leading-tight">
          {title}
        </div>
        <div className="flex gap-1 text-base font-extralight uppercase text-white md:text-xl">
          {breadcrumbs.map((breadcrumb: any, index) => (
            <span key={index}>
              <a href={breadcrumb.href}>{breadcrumb.label}</a>
              {index < breadcrumbs.length - 1 && " / "}
            </span>
          ))}
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default HeaderBanner;
