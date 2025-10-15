import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

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

          <br />

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Additional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Reviews (3)
                  </Button>
                </li>
              </ul>

              <br />

              {activeTabs === 0 && (
                <div className="tabContent">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              )}

              {activeTabs === 1 && (
                <div className="table-resposive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr class="stand-up">
                        <th>Stand up</th>
                        <td>
                          <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr class="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5"L x 18.5"W x 16.5"H</p>
                        </td>
                      </tr>
                      <tr class="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5"L x 24"W x 18.5"H</p>
                        </td>
                      </tr>
                      <tr class="door-pass-through">
                        <th>Door Pass through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr class="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr class="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr class="width">
                        <th>Width</th>
                        <td>
                          <p>24"</p>
                        </td>
                      </tr>
                      <tr class="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45"</p>
                        </td>
                      </tr>
                      <tr class="wheels">
                        <th>Wheels (w/o wheels)</th>
                        <td>
                          <p>12" air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr class="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5"</p>
                        </td>
                      </tr>
                      <tr class="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25"</p>
                        </td>
                      </tr>
                      <tr class="pa_color">
                        <th>color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr class="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {activeTabs === 2 && (
              <div className="tabContent">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Customer question & answers</h3>
                    <br />

                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                        </div>
                        <span className="text-g d-block text-center font-weight-bold">
                          Faizul Islam
                        </span>
                      </div>

                      <div className="info ps-5">
                        <div className="d-flex align-items-center w-100">
                          <h5 className="text-light">01/03/1993</h5>
                          <div className="ms-auto">
                            <Rating
                              name="half-rating-read"
                              value={4.5}
                              precision={0.5}
                              readOnly
                              size="small"
                            />
                          </div>
                        </div>

                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>

                    <br className="res-hide" />

                    <br className="res-hide" />

                    <form className="reviewForm">
                      <h4>Add a review</h4> <br />
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Write a Review"
                          name="review"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                              name="userName"
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <Rating name="rating" value={4.5} precision={0.5} />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="form-group">
                        <Button
                          type="submit"
                          className="btn-blue btn-lg btn-big btn-round"
                        >
                          Submit Review
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          <br />

          <RelatedProducts/>
          
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

// <div className="col-md-4 ps-5 reviewBox">
//   <h4>Customer Reviews</h4>

//   <br/>

//   <div className="progressBarBox d-flex align-items-center">
//     <span className="mr-3 ms-2">5 star</span>
//     <div
//       class="progress"
//       style={{ width: "78%", height: "20px" }}
//     >
//       <div
//         class="progress-bar bg-success"
//         style={{ width: "100%", height: "20px" }}
//       >
//         100%
//       </div>
//     </div>
//   </div>

//   <div className="progressBarBox d-flex align-items-center">
//     <span className="mr-3 ms-2">4 star</span>
//     <div
//       class="progress"
//       style={{ width: "78%", height: "20px" }}
//     >
//       <div
//         class="progress-bar bg-success"
//         style={{ width: "85%", height: "20px" }}
//       >
//         70%
//       </div>
//     </div>
//   </div>

//   <div className="progressBarBox d-flex align-items-center">
//     <span className="mr-3 ms-2">3 star</span>
//     <div
//       class="progress"
//       style={{ width: "78%", height: "20px" }}
//     >
//       <div
//         class="progress-bar bg-success"
//         style={{ width: "55%", height: "20px" }}
//       >
//         55%
//       </div>
//     </div>
//   </div>

//   <div className="progressBarBox d-flex align-items-center">
//     <span className="mr-3 ms-2">2 star</span>
//     <div
//       class="progress"
//       style={{ width: "78%", height: "20px" }}
//     >
//       <div
//         class="progress-bar bg-success"
//         style={{ width: "35%", height: "20px" }}
//       >
//         35%
//       </div>
//     </div>
//   </div>

//   <div className="progressBarBox d-flex align-items-center">
//     <span className="mr-3 ms-2">1 star </span>
//     <div
//       class="progress"
//       style={{ width: "78%", height: "20px" }}
//     >
//       <div
//         class="progress-bar bg-success"
//         style={{ width: "25%", height: "20px" }}
//       >
//         25%
//       </div>
//     </div>
//   </div>

// </div>
