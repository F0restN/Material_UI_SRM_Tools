import React, { useCallback, useState } from "react";
// import mammoth from "mammoth";
import { useDropzone } from "react-dropzone";
import StyledDropzone from "./components/StyledDropZone";
import { Button } from "@mui/material";
const mammoth = require("mammoth");

export default function Index() {
	const [files, setFiles] = useState({});

	const onDrop = useCallback((acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			const reader = new FileReader();
			reader.onabort = () => console.log("file reading was aborted");
			reader.onerror = () => console.log("file reading has failed");
			reader.onload = () => {
				const binaryStr = reader.result;
				setFiles({
					name: acceptedFiles[0].name,
					path: acceptedFiles[0].path,
					content: binaryStr,
				});
			};
			reader.readAsBinaryString(file);
		});
	}, []);

	const { getRootProps, getInputProps, isFocused, isDragActive } = useDropzone({
		onDrop,
	});

	const handleClick = async () => {
		await docReader(files.content);
	};

	const docReader = async (file) => {
		// const fileReader = new FileReader();
		// const readFile = () =>
		// 	new Promise((resolve, reject) => {
		// 		const reader = new FileReader();
		// 		reader.onload = (event) => {};
		// 		reader.onerror = (error) => {
		// 			reject(error);
		// 		};
		// 		reader.readAsArrayBuffer(file);
		// 	});

		// const extractedContent = await readFile();
		// return extractedContent;
		debugger;
	};

	return (
		<div>
			index
			<StyledDropzone
				getRootProps={getRootProps}
				getInputProps={getInputProps}
				isFocused={isFocused}
				isDragActive={isDragActive}
				selectedFileTitle={files.name}
			/>
			<Button variant="contained" onClick={handleClick}>
				Upload
			</Button>
		</div>
	);
}
