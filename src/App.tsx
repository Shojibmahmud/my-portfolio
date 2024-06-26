// src/App.tsx
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"; // You can create this CSS file for styling

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Contact />
		</div>
	);
};

export default App;
