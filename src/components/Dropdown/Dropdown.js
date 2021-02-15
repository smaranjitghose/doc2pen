import { useState, useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import styles from "./Dropdown.module.css";
import { EditContext } from "../../pages/Editor/containers/editContext";

const DropdownComponent = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const editContext = useContext(EditContext);

  const DropDownOptions = () => {
    return (
      <div>
        {props.items.map((aItem, index) => (
          <DropdownItem
            onClick={getTargetFunc()}
            name={`${editContext.isBody ? "body" : "head"}${props.type === "font" ? "Font" : "Color"}`}
            value={aItem}
            style={{ "font-family": `${aItem}`, "color": `${aItem}` }}
            key={index}
          >
            {aItem}
          </DropdownItem>
        ))}
      </div>
    );
  };

  const getTargetFunc = () => {
    if (props.type === "font" || props.type === "color") return editContext.onValueChange;
    return editContext.pageSrcHandler;
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret className={styles.drbtn}>
        {props.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropDownOptions />
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComponent;
