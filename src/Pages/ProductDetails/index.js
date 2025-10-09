import ProductZoom from "../../Components/ProductZoom";

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
                <h2 className="hd text-capitalize">Good Life Kachi Ghani Mustard Oil 1 L (Pouch)</h2>
                <ul className="list list-inline">
                    <li className="list inline-item">
                        <div className="d-flex align-items-center">
                            <span className="text-light me-2">Brands : </span>
                            <span>Wlich's</span>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
