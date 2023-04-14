import Image from "next/image";
import google from "../public/google.svg";
import linkedin from "../public/linkedin.svg";

const LoginPage = () => {
  return (
    <div className="bg-[url('/bg.jpg')] 
                    bg-cover 
                    min-h-screen p-5
                    flex flex-col justify-end"
                    
                  >
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className=" bg-zinc-200/10 backdrop-blur-sm p-5 rounded-lg grid gap-y-4">
          <div>
            <input
              type="text"
              name="first-name"
              placeholder="Username or Email"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Password"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
              font-semibold text-white shadow-sm hover:bg-indigo-500 transition"
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-center text-white font-semibold">Or</p>
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full rounded-md bg-slate-200 text-black px-3.5 py-2 h-12 font-semibold shadow-sm hover:bg-slate-300 transition"
            >
              <Image src={linkedin} alt={""} className="w-8 h-8 -mr-2" />
              <p className="text-center flex-grow">Continue with LinkedIn</p>
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center justify-center w-full rounded-md bg-slate-200 text-black px-3.5 py-2 h-12 font-semibold shadow-sm hover:bg-slate-300 transition"
            >
              <Image src={google} alt={""} className="w-7 h-7 -mr-2" />
              <p className="text-center flex-grow">Continue with Google</p>
            </button>
          </div>
          <div className="grid gap-2 font-semibold text-white">
            <p>
              Don&apos;t have an account?{" "}
              <span className="text-indigo-600 hover:underline cursor-pointer">
                Sign up
              </span>
            </p>
            <p className="text-indigo-600 hover:underline cursor-pointer">
              Forgot your password?
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
