import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function Panel() {
	return (
		<Grid container spacing={3}>
			<Grid item xs>
				<Button variant="outlined">xs</Button>
			</Grid>
			<Grid item xs={6}>
				<Button variant="outlined">xs=6</Button>
			</Grid>
			<Grid item xs>
				<Button variant="outlined">xs</Button>
			</Grid>
		</Grid>
	);
}
