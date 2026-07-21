import type { Metadata } from "next";
import { Lightbulb, CheckCircle2, Sparkles, Target, TrendingUp, WandSparkles } from "lucide-react";
import { CTAForm } from "@/components/CTAForm";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Free AI Marketing Consultation | Digital Pravin",
  description: "Get a customized AI marketing plan designed to help your business attract qualified leads and improve sales.",
};

const benefits = [
  { icon: WandSparkles, text: "Receive a customized AI marketing plan for your business." },
  { icon: Target, text: "Discover practical ways to generate more qualified leads." },
  { icon: TrendingUp, text: "Identify opportunities to improve your current marketing." },
  { icon: Sparkles, text: "Learn how AI can support your business growth." },
  { icon: CheckCircle2, text: "Get clear next steps tailored to your business." },
];

const steps = [
  ["01", "Complete the form", "Book your free consultation by completing the form below."],
  ["02", "Join your consultation", "Join your one-to-one consultation and discuss your business goals and current marketing challenges."],
  ["03", "Get your strategy", "Receive a customized AI marketing plan with recommendations tailored to your business."],
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <Header />
        <div className="hero container">
          <div className="eyebrow"><Sparkles size={15} /> Free one-to-one strategy session</div>
          <h1>Get a Free AI Marketing Consultation and Receive a <span>Customized AI Marketing Plan</span> for Your Business</h1>
          <p className="hero-lead">Find out how your business can generate more qualified leads and improve sales with a customized AI marketing strategy built for your business.</p>
          <a className="primary-button" href="#consultation-form">Book Free Consultation <span aria-hidden="true">→</span></a>
          <div className="trust-row" aria-label="Consultation highlights">
            <span><CheckCircle2 size={17} /> Book the Call</span>
            <span><CheckCircle2 size={17} /> One-to-One Consultation</span>
            <span><CheckCircle2 size={17} /> Customized Strategy</span>
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container narrow center">
          <span className="section-kicker">Built for growing businesses</span>
          <h2>Marketing should create momentum—not more confusion.</h2>
          <p>If you&apos;re a small or medium business owner struggling to sell your products or services, this free consultation is designed for you.</p>
          <p>You&apos;ll receive a customized AI marketing plan that helps you identify practical opportunities to improve your marketing and attract more customers.</p>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-kicker">Your consultation</span>
            <h2>How You Benefit From This Consultation</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, text }, index) => (
              <article className={`benefit-card ${index === 0 ? "featured" : ""}`} key={text}>
                <div className="icon-box"><Icon size={24} /></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading center">
            <span className="section-kicker">Simple and focused</span>
            <h2>Consultation Process</h2>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, text], index) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                {index < 2 && <span className="step-arrow" aria-hidden="true">→</span>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section form-section" id="consultation-form">
        <div className="form-glow" />
        <div className="container form-layout">
          <div className="form-copy">
            <div className="eyebrow"><Lightbulb size={15} /> Free personalized strategy</div>
            <h2>Let&apos;s Build Your AI Marketing Plan.</h2>
            <p>Tell us a little about your business. Your answers will help make the consultation practical, focused, and relevant to your goals.</p>
            <ul>
              <li><CheckCircle2 size={18} /> One-to-one consultation</li>
              <li><CheckCircle2 size={18} /> Customized business strategy</li>
              <li><CheckCircle2 size={18} /> Clear, practical next steps</li>
            </ul>
          </div>
          <CTAForm />
        </div>
      </section>
    </main>
  );
}
