import AdvizotMeetingsPhoto from "../assets/img/advizot-meetings-screenshot.png";
import MonsterGuidePhoto from "../assets/img/monster-guide-screenshot.png";
import LetsRollPhoto from "../assets/img/lets-roll-screenshot.png";
import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <Project
        title="Advizot Meetings"
        projectPhoto={AdvizotMeetingsPhoto}
        projectExplanation="This is an explanation of this very cool project repeated many times. This is an explanation of this very cool project repeated many times. This is an explanation of this very cool project repeated many times. This is an explanation of this very cool project repeated many times."
        githubLink="https://github.com/JosephMcGreene/advizot-meetings"
        liveLink="Not Yet"
        // liveLink="https://advizot-meetings.up.railway.app/"
      />
      <Project
        title="D&D Monster Guide"
        projectPhoto={MonsterGuidePhoto}
        projectExplanation="Gone are the long hours of discerning what monsters your party will face next Sunday afternoon. Why spend an entire evening when you can now spend 30 minutes? This D&D Monster Guide allows you to spend your time doing more important things, like practicing your NPC voices."
        githubLink="https://github.com/JosephMcGreene/react-and-dragons"
        liveLink="https://josephmcgreene.github.io/react-and-dragons/"
      />
      <Project
        title="Let's Roll!"
        projectPhoto={LetsRollPhoto}
        projectExplanation="Early on in my web development journey, I had the thought that I could create a dice roller for convenience during my Dungeons & Dragons sessions. The result is Let's Roll, the most convenient dice roller I've come across, even to this day."
        githubLink="https://github.com/JosephMcGreene/lets-roll"
        liveLink="https://josephmcgreene.github.io/lets-roll/"
      />
    </section>
  );
}
