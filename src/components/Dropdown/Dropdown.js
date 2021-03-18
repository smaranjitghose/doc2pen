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

  const colors = ["black","red","orange","blue","green","deeppink","darkviolet","dodgerblue",];

  const setValue = (aItemValue) => {
    if (colors.includes(aItemValue)) {
      if (aItemValue === "dodgerblue") {
        return "Light Blue";
      } else if (aItemValue === "deeppink") {
        return "Pink";
      } else if (aItemValue === "darkviolet") {
        return "Violet";
      } else {
        return aItemValue.charAt(0).toUpperCase() + aItemValue.slice(1);
      }
    } else {
      return aItemValue;
    }
  };

  const DropDownOptions = () => {
    return (
      <div>
        {props.items.map((aItem, index) => (
          <DropdownItem
            onClick={getTargetFunc()}
            name={props.type === "download" ? aItem : `${editContext.isBody ? "body" : "head"}${ props.type === "font" ? "Font" : "Color" }`}
            value={aItem}
            style={{ "font-family": `${aItem}`, color: `${aItem}` }}
            key={index}
          >
            {setValue(aItem)}
          </DropdownItem>
        ))}
      </div>
    );
  };

  const getTargetFunc = () => {
    if (props.type === "font" || props.type === "color")
      return editContext.onValueChange;
    else if (props.type === "download") return editContext.downloadAction;
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
