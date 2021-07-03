import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./drag-drop.module.scss";

function DragDrop(props) {
	const {
		files,
		setFiles,
		setInput,
		setOutput,
		input,
		outputOptions,
		setOutputOptions,
	} = props;
	const onDrop = useCallback(
		acceptedFiles => {
			const newFile = acceptedFiles.map(file => {
				const fileType = file.type.split("/")[1];
				acceptedFiles.length > 1 || files.length > 0
					? setInput("Mix")
					: setInput(fileType);

				const index = outputOptions.indexOf(fileType);
				if (index > -1 && fileType !== "pdf") {
					const outputOptionsTemp = outputOptions;
					outputOptionsTemp.splice(index, 1);
					setOutputOptions(outputOptionsTemp);
				}
				if (fileType === "pdf") setOutputOptions(["pdf"]);
				return Object.assign(file, {
					preview: URL.createObjectURL(file),
				});
			});
			setFiles(prevState => [...prevState, ...newFile]);
		},
		[setFiles, setInput, outputOptions, setOutputOptions],
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: "image/*, application/pdf",
		onDrop,
	});

	const deleteImage = path => {
		setFiles(prevState => prevState.filter(file => file.path !== path));
		if (input !== "Mix") {
			setInput("Input");
			setOutput("Output");
			setOutputOptions(["png", "jpg", "webp", "jpeg", "pdf"]);
		}
	};

	return (
		<section className={styles.container}>
			{files.length !== 0 && (
				<div className={styles.container_image}>
					{files.map(file => (
						<div key={file.path} className={`${styles.image} ${styles.scroll}`}>
							<img src={file.preview} alt="doc2pen" />
							<span onClick={() => deleteImage(file.path)}>
								<AiFillCloseCircle size={24} />
							</span>
						</div>
					))}
				</div>
			)}
			<div
				{...getRootProps({ className: "dropzone" })}
				className={styles.container_upload}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxjkIyrVIMesRK1InjzUOSvXHZqSbnunTKw&usqp=CAU" width={60} height={60}></img>
					 <p><span style={{ display:"block" ,fontWeight:"700", marginTop:"1rem"}}></span><strong>Drag file(s) here to upload.</strong></p> &nbsp;
					 <span style={{color:"#6a6b76"}} >
				Alternatively, you can select a file by <br/>  &nbsp;<span style={{color:"blue",}}><strong>clicking here</strong></span>
			  </span>
					 </p>
				)}
			</div>
		</section>
	);
}

export default DragDrop;
