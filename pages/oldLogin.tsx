import Image from "next/image";
import bgImage from "@/public/assets/bg.jpg";
import logo from "@/public/assets/bolo.jpeg";
import google from "@/public/google.svg";
import linkedin from "@/public/linkedin.svg";
import Input from "@/components/Input";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen lg:flex lg:flex-row">
      <div className="min-h-screen flex flex-col justify-center lg:w-auto lg:basis-1/2">
        <form
          action="#"
          method="POST"
          className="relative mx-auto max-w-lg w-full rounded-lg p-5 lg:max-w-md"
        >
          <div className="flex justify-center">
            <Image src={logo} width={75} height={75} alt={""} />
          </div>
          <div className="grid gap-y-4">
            <div>
              <h1 className="text-4xl text-center font-bold">
                Create an account
              </h1>
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
            <div className="grid gap-2 font-semibold text-center pt-6">
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
      <div
        className="hidden bg-cover lg:block lg:basis-1/2"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="h-full flex flex-col text-white justify-between items-center py-10">
          <div className="bg-red-100 h-24 text-5xl"></div>
          <div className=" px-16 leading-tight text-5xl font-semibold">
            “We&apos;ve been using Bolo to kick start every new project and
            can&apos;t imagine working without it.”
          </div>
          <div className="flex justify-between px-16 items-center w-full">
            <div className="flex flex-col">
              <div className="text-3xl font-semibold pb-5">Pokam Samuel</div>
              <div className="text-xl font-semibold">Frontend Developer</div>
              <div className="text-xl">Beyond Technologies</div>
            </div>
            <div className="flex gap-8 text-6xl h-1/2 items-center pt-10">
              <button>
                <CiCircleChevLeft />
              </button>
              <button>
                <CiCircleChevRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
