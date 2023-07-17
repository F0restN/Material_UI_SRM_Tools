import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState } from "react";
import store from "./store/store";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	Link,
} from "react-router-dom";

import Loginpage from "./pages/Loginpage";
import TemplatePlanner from "./pages/CourseTemplatePlanner";
import InputPlanner from "./pages/InputPlanner/InputPlanner";
import HomePage from "./pages/HomePage";
import CurrSeqParser from "./pages/CurrSeqParser/index.jsx";

export default function App() {
	const [authenticationStatus, setAuthenticationStatus] = useState(
		store.getState()
	);

	return (
		<Container maxWidth="xl">
			<Box sx={{ my: 4 }}>
				<Router forceRefresh={true}>
					{authenticationStatus.authenticationRole !== true ? (
						<div className="OutContainer">
							<Switch>
								<Route exact path="/">
									<Loginpage />
								</Route>
								<Route exact path="/index">
									<HomePage />
								</Route>
								<Route exact path="/TemplatePlanner">
									<TemplatePlanner />
								</Route>
								<Route exact path="/InputPlanner">
									<InputPlanner />
								</Route>
								<Route exact path="/CurrSeqParser">
									<CurrSeqParser />
								</Route>
							</Switch>
						</div>
					) : (
						<Loginpage />
					)}
				</Router>
			</Box>
		</Container>
	);
}
