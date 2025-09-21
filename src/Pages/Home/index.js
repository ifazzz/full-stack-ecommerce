import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Rating from "@mui/material/Rating";

const Home = () => {
  const slideArray = [
    {
      id: 1,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg",
      title: "Werther's Original Caramel Hard Candies",
      oldPrice: "$20.00",
      netPrice: "$14.00",
      rating: 5,
      stock: "In Stock",
      badge: "28%",
    },
    {
      id: 2,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg",
      title: "Ifaz",
      oldPrice: "$20.00",
      netPrice: "$14.00",
      rating: 5,
      stock: "In Stock",
      badge: "28%",
    },
    {
      id: 3,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg",
      title: "Seiam",
      oldPrice: "$20.00",
      netPrice: "$14.00",
      rating: 5,
      stock: "In Stock",
      badge: "28%",
    },
  ];

  
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} className="cursor w-100" />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn ml-auto">
                  View ALL <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {slideArray.length > 0 &&
                    slideArray.map((slide) => (
                      <SwiperSlide key={slide.id}>
                        <div className="item productItem">
                          <div className="imgWrapper">
                            <img src={slide.img} className="w-100" />

                            <span className="badge badge-primary">
                              {slide.badge}
                            </span>
                          </div>

                          <div className="info">
                            <h4>{slide.title}</h4>
                            <span className="text-success d-block">
                              {slide.stock}
                            </span>
                            <Rating
                              className="mt-2 mb-2"
                              name="read-only"
                              value={slide.rating}
                              readOnly
                              size="small"
                              precision={0.5}
                            />

                            <div className="d-flex">
                              <span className="oldPrice">{slide.oldPrice}</span>
                              <span className="netPrice text-danger">
                                {slide.netPrice}
                              </span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
