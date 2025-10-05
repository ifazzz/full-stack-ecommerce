import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="filterBox">
          <h6>PRODUCT CATEGORIES</h6>
          <div className="scroll">
            <ul>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Men" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Women" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Beauty" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Kids" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Cameras" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Men Bags" />
              </li>{" "}
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Women Bags" />
              </li>
              <li>
                <FormControlLabel className="w-100" control={<Checkbox />} label="Men Footwear" />
              </li>
              <li>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Women FootWear"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
