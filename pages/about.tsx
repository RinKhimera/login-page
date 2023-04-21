import Image from "next/image";
import AboutPic from "@/public/assets/about-us.png";
import Person1 from "@/public/assets/person1.png";
import Icon from "@/public/assets/icon.svg";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
const About = () => {
  return (
    <div>
      <NavBar />
      <main className="max-w-7xl mx-auto my-5 px-5">
        <div className="grid gap-5 pt-20 rounded-2xl bg-slate-200">
          <h1 className="text-5xl font-semibold text-center">
            We&apos;re changing the whole game
          </h1>
          <div className="flex justify-center items-center gap-5">
            <a
              href="#"
              className="p-3 px-6 text-white bg-black font-bold
                         w-36 text-sm lg:text-base lg:w-52 text-center rounded-full"
            >
              Get Started
            </a>
            <a
              href="#"
              className="p-3 px-6 text-black bg-slate-200 border 
                       border-black font-bold w-36 text-sm lg:text-base lg:w-52 text-center rounded-full"
            >
              View Pricing
            </a>
          </div>
          <div className="flex justify-center mx-5">
            <Image
              src={AboutPic}
              width={500}
              height={500}
              alt={""}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 my-14 px-5 md:gap-10 md:px-10 md:flex-row">
          <div className="basis-1/2 flex flex-col gap-10 justify-between">
            <div>
              <h1 className="text-2xl font-bold text-green-400">OUR STORY</h1>
              <h2 className="text-2xl font-bold">
                We&apos;re building the economic infrastructure for the
                internet. Businesses of every size
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Image src={Icon} alt={""} height={150} width={150} />
              </div>
              <div className="text-lg text-zinc-600">
                A living place for curiosity and collaboration, meeting and
                meaning. The heart of a creative community
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-5">
            <div className="flex gap-6">
              <div className="text-2xl font-semibold">01.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">
                  6 years of intense research
                </div>
                <div className="text-sm text-zinc-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit, autem! Velit, assumenda enim iste laudantium asperiores
                  impedit.
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl font-semibold">02.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Audience segmentation</div>
                <div className="text-sm text-zinc-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci dicta quasi ab possimus! consectetur adipisicing
                  elit.
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="text-2xl font-semibold">03.</div>
              <div className="flex flex-col gap-2">
                <div className="text-2xl font-bold">Contact monotoring</div>
                <div className="text-sm text-zinc-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero deserunt iure fugiat debitis quaerat.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-5 px-5 md:gap-14 md:px-10 md:flex-row">
          <div className="basis-1/2 flex flex-col gap-5 justify-evenly items-center md:items-end">
            <div className="text-5xl font-bold">Our Mission</div>
            <div className="text-sm text-zinc-600 leading-relaxed text-center md:text-end">
              We&apos;re building economic infrastructure for the internet
              Businesses of every size, be it new startups or public compagnies,
              use our software to accept payments and manage their businesses
              online.
            </div>
            <div className="flex gap-2 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold">94%</div>
                <div className="text-xs text-center">CLIENT RETENTION</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold">70M+</div>
                <div className="text-xs text-center">EMAIL PER MONTH</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold">10K+</div>
                <div className="text-xs text-center">MONTHLY CAMPAIGNS</div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex justify-center w-full max-w-sm bg-slate-200 rounded-3xl">
            <Image src={Person1} alt={""} height={200} width={200} />
          </div>
        </div>
        <div className="flex flex-col-reverse items-center my-14 gap-5 px-5 md:gap-14 md:px-10 md:flex-row-reverse">
          <div className="basis-1/2 flex flex-col gap-5 justify-evenly items-center md:items-start">
            <div className="text-5xl font-bold">Our Vision</div>
            <div className="text-sm text-zinc-600 leading-relaxed text-center md:text-start">
              We&apos;re building economic infrastructure for the internet
              Businesses of every size, be it new startups or public compagnies,
              use our software to accept payments and manage their businesses
              online.
            </div>
            <div className="flex gap-2 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold">94%</div>
                <div className="text-xs text-center">CLIENT RETENTION</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold">70M+</div>
                <div className="text-xs text-center">EMAIL PER MONTH</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold">10K+</div>
                <div className="text-xs text-center">MONTHLY CAMPAIGNS</div>
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex justify-center w-full max-w-sm bg-slate-200 rounded-3xl">
            <Image src={Person1} alt={""} height={200} width={200} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
