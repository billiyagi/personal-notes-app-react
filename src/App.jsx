import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailNotePage from "./pages/DetailNotePage";
import ArchivedNotePage from "./pages/ArchivedNotePage";
import AboutPage from "./pages/AboutPage";
import CreateNotePage from "./pages/CreateNotePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create" element={<CreateNotePage />} />
				<Route path="/note/:id" element={<DetailNotePage />} />
				<Route path="/archived" element={<ArchivedNotePage />} />
				<Route path="/about" element={<AboutPage />} />

				{/* Not Found Handler */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
