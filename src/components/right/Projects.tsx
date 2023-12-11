import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";
import { useState } from "react";

export default function Projects({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});
  const [vidTwo, setVidTwo] = useState(false);

  useEffect(() => {
    inView && setSection("projects");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2">Projects</h2>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Auction System Application</h3>
          <div>
            <a
              href="https://github.com/nikolagsiderov/Auction"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Visit Source Code
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-4">
          Online auction system to raise funds for a good cause, done in a fun
          and engaging way for participants, bidding on goods they care about.
          By adding the enthusiasm of the auction to a positive cause, these
          types of auctions are a win-win for all parties involved.
        </p>
        <p className="font-light leading-7 mb-4">
          Online auction system to raise funds for a good cause, done in a fun
          and engaging way for participants, bidding on goods they care about.
          By adding the enthusiasm of the auction to a positive cause, these
          types of auctions are a win-win for all parties involved.
        </p>
        <div className="flex flex-wrap items-center justify-start">
          <img
            className="m-2"
            width="30px"
            title="React"
            alt="React"
            src="/react.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Redux"
            alt="Redux"
            src="/redux.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="TypeScript"
            alt="TypeScript"
            src="/ts.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Next.js"
            alt="Next.js"
            src="/nextjs.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Material UI"
            alt="Material UI"
            src="/mui.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Azure SQL Databases"
            alt="Azure SQL Databases"
            src="/sqllocal.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Microsoft Azure DevOps"
            alt="Microsoft Azure DevOps"
            src="/devops.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Microsoft Azure Pipelines"
            alt="Microsoft Azure Pipelines"
            src="/pipelines.svg"
          />
          <img
            className="m-2"
            width="40px"
            title="C Sharp"
            alt="C#"
            src="/csharp.svg"
          />
          <img
            className="m-2"
            width="50px"
            title="Dot Net"
            alt="DotNet"
            src="/dotnet.svg"
          />
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Bulgaria Interactive Map</h3>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Going live soon
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-4">
          Dynamic, educational web platform helping people learn bulgarian
          history.
        </p>
        <p className="font-light leading-7 mb-4">
          In this project I significantly improved my front-end capabilities,
          along with learning to work with and create custom design images &
          vector files. I have built custom designs of the bulgarian maps
          throughout the centuries.
        </p>
        <div className="flex flex-wrap mb-4">
          <div className="relative w-[160px] lg:mr-4 mb-4 lg:mb-0">
            <div className="w-[160px] absolute inset-0 bg-white/70 rounded-lg blur-sm"></div>
            <img
              className="relative rounded-lg"
              src={"./map3.png"}
              alt="my-gif"
            />
          </div>
          <div className="relative w-[160px] lg:mr-4 mb-4 lg:mb-0">
            <div className="w-[160px] absolute inset-0 bg-white/70 rounded-lg blur-sm"></div>
            <img
              className="relative rounded-lg"
              src={"./map2.png"}
              alt="my-gif"
            />
          </div>
          <div className="relative w-[160px] lg:mr-4 mb-4 lg:mb-0">
            <div className="w-[160px] absolute inset-0 bg-white/70 rounded-lg blur-sm"></div>
            <img
              className="relative rounded-lg"
              src={"./map1.png"}
              alt="my-gif"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-start">
          <img
            className="m-2"
            width="40px"
            title="Adobe Illustrator"
            alt="Adobe Illustrator"
            src="/ai.svg"
          />
          <img
            className="m-2"
            width="40px"
            title="Adobe Photoshop"
            alt="Adobe Photoshop"
            src="/ps.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="TypeScript"
            alt="TypeScript"
            src="/ts.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Next.js"
            alt="Next.js"
            src="/nextjs.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="React"
            alt="React"
            src="/react.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Redux"
            alt="Redux"
            src="/redux.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="SQL Server"
            alt="SQL Server"
            src="/sqllocal.svg"
          />
          <img
            className="m-2"
            width="40px"
            title="C Sharp"
            alt="C#"
            src="/csharp.svg"
          />
          <img
            className="m-2"
            width="50px"
            title="Dot Net"
            alt="DotNet"
            src="/dotnet.svg"
          />
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">
            APPartment: Home Management System
          </h3>
          <div>
            <a
              href="https://github.com/nikolagsiderov/APPartment"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Visit Source Code
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-4">
          At start, Entity Framework Core with code first approach was used,
          then I migrated to database first, later on EF Core was entirely
          removed and I developed my{" "}
          <span className="font-semibold text-brand">
            own custom object-relational mapping framework
          </span>
          .
        </p>
        <p className="font-light leading-7 mb-4">
          The project was also initially started with a MVC architecture, with
          all the business logic implemented in the controller levels. After
          which, a new Web API project was initialized with a proper business
          layer where the business logic was migrated. The MVC project send
          requests to the API and retrieved responses in the form of view-models
          to display in its views.
        </p>
        <p className="font-light leading-7 mb-4">
          This was incomplete and the MVC architecture was redundant, having to
          support its controllers (only to make calls to the API). I implemented
          a new web client, under the hood of{" "}
          <span className="font-semibold text-brand">Blazor</span>, using latest
          (up-to-that-point) .NET 5.
        </p>
        <div className="mb-4">
          <div className="relative w-[160px]">
            <div className="w-[160px] absolute inset-0 bg-white/70 rounded-lg blur-sm"></div>
            <img
              className="relative rounded-lg cursor-pointer"
              onClick={() => setVidTwo((pv) => !pv)}
              src={"./APPartment app demo.gif"}
              alt="my-gif"
            />
          </div>
          {vidTwo && (
            <video
              preload="metadata"
              className="mt-4 rounded-lg"
              width="100%"
              height="auto"
              controls
            >
              <source src="/APPartment demo.mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-start">
          <img
            className="m-2"
            width="40px"
            title="C Sharp"
            alt="C#"
            src="/csharp.svg"
          />
          <img
            className="m-2"
            width="50px"
            title="Dot Net"
            alt="DotNet"
            src="/dotnet.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="SQL Server"
            alt="SQL Server"
            src="/sqllocal.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Bootstrap"
            alt="Bootstrap"
            src="/bootstrap.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="JavaScript"
            alt="JavaScript"
            src="/js.svg"
          />
          <img
            className="ml-2"
            width="40px"
            title="HTML"
            alt="HTML"
            src="/html.svg"
          />
          <img
            width="40px"
            title="CSS"
            alt="CSS"
            src="/css.svg"
          />
        </div>
      </Card>
    </section>
  );
}
