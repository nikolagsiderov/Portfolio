import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Education({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("education");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="education">
      <h2 className="font-bold text-3xl mb-2">Education</h2>

      <Card>
        <h3 className="font-bold text-2xl mb-4">Software University, SoftUni</h3>
        <p className="font-light leading-7 mb-4">
          Successfully completed several courses in the path of .NET, C#, HTML & CSS,
          object-oriented programming, SQL, Git and more.
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Certifications</h3>
        <p className="font-light leading-7 mb-6">
          Expect soon...
        </p>
      </Card>
    </section>
  );
}
