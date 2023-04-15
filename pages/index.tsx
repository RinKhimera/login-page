import Image from "next/image";
import google from "../public/google.svg";
import linkedin from "../public/linkedin.svg";
import Input from "@/components/Input";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen lg:flex lg:flex-row">
      <div className="h-screen flex flex-col justify-center lg:w-auto lg:basis-1/2">
        <form
          action="#"
          method="POST"
          className="relative mx-auto max-w-lg w-full rounded-lg p-5 lg:max-w-md"
        >
          <div>
            <Image src="/assets/bolo.jpeg" width={75} height={75} alt={""} />
          </div>
          <div className="grid gap-y-4">
            <div>
              <h1 className="text-4xl font-bold">Create an account</h1>
            </div>
            <div>
              <Input
                id="name"
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            </div>
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="block w-full rounded-md bg-blue-600 px-3.5
                          py-2.5 text-center text-lg font-semibold text-white
                          shadow-sm hover:bg-blue-700 transition"
              >
                Create account
              </button>
            </div>
            <div>
              <p className="text-center font-semibold">Or</p>
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center justify-center w-full rounded-md
                          ring-1 ring-gray-300 text-black px-3.5 py-2 h-12
                          font-semibold shadow-sm hover:bg-slate-300 transition"
              >
                <Image src={linkedin} alt={""} className="w-7 h-7 -mr-2" />
                <p className="text-center text-lg flex-grow">
                  Sign up with LinkedIn
                </p>
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center justify-center w-full rounded-md 
                          ring-1 ring-gray-300 text-black px-3.5 py-2 h-12
                          font-semibold shadow-sm hover:bg-slate-300 transition"
              >
                <Image src={google} alt={""} className="w-7 h-7 -mr-2" />
                <p className="text-center text-lg flex-grow">
                  Sign up with Google
                </p>
              </button>
            </div>
            <div className="grid gap-2 font-semibold">
              <p>
                Already have an account?{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  Sign in
                </span>
              </p>
              <p className="text-blue-600 hover:underline cursor-pointer">
                Forgot your password?
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden lg:block bg-[url('/assets/bg.jpg')] bg-cover lg:basis-1/2"></div>
    </div>
  );
};

export default LoginPage;
