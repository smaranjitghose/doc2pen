import React, { useContext } from "react";
import DownloadFileModal from "../../components/DownloadFileModal/DownloadFileModal";
import { EditContext } from "../../containers/editContext";
import styles from "./settings.module.scss";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import NumberSlider from "../../components/Slider/NumberSlider";
import { Button } from 'reactstrap';

const Settings = () => {
  const editContext = useContext(EditContext);
  const [modal, setModal] = React.useState(false);
  // Dialogue open
  const handleopenModal = () => {
    setModal(true);
  }
  return (
    <div className={styles.controlPanel}>
      <div className={styles.controls}>
        <div className={styles.group1}>
          <Dropdown name="Change Color" active={editContext.bodyValues.bodyColor} type="color" items={["black", "red", "orange", "green", "blue", "dodgerblue", "deeppink", "darkviolet"]} />
          <div className={styles.vSeparator}></div>
          <Dropdown
            name="Change Style"
            type="font"
            items={["HomemadeApple", "Caveat", "CedarvilleCursive", "Dawning", "IndieFlower", "NothingYouCouldDo", "Liu", "LeagueScript", "Enola", "RayFont", "RGhandwritten","Moody","Norm"]}
            active={editContext.bodyValues.bodyFont}
          />
          <div className={styles.vSeparator}></div>
          <Dropdown name="Change Sheet" type="page" active={editContext.pageSrc} items={["Ruled1", "Ruled2", "OnlyMargin", "Blank1", "Blank2"]} />

          <div className={styles.vSeparator}></div>

          <label className={styles.downloadBtn} htmlFor="import">
            Import File
          </label>
          <input id="import" style={{ display: "none" }} type="file" onChange={editContext.importTxt} ></input>
          <div className={styles.vSeparator}></div>
          {/* Download functionality */}
          <Button color="none" onClick={handleopenModal} className={styles.download} >Download File</Button>
          <div className={styles.vSeparator}></div>
        </div>
        <div className={styles.group2}>
          <NumberSlider
            label={"Adjust x-axis"}
            editContext={editContext}
            name="bodyLeft"
            min="0"
            max="200"
            step={1}
            initialValue={0}
          />

          <div className={styles.vSeparator}></div>
          <NumberSlider
            label={"Font size"}
            editContext={editContext}
            name="bodySize"
            min="5"
            max="50"
            step={1}
            initialValue={16}
          />

          <div className={styles.vSeparator}></div>

          <NumberSlider
            label={"Adjust y-axis"}
            editContext={editContext}
            name="bodyTop"
            min="0"
            max="100"
            step={1}
            initialValue={5}
          />
          <div className={styles.vSeparator}></div>

          <NumberSlider
            label={"Line-spacing"}
            editContext={editContext}
            name="bodyLine"
            min="1"
            max="5"
            step={0.1}
            initialValue={1}
          />
          <div className={styles.vSeparator}></div>

          <NumberSlider
            label={"Width"}
            editContext={editContext}
            name="bodyWidth"
            min="20"
            max="70"
            step={1}
            initialValue={65}
          />

          <div className={styles.vSeparator}></div>

          <NumberSlider
            label={"Letter Spacing"}
            editContext={editContext}
            name="bodyLetterSpace"
            min="0"
            max="10"
            step={0.5}
            initialValue={0}
          />
        </div>
      </div>
      <DownloadFileModal
        modal={modal}
        setModal={setModal} />
    </div>
  );
};

export default Settings;
