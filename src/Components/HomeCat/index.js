import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomeCat = () => {
  return (
    <section className="homeCat">
      <div className="container">
        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          navigation={true}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item text-center">
                <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/cat-12.png"/>

                <h6>Organic Kiwi</h6>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
