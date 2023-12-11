import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Contact from "./Contact";
import Tech from "./Tech";

export default function Misc({
  setSection,
}: {
  setSection: Dispatch<SetStateAction<string>>;
}) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("misc");
  }, [inView, setSection]);

  return (
    <section ref={ref} id="misc">
      <h2 className="font-bold text-3xl mb-2">Misc</h2>

      <Contact />
      <Tech />
    </section>
  );
}
