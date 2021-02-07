import React, { useContext } from "react";

import { EditContext } from "../../containers/editContext";
import "./Settings.css";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import NumberSlider from "../../components/Slider/NumberSlider";

const Settings = () => {
  const editContext = useContext(EditContext);
  
  return (
    <div className="control-panel">
      <div className="selector">
        <div className="select-option" style={{ backgroundColor: editContext.isBody ? "#1979CA" : "#f0f7ff" }}>
          <input
            type="checkbox"
            name="heading"
            value={editContext.isBody}
            id="heading"
            onClick={editContext.isBodyHandler}
            className="d-none"
          />
          <label for="heading" style={{ color: editContext.isBody && "#f0f7ff" }}>
            Title
          </label>
        </div>
        <div className="select-option" style={{ backgroundColor: editContext.isBody ? "#f0f7ff" : "#1979CA" }}>
          <input
            type="checkbox"
            name="heading"
            value={editContext.isBody}
            id="heading"
            onClick={editContext.isBodyHandler}
            className="d-none"
          />
          <label for="heading" style={{ color: !editContext.isBody && "#f0f7ff" }}>
            Body
          </label>
        </div>
      </div>
      <div className="controls">
        <div className="group1">
          <Dropdown name="Change Color" type="color" items={["black", "red", "blue", "green", "pink"]} />
          <div className="v-separator"></div>
          <Dropdown
            name="Change Style"
            type="font"
            items={["HomemadeApple", "Caveat", "Dawning", "IndieFlower", "NothingYouCouldDo", "Liu", "LeagueScript"]}
            item1="HomemadeApple"
            item2="Caveat"
            item3="Dawning"
            item4="IndieFlower"
            item5="NothingYouCouldDo"
            item6="Liu"
            item7="LeagueScript"
          />
          <div className="v-separator"></div>
          <Dropdown name="Change Sheet" type="page" items={["Ruled1", "Ruled2", "OnlyMargin", "Blank1", "Blank2"]} />

          <div className="v-separator"></div>
          
          <label className="download-btn" htmlFor="import">Import File</label>
          <input id="import" style={{display:"none"}} type="file" onChange={editContext.importTxt}></input>
          <div className="v-separator"></div>

          <button className="download-btn" onClick={editContext.downloadImg}>
            Download
          </button>

          <div className="v-separator"></div>
        </div>

        <NumberSlider
          label={"Adjust x-axis"}
          editContext={editContext}
          name={editContext.isBody ? "bodyLeft" : "headLeft"}
          min="0"
          max="200"
          step={1}
          initialValue={0}
        />

        <div className="v-separator"></div>
        <NumberSlider
          label={"Font size"}
          editContext={editContext}
          name={editContext.isBody ? "bodySize" : "headSize"}
          min="5"
          max="50"
          step={1}
          initialValue={16}
        />

        <div className="v-separator"></div>

        <NumberSlider
          label={"Adjust y-axis"}
          editContext={editContext}
          name={editContext.isBody ? "bodyTop" : "headTop"}
          min="0"
          max="100"
          step={1}
          initialValue={5}
        />
        <div className="v-separator"></div>

        <NumberSlider
          label={"Line-spacing"}
          editContext={editContext}
          name={editContext.isBody ? "bodyLine" : "headLine"}
          min="1"
          max="5"
          step={1}
          initialValue={1}
        />
        <div className="v-separator"></div>

        <NumberSlider
          label={"Width"}
          editContext={editContext}
          name={editContext.isBody ? "bodyWidth" : "headWidth"}
          min="20"
          max="70"
          step={1}
          initialValue={65}
        />

        <div className="v-separator"></div>

        <NumberSlider
          label={"Letter Spacing"}
          editContext={editContext}
          name={editContext.isBody ? "bodyLetterSpace" : "headLetterSpace"}
          min="0"
          max="10"
          step={0.5}
          initialValue={0}
        />
      </div>
    </div>
  );
};

export default Settings;
