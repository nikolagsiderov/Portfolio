import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Work({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("work");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="work">
      <h2 className="font-bold text-3xl mb-2">Work</h2>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Full Stack Software Developer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="https://www.tsd.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            TSD Software
          </a>{" "}
          • Full-Time • Dec 2021 - Now
        </p>
        <p className="font-light mb-6 text-white/80">Remote</p>
        {/* CONTENT */}
        <p className="font-light leading-7 mb-4">
          Improving and maintaining an American-based client CRM system in the
          sales industry using integration with Salesforce and Microsoft
          Dynamics 365.
        </p>
        <p className="font-light leading-7 mb-4">
          Work consists of Dynamics 365 and Salesforce custom development,
          continuous integration and delivery, Azure cloud administration, SSL
          certifications management and web platform development using .NET,
          JavaScript, Azure SQL Databases & Entity Framework Core.
        </p>
        <p className="font-light leading-7">
          Development of a closed company platform - BPM software system
          designed to include CRM, MIS & any further custom solutions required
          from the business.
        </p>
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
            title="JavaScript"
            alt="JavaScript"
            src="/js.svg"
          />
          <img
            className="m-2"
            width="80px"
            title="Azure"
            alt="Azure"
            src="/azure.svg"
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
            width="30px"
            title="Microsoft Dynamics 365"
            alt="Microsoft Dynamics 365"
            src="/dynamics 365.svg"
          />
          <img
            className="m-2"
            width="50px"
            title="Salesforce"
            alt="Salesforce"
            src="/salesforce.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="Azure SQL Databases"
            alt="Azure SQL Databases"
            src="/sql.svg"
          />
          <img
            className="m-2"
            width="40px"
            title="Entity Franework Core"
            alt="Entity Franework Core"
            src="/database.svg"
          />
        </div>
      </Card>

      <Card>
        {/* TITLE */}
        <h3 className="font-bold text-2xl">Full Stack Software Developer</h3>
        {/* INFO */}
        <p className="font-light text-white/80">
          <a
            href="https://www.tsd.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            TSD Services
          </a>{" "}
          • Full-Time • Jun 2019 - Dec 2020
        </p>
        <p className="font-light mb-6 text-white/80">Plovdiv, Bulgaria</p>
        {/* CONTENT */}

        <p className="font-light leading-7 mb-4">
          Building, maintaining and CI/CD on various internal company and client
          projects.
        </p>
        <p className="font-light leading-7 mb-4">
          Development of a closed company platform - BPM software system
          designed to include CRM, MIS & any further custom solutions required
          from the business.
        </p>
        <p className="font-light leading-7">
          Working with .NET Framework, Azure, Azure AD B2C, ASP.NET MVC, SQL
          Server, JavaScript, JSON, jQuery, Microsoft Graph.
        </p>
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
            width="40px"
            title="Git"
            alt="Git"
            src="/git.svg"
          />
          <img
            className="m-2"
            width="80px"
            title="Azure"
            alt="Azure"
            src="/azure.svg"
          />
          <img
            className="m-2"
            width="40px"
            title="ASP.NET"
            alt="ASP.NET"
            src="/aspnet.svg"
          />
          <img
            className="m-2"
            width="30px"
            title="JavaScript"
            alt="JavaScript"
            src="/js.svg"
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
            title="JSON"
            alt="JSON"
            src="/json.svg"
          />
          <img
            className="mr-2"
            width="70px"
            title="jQuery"
            alt="jQuery"
            src="/jquery.svg"
          />
        </div>
      </Card>
    </section>
  );
}
