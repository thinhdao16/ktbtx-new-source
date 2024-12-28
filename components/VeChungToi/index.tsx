"use client";
import React from "react";
import "./style.css";
import GiveContact from "../GiveContact";
import GiveContactEmail from "../GiveContactEmail";
import HeaderBanner from "../Header/Banner";
function VeChungToi() {
  return (
    <div>
      <HeaderBanner
        title="VỀ CHÚNG TÔI"
        breadcrumbs={[
          { label: "TRANG CHỦ", href: "/" },
          { label: "VỀ CHÚNG TÔI", href: "/vechungtoi" },
        ]}
        backgroundImage="/images/vechungtoi/main.jpg"
      />
      <div className="mx-auto max-w-c-1154 px-4 py-10 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <img src="/images/vechungtoi/history-create.jpg" alt="error" className="aspect-square object-cover" />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="text-xl font-medium text-red_main md:text-3xl">
              LỊCH SỬ HÌNH THÀNH
            </div>
            <div className="pb-4 pt-1 text-3xl font-semibold text-blue_main md:text-5xl">
              BẦU TRỜI XANH
            </div>
            <div className="pb-3">
              Bầu Trời Xanh là biểu tượng của sự tự do và hy vọng. Từ những ngày đầu thành lập, chúng tôi đã không ngừng nỗ lực để phát triển và vươn xa, mang lại giá trị bền vững cho cộng đồng.
              Với tinh thần đổi mới và cống hiến, chúng tôi cam kết tạo nên những bước tiến vững chắc trong mọi lĩnh vực hoạt động. Chúng tôi luôn lấy sự hài lòng và niềm tin của khách hàng làm kim chỉ nam để phấn đấu không ngừng.
            </div>
            <div>
              Hành trình này không chỉ là một câu chuyện về thành công, mà còn là sự sẻ chia, kết nối và tạo dựng niềm tin cho một tương lai tốt đẹp hơn. Chúng tôi tự hào đồng hành cùng cộng đồng trên con đường chinh phục những đỉnh cao mới.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cotain relative flex  flex-col items-start justify-center bg-[url('/images/vechungtoi/main.jpg')] bg-center md:h-screen">
        <div className="background-image-vechung-toi relative z-10 flex flex-col items-start">
          <div className="mx-auto max-w-c-1154 px-4 py-20 md:px-8 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div className="flex gap-3 pb-4">
                  <span className="text-3xl font-semibold text-blue_main md:text-5xl">
                    TẦM NHÌN |
                  </span>
                  <span className="text-3xl font-semibold text-red_main md:text-5xl">
                    SỨ MỆNH
                  </span>
                </div>
                <div className="pr-0 md:pr-25">
                  <div className="pb-3">
                    Chúng tôi hướng tới việc trở thành một đơn vị tiên phong, mang lại giá trị bền vững và sáng tạo cho cộng đồng.
                    Với khát vọng vươn xa,
                    chúng tôi cam kết xây dựng một tương lai tốt đẹp hơn, nơi mọi người cùng nhau phát triển và đạt được thành công.
                  </div>
                  <div>
                    Chúng tôi tin rằng, bằng sự tận tâm và đoàn kết, mỗi bước đi đều góp phần khẳng định giá trị cốt lõi và nâng tầm vị thế của chúng tôi trên hành trình phát triển.
                  </div>
                </div>
              </div>
              <div>
                <img src="/images/vechungtoi/logo.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-c-1154 px-4 py-14 text-center md:px-8 2xl:px-0">
        <span className=" text-4xl font-medium text-red_main ">
          VĂN HÓA BẦU TRỜI XANH
        </span>
        <div className="mt-5 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              TRÁCH NHIỆM
            </span>
            <p>
              Chúng tôi cam kết thực hiện trách nhiệm với cộng đồng, khách hàng và đối tác thông qua sự tận tâm và minh bạch trong mọi hoạt động. Sự phát triển bền vững luôn là kim chỉ nam để chúng tôi không ngừng nỗ lực, tạo ra giá trị tích cực và đóng góp cho xã hội.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">UY TÍN</span>
            <p>
            Uy tín là nền tảng cho mọi hoạt động của chúng tôi. Chúng tôi luôn giữ vững lời hứa, thực hiện cam kết và mang đến giá trị thực sự cho khách hàng, đối tác và cộng đồng. Mỗi bước tiến đều được xây dựng trên sự tin cậy và chất lượng, khẳng định vị thế và sự khác biệt của chúng tôi.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="h-22 w-22 rounded-full bg-blue_main"></div>
            <span className="text-lg font-medium text-red_main">
              HỖ TRỢ LINH HOẠT
            </span>
            <p>
            Chúng tôi cam kết mang đến sự hỗ trợ nhanh chóng, linh hoạt và hiệu quả, đáp ứng mọi nhu cầu của khách hàng một cách tốt nhất. Với tinh thần sẵn sàng lắng nghe và đồng hành, chúng tôi luôn tìm kiếm giải pháp tối ưu để đảm bảo sự hài lòng và tin cậy trong từng trải nghiệm dịch vụ.
            </p>
          </div>
        </div>
      </div>
      <GiveContact />
      <GiveContactEmail />
    </div>
  );
}

export default VeChungToi;
