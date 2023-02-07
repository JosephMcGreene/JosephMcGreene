import { useRef, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Tooltip from "./Tooltip";

export default function About() {
  const ref = useRef();
  const { ref: inViewRef, inView } = useInView();

  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  return (
    <section id="aboutSection" className="about">
      <h3
        ref={setRefs}
        className={
          inView
            ? "tooltip-parent section-heading heading-hidden heading-shown"
            : "tooltip-parent section-heading heading-hidden"
        }
      >
        <Tooltip text='"I think that inside every adult is the heart of a child. We just gradually convince ourselves that we have to act more like adults." -Shigeru Miyamoto' />
        About Me
      </h3>

      <details
        ref={setRefs}
        className={
          inView
            ? "about-expander about-hidden about-shown"
            : " about-expander about-hidden"
        }
      >
        <summary className="expander-label">
          TLDR: I'm a Virtue Ethicist
        </summary>
        <article className="about-card">
          <p className="about-content">
            When I received my first black belt in TaeKwon Do, I began teaching
            my own classes, and it was there that I first truly began to
            understand the purposes behind the martial art's five tenets:
            courtesy, integrity, perseverance, self control, and indomitable
            spirit. Before I had a need to model them for students, they had
            taken a back seat to the more tangible lessons about high kicks and
            breaking boards. But when I knew there were students revering my
            accomplishments, as I had revered black belts as I moved up through
            the ranks, something switched. TaeKwon became less about kicks and
            punches and more about values.
          </p>
          <p className="about-content">
            Similarly, when I became a father in January 2020, I found myself
            contemplating, re-evaulating, and more fully understanding the
            importance of my own personal values. I've since come to a set of
            personal values that I hold in highest regard:
          </p>
          <ul className="values-list">
            <li className="values-item">Self Love</li>
            <li className="values-item">Gratitude</li>
            <li className="values-item">Courage</li>
            <li className="values-item">Fun</li>
          </ul>
          <p className="about-content">
            To be clear, these are <em>not</em> values that I believe I espouse
            particularly well. In fact, I would describe them as aspiratory.
            These are values I respect and <em>wish</em> to espouse, values that
            I hope to one day learn and adopt. Sometimes it feels like the only
            reason I like the idea of Courage is because I also love The Legend
            of Zelda.
          </p>
          <p className="about-content">
            That said, the idea that I aspire to these virutes speaks to a fifth
            virtue, one that I do believe I have learned and can model to my
            son:
          </p>
          <ul className="values-list">
            <li className="values-item">Personal Growth</li>
          </ul>
          <p className="about-content">
            I am good at and love learning. I want to continuously improve
            myself and my relationships, identify personal flaws to work on, and
            to grow to model the values that I hold most dear.
          </p>
        </article>
      </details>
    </section>
  );
}
