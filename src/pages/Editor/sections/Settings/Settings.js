import React, { useContext } from "react";
import DownloadFileModal from "./DownloadFileModal";
import { EditContext } from "../../containers/editContext";
import styles from "./Settings.module.css";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import NumberSlider from "../../components/Slider/NumberSlider";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const Settings = () => {
  const editContext = useContext(EditContext);
  const [modal, setModal] = React.useState(false);

  // Dialogue open
  const handleopenModal = () => {
    setModal(true);
  }
  return (
    <div className={styles.controlPanel}>
      <div className={styles.selector}>
        <div className={styles.selectOption} style={{ backgroundColor: editContext.isBody ? "#1979CA" : "#f0f7ff" }}>
          <input
            type="checkbox"
            name="heading"
            value={editContext.isBody}
            id="title-heading"
            onClick={editContext.isBodyHandler}
            className={`id-title d-none`}
          />
          <label for="title-heading" style={{ color: editContext.isBody && "#f0f7ff" }}>
            Title
          </label>
        </div>
        <div className={styles.selectOption} style={{ backgroundColor: editContext.isBody ? "#f0f7ff" : "#1979CA" }}>
          <input
            type="checkbox"
            name="heading"
            value={editContext.isBody}
            id="body-heading"
            onClick={editContext.isBodyHandler}
            className={`id-body d-none `}
          />
          <label for="body-heading" style={{ color: !editContext.isBody && "#f0f7ff" }}>
            Body
          </label>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.group1}>
          <Dropdown name="Change Color" type="color" items={["black", "red", "orange", "green", "blue", "dodgerblue", "deeppink", "darkviolet"]} />
          <div className={styles.vSeparator}></div>
          <Dropdown
            name="Change Style"
            type="font"
            items={["HomemadeApple", "Caveat", "Dawning", "IndieFlower", "NothingYouCouldDo", "Liu", "LeagueScript"]}
          />
          <div className={styles.vSeparator}></div>
          <Dropdown name="Change Sheet" type="page" items={["Ruled1", "Ruled2", "OnlyMargin", "Blank1", "Blank2"]} />

          <div className={styles.vSeparator}></div>

          <label className={styles.downloadBtn} htmlFor="import">
            Import File
          </label>
          <input id="import" style={{ display: "none" }} type="file" onChange={editContext.importTxt} ></input>
          <div className={styles.vSeparator}></div>
          {/* Download functionality */}
          <Button color="none" onClick={handleopenModal} >Download File</Button>
          <div className={styles.vSeparator}></div>
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

        <div className={styles.vSeparator}></div>
        <NumberSlider
          label={"Font size"}
          editContext={editContext}
          name={editContext.isBody ? "bodySize" : "headSize"}
          min="5"
          max="50"
          step={1}
          initialValue={16}
        />

        <div className={styles.vSeparator}></div>

        <NumberSlider
          label={"Adjust y-axis"}
          editContext={editContext}
          name={editContext.isBody ? "bodyTop" : "headTop"}
          min="0"
          max="100"
          step={1}
          initialValue={5}
        />
        <div className={styles.vSeparator}></div>

        <NumberSlider
          label={"Line-spacing"}
          editContext={editContext}
          name={editContext.isBody ? "bodyLine" : "headLine"}
          min="1"
          max="5"
          step={1}
          initialValue={1}
        />
        <div className={styles.vSeparator}></div>

        <NumberSlider
          label={"Width"}
          editContext={editContext}
          name={editContext.isBody ? "bodyWidth" : "headWidth"}
          min="20"
          max="70"
          step={1}
          initialValue={65}
        />

        <div className={styles.vSeparator}></div>

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
      <DownloadFileModal
        modal={modal}
        setModal={setModal} />
    </div>
  );
};

export default Settings;
