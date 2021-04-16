import React, { useCallback } from "react";

import { useDropzone } from "react-dropzone";
import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./drag-drop.module.scss";

function DragDrop({ files, setFiles, setInput, setOutput }) {
  const onDrop = useCallback(
    acceptedFiles => {
      const newFile = acceptedFiles.map(file => {
        acceptedFiles.length > 1 ? setInput("Mix") : setInput(file.type.split("/")[1]);
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });
      setFiles(prevState => [...prevState, ...newFile]);
    },
    [setFiles, setInput]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: "image/*", onDrop });

  const deleteImage = path => {
    setFiles(prevState => prevState.filter(file => file.path !== path));
    setInput("Input");
    setOutput("Output");
  };

  return (
    <section className={styles.container}>
      {files.length !== 0 && (
        <div className={styles.container_image}>
          {files.map(file => (
            <div className={`${styles.image} ${styles.scroll}`}>
              <img key={file.path} src={file.preview} alt="doc2pen" />
              <span onClick={() => deleteImage(file.path)}>
                {" "}
                <AiFillCloseCircle size={24} />
              </span>
            </div>
          ))}
        </div>
      )}
      {files.length === 0 && (
        <div {...getRootProps({ className: "dropzone" })} className={styles.container_upload}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      )}
    </section>
  );
}

export default DragDrop;
