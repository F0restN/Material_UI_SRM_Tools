import React from "react";
import { Button, Stack } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HomePage() {
	const history = useHistory();

	const handleToPOSGenerator = () => {
		history.push("/InputPlanner");
	};

	const handleToCurrSeqParser = () => {
		history.push("/CurrSeqParser");
	};

	return (
		<Stack direction="column" spacing={2}>
			<Button variant="contained" onClick={handleToPOSGenerator}>
				Go To POS Generator
			</Button>
			<Button variant="contained" onClick={handleToCurrSeqParser}>
				Go To Curriculum Sequence Parser
			</Button>
		</Stack>
	);
}
