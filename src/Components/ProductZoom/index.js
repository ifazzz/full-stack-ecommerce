import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { useRef, useState } from "react";

const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <div className="productZoom">
      <div className="productZoom position-relative">
        <div className="badge badge-primary">23%</div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
          slidesPerGroup={1}
          modules={[Navigation]}
          className="zoomSliderBig"
          ref={zoomSliderBig}
        >
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`https://api.spicezgold.com/download/file_1734526959744_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-0-202204281552.webp`}
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`https://api.spicezgold.com/download/file_1734526959745_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-1-202204281552.webp`}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        navigation={true}
        slidesPerGroup={1}
        modules={[Navigation]}
        className="zoomSlider"
        ref={zoomSlider}
      >
        <SwiperSlide>
          <div className={`item ${slideIndex === 0 && "item_active"}`}>
            <img
              src={`https://api.spicezgold.com/download/file_1734526959744_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-0-202204281552.webp`}
              className="w-100"
              onClick={() => goto(0)}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`item ${slideIndex === 1 && "item_active"}`}>
            <img
              src={`https://api.spicezgold.com/download/file_1734526959745_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-1-202204281552.webp`}
              className="w-100"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductZoom;
