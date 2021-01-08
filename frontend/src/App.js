import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
	return (
		<div className="App">
			<header className="jumbotron">header</header>
			<Card size={6} />
			<footer className="footer mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum eligendi unde, et ipsa quidem sapiente. Tempore, accusamus iste. Debitis, pariatur. Minima vero nisi excepturi. Dignissimos fuga itaque quas possimus.</footer>
		</div>
	);
}

export default App;
