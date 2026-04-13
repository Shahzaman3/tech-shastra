import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    q: "What is TechShastra?",
    a: "TechShastra is the annual technical fest of Netaji Subhas University — a platform for students to showcase skills, creativity, and innovation across multiple domains of technology through competitions and events.",
  },
  {
    q: "Who can participate?",
    a: "Any student currently enrolled in a recognised college or university can participate. Students from all years and branches are welcome.",
  },
  {
    q: "What is the team size?",
    a: "Teams must have a minimum of 3 members and a maximum of 5 members. For solo events, solo participation is allowed — check the individual event page to see if it qualifies.",
  },
  {
    q: "Do I need prior experience?",
    a: "Not at all! TechShastra is open to participants at all skill levels — from complete beginners to seasoned coders. Every event has beginner-friendly categories.",
  },
  {
    q: "Is there any registration fee?",
    a: "Yes, the registration fee is ₹500 per team. This covers access to all events, meals during the fest, and your participation kit.",
  },
  {
    q: "What should I bring to the event?",
    a: "Bring your college ID card, a laptop (if needed for your event), any required materials, and most importantly — your enthusiasm and competitive spirit!",
  },
  {
    q: "Will food and accommodation be provided?",
    a: "Food arrangements will be available on campus during the fest. Accommodation details will be communicated to outstation participants upon registration confirmation.",
  },
  {
    q: "What are the judging criteria?",
    a: "Judging criteria differ by event but generally include innovation, technical complexity, presentation quality, and real-world impact. Detailed rubrics are shared with registered participants.",
  },
  {
    q: "Can I work on an existing project?",
    a: "For most competition events, projects should be started fresh during the event. However, research-based events may allow prior work. Check individual event guidelines.",
  },
  {
    q: "What do winners get?",
    a: "Winners receive cash prizes, trophies, goodies, certificates, and serious bragging rights! Every participant receives a participation certificate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-heading">
        <div className="faq-heading-row">
          <img
            src="/greyimg.webp"
            alt="Robot Left"
            className="faq-heading-robot faq-heading-robot-left"
          />
          <h2>FAQs</h2>
          <img
            src="/img-prime.webp"
            alt="Robot Right"
            className="faq-heading-robot faq-heading-robot-right"
          />
        </div>
        <div className="faq-divider" />
        <p>Everything you need to know about TechShastra</p>
      </div>

      <ul className="faq-list">
        {faqs.map((item, i) => (
          <li key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
            <button className="faq-question" onClick={() => toggle(i)}>
              <span className="faq-question-text">{item.q}</span>
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
