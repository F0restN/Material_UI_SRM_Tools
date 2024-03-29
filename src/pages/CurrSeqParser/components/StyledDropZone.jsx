import React from "react";
import styled from "styled-components";

const getColor = (props) => {
	if (props.isDragAccept) {
		return "#00e676";
	}
	if (props.isDragReject) {
		return "#ff1744";
	}
	if (props.isFocused) {
		return "#2196f3";
	}
	return "#eeeeee";
};

const Container = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	border-width: 2px;
	border-radius: 2px;
	border-color: ${(props) => getColor(props)};
	border-style: dashed;
	background-color: #fafafa;
	color: #bdbdbd;
	outline: none;
	transition: border 0.24s ease-in-out;
`;

export default function StyledDropzone({
	getRootProps,
	getInputProps,
	isFocused,
	isDragActive,
	selectedFileTitle,
}) {
	return (
		<div className="container">
			<Container {...getRootProps({ isFocused, isDragActive })}>
				<input {...getInputProps()} />
				<p>
					{selectedFileTitle ||
						"Drag and drop some files here, or click to select files"}
				</p>
			</Container>
		</div>
	);
}
