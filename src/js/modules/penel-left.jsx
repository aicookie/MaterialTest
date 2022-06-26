import * as React from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Item";

export default function Panel() {
	return (
		<Grid container spacing={3}>
			<Grid item xs>
				<Item>xs</Item>
			</Grid>
			<Grid item xs={6}>
				<Item>xs=6</Item>
			</Grid>
			<Grid item xs>
				<Item>xs</Item>
			</Grid>
		</Grid>
	);
}
