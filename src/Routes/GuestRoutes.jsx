import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function GuestRoutes() {
	const { user } = useAuth();
	return user ? <Navigate to="/" /> : <Outlet />;
}
