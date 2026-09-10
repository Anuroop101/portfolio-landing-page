import React from 'react';
import styles from './ValueProposition.module.css';

const tableData = [
  { build: "Custom homepage", show: "A prospect understands what your studio does and the kind of work you take on within the first few moments of visiting." },
  { build: "Portfolio / project pages", show: "Your best projects stop disappearing into an Instagram feed. A prospect can open a project, see the finished work, understand the brief and explore your approach in one place." },
  { build: "Project case studies", show: "Instead of sending 15 WhatsApp photos and explaining the project yourself, you can send one link that tells the story for you." },
  { build: "Studio / About page", show: "A referral who has never met you can learn who is behind the studio, what you believe in and why your work looks the way it does before deciding whether to contact you." },
  { build: "Services page", show: "Prospects can work out whether you handle the kind of project they're considering without having to message you first." },
  { build: "Process / Approach page", show: "A potential client knows what happens after they enquire, what working with you involves and what they can expect before the first conversation." },
  { build: "Testimonials", show: "Someone considering spending a significant amount on their home doesn't have to take your claims at face value—they can see what previous clients actually said about working with you." },
  { build: "Press / awards", show: "Your recognition and past work are visible while a prospect is evaluating you, instead of being buried in an Instagram highlight they may never open." },
  { build: "Enquiry form", show: "Interested prospects have an obvious next step instead of having to figure out whether they should DM, WhatsApp or email you." },
  { build: "Qualifying enquiry form", show: "You can learn about the project before the conversation starts, so fewer enquiries begin with “Hi, how much do you charge?”" },
  { build: "Mobile responsive design", show: "Someone researching your studio from their phone can explore your projects and enquire without fighting a broken or awkward layout." },
  { build: "Basic SEO", show: "When someone searches for your studio by name, they have somewhere useful to land instead of finding an empty result or an outdated page." },
  { build: "Fast performance", show: "A prospect opening your site doesn't sit staring at a loading screen while your best project photography struggles to appear." },
  { build: "Analytics", show: "You can see whether people are actually reaching your projects and enquiry page instead of guessing whether the website is doing anything." },
  { build: "Domain + deployment", show: "You walk away with one simple URL you can put everywhere—Instagram, email, proposals, Google and WhatsApp." },
  { build: "QA", show: "You don't discover after sending the site to a client that the enquiry form doesn't work on their phone or a project link is broken." },
  { build: "Copywriting", show: "You don't have to stare at a blank document wondering what the hell to write—we turn your existing work and information into something a prospect can actually understand." },
  { build: "Portfolio curation", show: "Instead of showing everything you've ever done, the website puts the projects that best represent the studio in front of the people evaluating you." },
  { build: "Custom visual design", show: "Your website stops looking like a generic template and starts feeling consistent with the spaces you're asking people to trust you to design." }
];

export default function ValueProposition() {
  return (
    <section className={styles.valueSection}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <span className="editorial-label">The Deliverables</span>
          <h2 className={styles.headline}>what we build vs <mark>what you get</mark></h2>
        </header>

        <div className={styles.tableContainer}>
          {tableData.map((row, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.buildCol}>{row.build}</div>
              <div className={styles.showCol}>{row.show}</div>
            </div>
          ))}
        </div>

        <div className={styles.equationSection}>
          <div className={styles.equationHeader}>What changes for you</div>
          
          <div className={styles.equationList}>
            <div className={styles.equationItem}>
              <span>Your work becomes easy to evaluate.</span>
            </div>
            <div className={styles.plusSign}>+</div>
            <div className={styles.equationItem}>
              <span>Your studio gets explained before you have to.</span>
            </div>
            <div className={styles.plusSign}>+</div>
            <div className={styles.equationItem}>
              <span>Your referrals have somewhere to go.</span>
            </div>
            <div className={styles.plusSign}>+</div>
            <div className={styles.equationItem}>
              <span>Your enquiries come in pre-sold and ready to buy.</span>
            </div>
            <div className={styles.plusSign}>+</div>
            <div className={styles.equationItem}>
              <span>Your online presentation finally catches up with the work.</span>
            </div>
          </div>

          <div className={styles.equationResult}>
            <div className={styles.equalsSign}>=</div>
            <div className={styles.resultText}>Therefore, More Money</div>
          </div>
        </div>

      </div>
    </section>
  );
}
