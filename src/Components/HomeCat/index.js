import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff0f6",
    "#f9f0ff",
    "#fff1e6",
    "#f0f0f0",
    "#f6ffed",
    "#e6fffb",
    "#fff1f0",
  ]);
  return (
    <section className="homeCat">
      <div className="container">
        <h3 className="mb-4 hd">Featured Categories</h3>
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div className="item text-center cursor"
                  style={{ background: item }}
                >
                  <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png" />

                  <h6>Organic Kiwi</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
