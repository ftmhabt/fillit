import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Auth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      // Verify token with your backend
      const response = await axios.get("/api/verify-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("token");
        router.push("/login");
      }
    } catch (error) {
      console.error("Auth error:", error);
      localStorage.removeItem("token");
      router.push("/login");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default Auth;
