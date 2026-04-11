import { calculateAge, getProfileStatus } from "../lib/profileStatus";

export default function AboutPage() {
  const birthDate = new Date("2003-08-25");
  const today = new Date();
  const age = calculateAge(birthDate, today);
  const { location, occupation } = getProfileStatus(today);

  return (
    <section className="viewer">
      <h2>about</h2>
      <p>Hi, I'm Laura!</p>
      <p>
        I'm a <span className={"age"}>{age}-year-old</span> software engineer
        currently based in {location}. I made this website to share my projects
        and thoughts into the void. I'm a big fan of making things, whether it's
        software or art, and I'm an even bigger fan of sharing those things with
        others. I hope you find something here that interests you, and if you
        do, feel free to reach out and say hi!
      </p>
      <p>In my day-to-day, {occupation}. </p>
    </section>
  );
}
