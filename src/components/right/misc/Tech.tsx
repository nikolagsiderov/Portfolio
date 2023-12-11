import Card from "../../utilities/Card";

export default function Tech() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-4">Sports, Hobbies, etc.</h3>
      <p className="font-light leading-7">
        I attend and compete in sports events, such as short and long-distance
        running, from 5K do ultra-marathons.
      </p>
      <p className="font-light leading-7 mb-4">
        I regularly go hiking in the mountain with friends.
      </p>
      <p className="font-light leading-7 mb-4">
        I enjoy reading biography and history books when I have the time.
      </p>
      <p className="font-light leading-7">
        I am a former professional{" "}
        <span className="font-semibold text-white">football freestyler</span>{" "}
        with numerous participations in public events and tournaments.
      </p>
      <p className="font-light leading-7 mb-4">
        In 2016, I won the Cartoon Network Academy and got the opportunity to
        travel to London, England to visit{" "}
        <span className="font-semibold text-white">
          Arsenal&apos;s youth training center
        </span>
        , where we did a training session with{" "}
        <span className="font-semibold text-white">Lucas Podolski</span>.
      </p>
    </Card>
  );
}
