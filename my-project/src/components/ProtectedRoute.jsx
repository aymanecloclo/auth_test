import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      // If the user is not authenticated, redirect to login page
      navigate('/login');
    }
  }, [auth.user, navigate]);

  // Optionally render a loading state while waiting for auth status
  if (!auth.user) {
    return null; // Or a loading spinner if preferred
  }

  return children; // Render children if authenticated
};

export default ProtectedRoute;
