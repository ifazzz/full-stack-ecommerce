import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { useContext, useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const ProductModal = (props) => {

  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const context = useContext(MyContext);


  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <Dialog
        open={context.isOpenProductModal}
        className="productModal"
        onClose={() => context.setisOpenProductModal(false)}
      >
        <Button
          className="close_"
          onClick={() => context.setisOpenProductModal(false)}
        >
          <MdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          Good Life Kachi Ghani Mustard Oil 1 L (Pouch)
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <spna>Brans:</spna>
            <span className="me-2">
              <b>Welch's</b>
            </span>
          </div>

          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>

        <hr />

        <div className="row mt-2 productDetaileModal">
          <div className="col-md-5">
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
                <div className={`item ${slideIndex===0 && "item_active"}`}>
                  <img
                    src={`https://api.spicezgold.com/download/file_1734526959744_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-0-202204281552.webp`}
                    className="w-100"
                    onClick={() => goto(0)}
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={`item ${slideIndex===1 && "item_active"}`}>
                  <img
                    src={`https://api.spicezgold.com/download/file_1734526959745_good-life-kachi-ghani-mustard-oil-1-l-pouch-product-images-o491334852-p491334852-1-202204281552.webp`}
                    className="w-100"
                    onClick={() => goto(1)}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-md-7">
            <div className="d-flex info align-item-center mb-3">
              <span className="oldPrice lg me-2">$9.35</span>
              <span className="netPrice text-danger lg">$7.25</span>
            </div>

            <span className="badge bg-success">IN STOCK</span>

            <p className="mt-2">
              Rs: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ms-3">
                Add to Cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <IoIosHeartEmpty /> &nbsp; ADD TO WISHLIST
              </Button>

              <Button className="btn-round btn-sml ms-3" variant="outlined">
                <MdOutlineCompareArrows /> &nbsp; COMPARE
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
