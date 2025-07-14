import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoadingScreen from "../components/LoadingScreen";

export default function AuthenticatedRoutes() {
	const { user, isInitializing } = useAuth();
	if (isInitializing) {
		return <LoadingScreen />;
	}
	return user ? <Outlet /> : <Navigate to={"/login"} />;
}
