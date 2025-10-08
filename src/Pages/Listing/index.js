import Sidebar from "../../Components/Sidebar";

const Listing = () => {
  return (
    <>
      <section className="product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar/>

            <div className="content_right">
                <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" className="w-100"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;