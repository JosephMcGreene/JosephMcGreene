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
        projectExplanation="Advizot, LLC's monthly member meetings currently use an unwieldy paper sign-in page, so Advizot's president asked me to design and implement at an app that does the same job as the paper sign-in with advanced features and the ability to display meeting information to a central projection."
        techStack="React, SCSS, Node/Express, MongoDB"
        githubLink="https://github.com/JosephMcGreene/advizot-meetings"
        liveLink="Not Yet"
        // liveLink="https://advizot-meetings.up.railway.app/"
      />
      <Project
        title="D&D Monster Guide"
        projectPhoto={MonsterGuidePhoto}
        projectExplanation="Gone are the long hours of discerning what monsters your party will face next Sunday afternoon. Why spend an entire evening when you can now spend 30 minutes? This D&D Monster Guide allows you to spend your time doing more important things, like practicing your NPC voices."
        techStack="React, SCSS, D&D 5e REST API"
        githubLink="https://github.com/JosephMcGreene/react-and-dragons"
        liveLink="https://josephmcgreene.github.io/react-and-dragons/"
      />
      <Project
        title="Let's Roll!"
        projectPhoto={LetsRollPhoto}
        projectExplanation="Early on in my web development journey, I had the thought that I could create a dice roller for convenience during my Dungeons & Dragons sessions. The result is Let's Roll, the most convenient dice roller I've come across, even to this day."
        techStack="HTML, CSS, vanilla OO JavaScript"
        githubLink="https://github.com/JosephMcGreene/lets-roll"
        liveLink="https://josephmcgreene.github.io/lets-roll/"
      />
    </section>
  );
}
