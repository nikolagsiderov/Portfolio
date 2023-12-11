import Links from "./Links";
import { TypeAnimation } from "react-type-animation";

export default function Hero({ section }: { section: string }) {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
        Hello, I&apos;m
        <br />
        Nikola Siderov<span className="text-brand">.</span>
      </h1>
      <h6 className="font-thin text-brand">@nikolagsiderov</h6>
      <div className="flex items-center justify-start my-8">
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://github.com/nikolagsiderov", "_blank");
            }}
            src="/github.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/nikolagsiderov/",
                "_blank"
              );
            }}
            src="/linkedin.svg"
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:nikolagsiderov@gmail.com");
            }}
            src="/google.svg"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <p className="font-light leading-7">
        I&apos;m a full-stack software developer with{" "}
        <span className="text-white font-bold">4.5 years</span> of experience in
        building, maintaining and improving applications for a variety of
        clients. I specialize in web-based technologies including{" "}
        <span className="text-white font-bold">
          .NET, Web API, React, Next.js, JavaScript, TypeScript
        </span>{" "}
        and many more.
      </p>
      <br />
      <p className="font-light leading-7">
        I am based in <span className="text-white font-bold">Plovdiv</span>,
        with a built-in setup for WFH. This is about the type of person I am and
        what I like to do in my free time so you know I&apos;m not a robot.
        Here&apos;s one last interesting sentence so that you remember me a bit
        better.
      </p>
      <br />
      <p className="font-light leading-7">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Let's build .NET!",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Let's build React!",
            1000,
            "Let's build JavaScript!",
            1000,
            "Let's build TypeScript!",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </p>
      <Links section={section} />
    </div>
  );
}
