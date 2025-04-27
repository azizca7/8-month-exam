"use client";

import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";

export function ProtectedRoute({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);

    // Agar foydalanuvchi login yoki sign-up sahifasida bo'lsa, redirect qilmaymiz
    if (!token && pathname !== "/login" && pathname !== "/sign-up") {
      console.log("No token found, redirecting to /sign-up");
      router.push("/sign-up");
    }
  }, [router, pathname]);

  return <>{children}</>;
}
