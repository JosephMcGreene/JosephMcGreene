//Assets
import advizotMeetingsPhoto from "../assets/img/advizot-meetings-screenshot.png";
import monsterGuidePhoto from "../assets/img/monster-guide-screenshot.png";
import dungeonsAndRandosPhoto from "../assets/img/dungeons-and-randos-screenshot.png";
import letsRollPhoto from "../assets/img/lets-roll-screenshot.png";
//External
import { useInView } from "react-intersection-observer";
//Components
import Project from "./Project";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="projectsSection" className="projects">
      <h3
        ref={ref}
        className={
          inView
            ? "section-heading heading-hidden heading-shown"
            : "section-heading heading-hidden"
        }
        id="project1"
      >
        Projects
      </h3>

      <Project
        title="Advizot Meetings"
        projectPhoto={advizotMeetingsPhoto}
        altText="Advizot Meetings Screenshot"
        projectExplanation="Advizot, LLC's monthly member meetings currently use an unwieldy paper sign-in page, so my job is to design and implement a React- and Express-powered meeting app that saves its users' form data to a MongoDB collection and enables a seamless user experience."
        techStack="React, SCSS, Node/Express, MongoDB"
        githubLink="https://github.com/JosephMcGreene/advizot-meetings"
        isAdvizotMeetings={true}
        liveLink={null}
      />
      <Project
        title="D&D Monster Guide"
        projectPhoto={monsterGuidePhoto}
        altText="Monster Guide Screenshot"
        projectExplanation="Why spend an entire evening deciding what monsters your party will face when you can now spend 30 minutes? This D&D Monster Guide's slick filtering logic, fully optimized fetching of monster data, and easy-to-read UI allows a DM to spend their time doing more important things, like practicing NPC voices."
        techStack="React, SCSS, D&D 5e REST API"
        githubLink="https://github.com/JosephMcGreene/react-and-dragons"
        liveLink="https://josephmcgreene.github.io/react-and-dragons/"
      />
      <Project
        title="Dungeons & Randos"
        projectPhoto={dungeonsAndRandosPhoto}
        altText="Dungeons & Randos Screenshot"
        projectExplanation="Sometimes you don't want to spend 4 hours dreaming up the perfect character for your next Dungeons & Dragons adventure. That's why I created an app that will generate almost every part of a character for you."
        techStack="React, TypeScript, SCSS, D&D 5e REST API"
        githubLink="https://github.com/JosephMcGreene/dungeons-and-randos"
        liveLink="https://josephmcgreene.github.io/dungeons-and-randos/"
      />
      <Project
        title="Let's Roll!"
        projectPhoto={letsRollPhoto}
        altText="Let's Roll Screenshot"
        projectExplanation="Finding an unopinionated dice rolling app is surprisingly difficult. Sometimes, I just want to roll some dice and get a result. That is why I coded up a couple of JavaScript object classes, set some HTML event listeners, and started rolling dice to my heart's content. To this day, this is the only dice rolling app I know of that doesn't care what you do with your dice rolls."
        techStack="HTML, CSS, vanilla OO JavaScript"
        githubLink="https://github.com/JosephMcGreene/lets-roll"
        liveLink="https://josephmcgreene.github.io/lets-roll/"
      />
    </section>
  );
}
