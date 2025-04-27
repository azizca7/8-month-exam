"use client";

import {useState} from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useRouter} from "next/navigation";
import Link from "next/link";

export function LoginForm({className, ...props}: React.ComponentProps<"form">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://mustafocoder.pythonanywhere.com/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Successfully login!");
        router.push("/");
      } else {
        alert(data?.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6 w-[408px]", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Get more opportunities</h1>
        <button
          type="button"
          className="border flex items-center justify-center gap-x-2.5 border-[#CCCCF5] mt-6 w-[408px] bg-white text-[#4640DE] font-bold text-base py-3"
        >
          <img
            width={30}
            height={30}
            src="https://pngimg.com/uploads/google/google_PNG19635.png"
            alt=""
          />
          Sign Up with Google
        </button>
      </div>

      <div className="grid gap-6 w-full">
        <div className="grid gap-3 w-full">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#4640DE]"
          disabled={loading}
        >
          {loading ? "Loading..." : "Continue"}
        </Button>
      </div>

      <div className="text-left text-[#202430] font-normal text-base">
        Already have an account?{" "}
        <Link
          href="/sign-up"
          className="underline text-[#4640DE] font-semibold text-base underline-offset-4"
        >
          Login
        </Link>
      </div>
    </form>
  );
}
