import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useContext } from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";


const ProductModal = (props) => {

  const context = useContext(MyContext);

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

            <ProductZoom/>

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
