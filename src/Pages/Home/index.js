import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import newsLetterImg from "../../assets/images/coupon.png";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { IoMailOutline } from "react-icons/io5";

// const products = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Werther's Original Caramel Hard Candies",
//     offer: 30,
//     stock: "In Stock",
//     basePrice: 20.0,
//     discountedPrice: 14.0,
//   },
//   {
//     id: 2,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-8-346x310.jpg",
//     title: "Chobani Non-Fat Greek Yogurt",
//     offer: 15,
//     stock: "In Stock",
//     basePrice: 12.0,
//     discountedPrice: 10.2,
//   },
//   {
//     id: 3,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5-346x310.jpg",
//     title: "Fresh Organic Broccoli",
//     offer: 10,
//     stock: "Out of Stock",
//     basePrice: 8.0,
//     discountedPrice: 7.2,
//   },
//   {
//     id: 4,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-2-346x310.jpg",
//     title: "Barilla Italian Pasta",
//     offer: 20,
//     stock: "In Stock",
//     basePrice: 6.0,
//     discountedPrice: 4.8,
//   },
//   {
//     id: 5,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-6-346x310.jpg",
//     title: "Oreo Chocolate Sandwich Cookies",
//     offer: 25,
//     stock: "In Stock",
//     basePrice: 5.0,
//     discountedPrice: 3.75,
//   },
//   {
//     id: 6,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-9-346x310.jpg",
//     title: "Lay’s Classic Potato Chips",
//     offer: 18,
//     stock: "In Stock",
//     basePrice: 4.0,
//     discountedPrice: 3.28,
//   },
//   {
//     id: 7,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-1-346x310.jpg",
//     title: "Heinz Tomato Ketchup",
//     offer: 12,
//     stock: "In Stock",
//     basePrice: 7.0,
//     discountedPrice: 6.16,
//   },
//   {
//     id: 8,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-4-346x310.jpg",
//     title: "Nutella Hazelnut Spread",
//     offer: 22,
//     stock: "In Stock",
//     basePrice: 15.0,
//     discountedPrice: 11.7,
//   },
//   {
//     id: 9,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7-346x310.jpg",
//     title: "Pepsi Cola Can (330ml)",
//     offer: 8,
//     stock: "In Stock",
//     basePrice: 2.0,
//     discountedPrice: 1.84,
//   },
//   {
//     id: 10,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-10-346x310.jpg",
//     title: "Quaker Oats Old Fashioned",
//     offer: 17,
//     stock: "Out of Stock",
//     basePrice: 9.0,
//     discountedPrice: 7.47,
//   },
//   {
//     id: 11,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-10-346x310.jpg",
//     title: "Quaker Oats Old Fashioned",
//     offer: 17,
//     stock: "Out of Stock",
//     basePrice: 9.0,
//     discountedPrice: 7.47,
//   },
//   {
//     id: 12,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-10-346x310.jpg",
//     title: "Quaker Oats Old Fashioned",
//     offer: 17,
//     stock: "Out of Stock",
//     basePrice: 9.0,
//     discountedPrice: 7.47,
//   },
//   {
//     id: 13,
//     img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-10-346x310.jpg",
//     title: "Quaker Oats Old Fashioned",
//     offer: 17,
//     stock: "Out of Stock",
//     basePrice: 9.0,
//     discountedPrice: 7.47,
//   },
// ];

const Home = () => {
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
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} className="cursor w-100" />
                </div>

                <div className="banner mt-4">
                  <img src={banner2} className="cursor w-100" />
                </div>
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

                <Button className="viewAllBtn ms-auto">
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
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-item-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>

                <Button className="viewAllBtn ms-auto">
                  View ALL <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={banner3} className="cursor w-100" />
                </div>

                <div className="banner">
                  <img src={banner4} className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on <br />
                promotions and coupons.
              </p>

              <form>
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button>Subscribe</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
