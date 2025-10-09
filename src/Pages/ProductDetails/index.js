import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";

const ProductDetails = () => {
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ProductZoom />
            </div>

            <div className="col-md-7">
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

              <div class="d-flex info">
                <span class="oldPrice me-2">$20.00</span>
                <span class="netPrice text-danger">$14.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
