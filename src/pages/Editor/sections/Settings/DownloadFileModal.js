import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { EditContext } from "../../containers/editContext";
import styles from "./Settings.module.css";
const DownloadFileModal = (props) => {
    const { modal, setModal } = props;

    const editContext = React.useContext(EditContext);
    const [fileType, setFileType] = React.useState('PNG');
    const [value, setValue] = React.useState('');
    const [valueError, setValueError] = React.useState(null);

    const handleDownloadFile = (e) => {
        if (!value)
            setValueError("please provide file name")
        else {
            editContext.downloadAction(value, fileType);
            setModal(false)
            setValue('');
            setValueError(null);
        }

    }
    const toggle = () => {
        setModal(!modal);
        setValue('');
        setValueError(null);
    }
    const files = ['PNG', 'PDF'];
    return (

        <Modal style={{ marginTop: "200px" }} isOpen={modal} toggle={toggle} >

            <ModalBody>
                <label className={styles.modalLabel} htmlFor="name">Please Provide File name : </label>
                <br />
                <input
                    placeholder="Enter file name"
                    className={styles.modalInput}
                    type="text"
                    id="name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <br />
                {
                    valueError ? (
                        <p style={{ color: "red" }}>{valueError}</p>
                    ) : null
                }

                <label className={styles.modalLabel} > Select the file Type : </label>
                <br />
                {
                    files.map((file) => {
                        return (
                            <button
                                onClick={() => setFileType(file)}
                                style={{ backgroundColor: fileType === file ? "#103f5f" : "#6666FF" }}
                                className={styles.downloadLabelButton}
                                key={Math.random()}>{file} {fileType === file ? '*' : null}</button>
                        )
                    })
                }
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleDownloadFile}>Download</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>


    )

}

export default DownloadFileModal;
