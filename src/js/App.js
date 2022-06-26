import logo from "../imgs/logo.svg";
import "../css/App.css";
import Panel from "./modules/penel-left";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code className="text-stone-500">src/js/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
			<Panel />
		</div>
	);
}

export default App;
