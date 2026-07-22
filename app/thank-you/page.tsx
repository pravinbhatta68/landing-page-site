import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, Play, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "You're In! | Digital Pravin", robots: { index: false, follow: false } };

export default function ThankYou() {
  return (
    <main className="thank-page">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <section className="thank-hero container narrow center">
        <h1>🎉 You&apos;re In!</h1>
        <p className="thank-lead">Your Free AI Marketing Consultation Request Has Been Received.</p>
        <p>There&apos;s just one important step before your consultation.</p>
      </section>

      <section className="thank-content container">
        <div className="video-copy">
          <span className="section-kicker"><Play size={14} /> Watch this short video (2–3 minutes)</span>
          <h2>Prepare for a more valuable conversation.</h2>
          <p>In this video, you&apos;ll learn:</p>
          <ul className="check-list">
            {["What will happen during your consultation", "How to get the most value from the session", "What information to prepare beforehand", "How we'll create your customized AI marketing plan"].map(item => <li key={item}><CheckCircle2 size={18} /> {item}</li>)}
          </ul>
          <p className="callout"><Sparkles size={20} /> Please watch the video before your consultation. It will help you get better results from our conversation.</p>
        </div>
        <div className="video-placeholder" aria-label="Placeholder consultation preparation video">
          <button className="play-button" type="button" aria-label="Play placeholder video"><Play size={30} fill="currentColor" /></button>
          <span>Consultation Preparation Video</span>
          <small>Placeholder — replace with your video embed</small>
        </div>
      </section>

      <section className="whatsapp-card container narrow center">
        <div className="whatsapp-icon"><MessageCircle size={28} /></div>
        <h2>Confirm Your Booking on WhatsApp</h2>
        <p>To make communication easier, send us a quick WhatsApp message after watching the video.</p>
        <div className="mini-benefits"><span>Confirm your consultation</span><span>Ask questions before the call</span><span>Receive important updates</span></div>
        <a className="whatsapp-button" href="https://wa.me/15551234567?text=Hi%20Digital%20Pravin%2C%20I%27d%20like%20to%20confirm%20my%20AI%20marketing%20consultation." target="_blank" rel="noreferrer"><MessageCircle size={20} /> Message on WhatsApp</a>
        <small className="placeholder-note">Placeholder number — update before launch.</small>
      </section>

      <section className="section next-section">
        <div className="container">
          <div className="section-heading center"><span className="section-kicker">What happens next?</span><h2>Three simple steps</h2></div>
          <div className="steps-grid compact">
            {[["01", "Watch the video", "Watch the short video above."], ["02", "Confirm on WhatsApp", "Send us a message to confirm your booking."], ["03", "Join the consultation", "Receive your customized AI marketing plan for your business."]].map(([n,t,d]) => <article className="step-card" key={n}><span className="step-number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}
          </div>
          <p className="closing-copy center">We look forward to speaking with you and helping you discover practical ways to generate more qualified leads and grow your business with AI.</p>
        </div>
      </section>
    </main>
  );
}
