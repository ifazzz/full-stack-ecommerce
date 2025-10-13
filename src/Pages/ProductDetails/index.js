import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };

  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ps-5">
              <ProductZoom />
            </div>

            <div className="col-md-7 ps-5 pr-5">
              <h2 className="hd text-capitalize">
                Good Life Kachi Ghani Mustard Oil 1 L (Pouch)
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light me-2">Brands : </span>
                    <span>Welch's </span>
                  </div>
                </li>

                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="text-light cursor ms-2">1 Review</span>
                  </div>
                </li>
              </ul>

              <div class="d-flex info mb-3">
                <span class="oldPrice me-2">$20.00</span>
                <span class="netPrice text-danger">$14.00</span>
              </div>

              <span className="badge bg-success">IN STOCK</span>

              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size / weight:</span>
                <ul className="list list-inline mb-0 ps-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      500g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  <BsCartFill /> &nbsp; Add to cart
                </Button>

                <Tooltip title="Add to Wishlist" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ms-4">
                  <FaRegHeart />
                </Button>
                </Tooltip>

                <Tooltip title="Add to Compare" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ms-4">
                  <MdOutlineCompareArrows />
                </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
