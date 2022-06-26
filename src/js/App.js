import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

import logo from "../imgs/logo.svg";
import "../css/App.css";
import Panel from "./modules/penel-left";

function App() {
	return (
		<div className="App">
			<Panel />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code className="text-stone-500">src/js/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default function Main() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const theme = React.useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					//margin: spacing(1, "auto"),
					spacing: 4,
					palette: {
						mode: prefersDarkMode ? "dark" : "light",
					},
				})
			),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div>
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</div>

			<App />
		</ThemeProvider>
	);
}
