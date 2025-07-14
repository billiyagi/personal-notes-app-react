import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailNotePage from "./pages/DetailNotePage";
import ArchivedNotePage from "./pages/ArchivedNotePage";
import AboutPage from "./pages/AboutPage";
import CreateNotePage from "./pages/CreateNotePage";
import NotFoundPage from "./pages/NotFoundPage";
import ThemeProvider from "./contexts/ThemeProvider";
import LocaleProvider from "./contexts/LocaleProvider";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./contexts/AuthProvider";
import GuestRoutes from "./Routes/GuestRoutes";
import AuthenticatedRoutes from "./Routes/AuthenticatedRoutes";

function App() {
	return (
		<>
			<LocaleProvider>
				<ThemeProvider>
					<BrowserRouter>
						<AuthProvider>
							<Routes>
								<Route element={<AuthenticatedRoutes />}>
									<Route path="/" element={<HomePage />} />
									<Route
										path="/create"
										element={<CreateNotePage />}
									/>
									<Route
										path="/note/:id"
										element={<DetailNotePage />}
									/>
									<Route
										path="/archived"
										element={<ArchivedNotePage />}
									/>
								</Route>

								<Route element={<GuestRoutes />}>
									<Route
										path="/login"
										element={<LoginPage />}
									/>
									<Route
										path="/register"
										element={<RegisterPage />}
									/>
								</Route>
								<Route path="/about" element={<AboutPage />} />

								{/* Not Found Handler */}
								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</AuthProvider>
					</BrowserRouter>
				</ThemeProvider>
			</LocaleProvider>
		</>
	);
}

export default App;
