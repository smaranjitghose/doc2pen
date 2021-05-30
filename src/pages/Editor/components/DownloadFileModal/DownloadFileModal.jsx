import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { EditContext } from "../../containers/editContext";
import styles from "./dowload-file-modal.module.scss";
const DownloadFileModal = props => {
	const { modal, setModal } = props;
	const editContext = React.useContext(EditContext);
	const [fileType, setFileType] = React.useState("PNG");
	const [value, setValue] = React.useState("");
	const [valueError, setValueError] = React.useState(null);
	const handleDownloadFile = () => {
		if (!value) setValueError("please provide file name");
		else {
			editContext.setAllPagesVisible(true);
			editContext.downloadAction(value, fileType);
			setModal(false);
			setValue("");
			setValueError(null);
		}
	};
	const toggle = () => {
		setModal(!modal);
		setValue("");
		setValueError(null);
	};
	const files = ["PNG", "PDF"];
	return (
		<Modal style={{ marginTop: "200px" }} isOpen={modal} toggle={toggle}>
			<ModalBody>
				<input
					placeholder="What would you like to call the file?"
					className={styles.modalInput}
					type="text"
					id="name"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<br />
				{valueError ? <p style={{ color: "red" }}>{valueError}</p> : null}

				<label className={styles.modalLabel}> Export as : </label>
				<br />
				{files.map(file => {
					return (
						<button
							onClick={() => setFileType(file)}
							style={{
								backgroundColor: fileType === file ? "#103f5f" : "#add8e6",
								color: fileType === file ? "white" : "black",
							}}
							className={styles.downloadLabelButton}
							key={Math.random()}
						>
							{file} {fileType === file ? "*" : null}
						</button>
					);
				})}
			</ModalBody>
			<ModalFooter>
				<Button className={styles.downloadButton} onClick={handleDownloadFile}>
					Download
				</Button>
				<Button
					className={styles.closeModal}
					color="secondary"
					onClick={toggle}
				>
					X
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default DownloadFileModal;
