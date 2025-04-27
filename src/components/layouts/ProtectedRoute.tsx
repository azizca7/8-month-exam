"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";

export function ProtectedRoute({children}: {children: React.ReactNode}) {
  const router = useRouter();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token); // Tokenni debug qilish

    if (!token) {
      console.log("No token found, redirecting to /sign-up");
      router.push("/sign-up");
    } else {
      // setLoading(false);
    }
  }, [router]);

  return <>{children}</>;
}
