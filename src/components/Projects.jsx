import AdvizotMeetingsPhoto from "../assets/img/advizot-meetings-screenshot.png";
import MonsterGuidePhoto from "../assets/img/monster-guide-screenshot.png";
import LetsRollPhoto from "../assets/img/lets-roll-screenshot.png";
import Project from "./Project";

export default function Projects() {
  return (
    <section id="projectsSection">
      <h3 className="section-heading">Projects</h3>
      <Project
        title="Advizot Meetings"
        projectPhoto={AdvizotMeetingsPhoto}
        projectExplanation="Advizot, LLC's monthly member meetings currently use an unwieldy paper sign-in page, so my job is to design and implement a React- and Express-powered meeting app that saves its users' form data to a MongoDB collection and enables a seamless user experience."
        techStack="React, SCSS, Node/Express, MongoDB"
        githubLink="https://github.com/JosephMcGreene/advizot-meetings"
        liveLink="Not Yet"
        // liveLink="https://advizot-meetings.up.railway.app/"
      />
      <Project
        title="Dungeons & Dragons Monster Guide"
        projectPhoto={MonsterGuidePhoto}
        projectExplanation="Why spend an entire evening deciding what monsters your party will face when you can now spend 30 minutes? This D&D Monster Guide's slick filtering logic, fully optimized fetching of monster data, and easy-to-read UI allows a DM to spend their time doing more important things, like practicing NPC voices."
        techStack="React, SCSS, D&D 5e REST API"
        githubLink="https://github.com/JosephMcGreene/react-and-dragons"
        liveLink="https://josephmcgreene.github.io/react-and-dragons/"
      />
      <Project
        title="Let's Roll!"
        projectPhoto={LetsRollPhoto}
        projectExplanation="Finding an unopinionated dice rolling app is surprisingly difficult. Sometimes, I just want to roll some dice and get a result. That is why I coded up a couple of JavaScript object classes, set some HTML event listeners, and started rolling dice to my heart's content. To this day, this is the only dice rolling app I know of that doesn't care what you do with your dice rolls."
        techStack="HTML, CSS, vanilla OO JavaScript"
        githubLink="https://github.com/JosephMcGreene/lets-roll"
        liveLink="https://josephmcgreene.github.io/lets-roll/"
      />
    </section>
  );
}
