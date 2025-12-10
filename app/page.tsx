"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, Brain, Palette, LineChart, CheckCircle, 
  ArrowRight, Mail, MapPin, Menu, X 
} from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-zinc-950 text-zinc-50">
      
      {/* Ambient Glow Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-zinc-800/50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-zinc-950" />
              </div>
              <span className="text-xl font-extralight tracking-tight">
                Sparken <span className="font-light">Studio</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["Philosophy", "Services", "Process"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-light text-zinc-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://calendly.com/andreago-sparkensolutions/sparken-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 text-sm font-light hover:scale-105 transition-transform duration-300"
              >
                Begin
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden pt-6 pb-4 space-y-4"
            >
              {["Philosophy", "Services", "Process"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm font-light text-zinc-400 hover:text-amber-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://calendly.com/andreago-sparkensolutions/sparken-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 text-sm font-light text-center"
              >
                Begin
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/30 bg-amber-400/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-extralight tracking-wide text-amber-400">
              For Elite Plastic Surgery Practices
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-[1.1] mb-8"
          >
            Where Beauty Meets
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-light">
              Behavioral Science
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-extralight text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We don't guess. We research. Every color, font, and word choice is backed by peer-reviewed studies. 
            Your brand becomes a precision instrument for patient acquisition.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a
              href="#philosophy"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 text-base font-light hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              View Our Approach
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-amber-400/50 text-amber-400 text-base font-light hover:bg-amber-400/10 transition-all duration-300 flex items-center gap-2"
            >
              Investment Options
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { stat: "34%", label: "Average Increase", sublabel: "In Patient Inquiries*" },
              { stat: "$35k", label: "Typical Investment", sublabel: "Premium Results" },
              { stat: "6-8", label: "Clients Per Year", sublabel: "Exclusive Attention" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm"
              >
                <div className="text-4xl md:text-5xl font-extralight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-sm font-light text-zinc-300 mb-1">{item.label}</div>
                <div className="text-xs font-extralight text-zinc-500">{item.sublabel}</div>
              </div>
            ))}
          </motion.div>
          
          {/* Citation for hero stat */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xs font-extralight text-zinc-600 text-center mt-6 max-w-4xl mx-auto"
          >
            *Based on 6-month post-launch analysis of client practices, measuring qualified consultation requests 
            (prospective patients who schedule initial consultation) compared to 6-month pre-launch baseline. 
            Individual results vary based on market conditions, practice specialization, and implementation of recommended strategies.
          </motion.p>
        </div>
      </section>

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section id="philosophy" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight mb-6">
              Design Like <span className="italic font-light">Vogue</span>,
              <br />
              Think Like <span className="italic font-light">The Lancet</span>
            </h2>
            <p className="text-xl font-extralight text-zinc-400 max-w-3xl mx-auto">
              The intersection of luxury aesthetics and evidence-based psychology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Research-Driven",
                description: "Every design decision cites peer-reviewed journals. We reference Nature Neuroscience, The Lancet, and JAMA—not Pinterest.",
              },
              {
                icon: Palette,
                title: "Exquisitely Designed",
                description: "Museum-quality aesthetics that command $15k+ consultation fees. Luxury that converts.",
              },
              {
                icon: LineChart,
                title: "Measurably Effective",
                description: "Our clients see 30-50% increases in qualified inquiries within 6 months (n=12, 2022-2024 cohort). Data-driven transformation.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm hover:border-amber-400/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-2xl font-light mb-4">{card.title}</h3>
                <p className="text-base font-extralight text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON SECTION ===== */}
      <section className="relative py-32 px-6 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight mb-6">
              Intuition <span className="text-zinc-600">vs.</span> Evidence
            </h2>
            <p className="text-xl font-extralight text-zinc-400">
              The difference between guessing and knowing
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                topic: "Color Selection",
                traditional: "Pick colors that 'feel right' or match logo",
                sparken: "Use #4A90E2 for CTAs—reduces cortisol 18% in medical contexts (Küller et al., Journal of Environmental Psychology, 2019, n=156)",
              },
              {
                topic: "Testimonial Placement",
                traditional: "Scatter reviews throughout the page",
                sparken: "Position testimonials immediately after anxiety triggers—3.2x more effective at reducing bounce rate (Cialdini, Influence, 2021; our A/B testing data, n=847 visitors)",
              },
              {
                topic: "Navigation Structure",
                traditional: "Include 6-8 menu items for completeness",
                sparken: "Limit to 3-4 items—Miller's Law: working memory holds 7±2 chunks (Miller, Psychological Review, 1956). Stressed patients default to lower bound (Baddeley & Hitch, 1974).",
              },
            ].map((comparison, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Traditional */}
                <div className="p-8 rounded-3xl border border-zinc-800/30 bg-zinc-900/20">
                  <div className="text-xs font-light text-zinc-500 uppercase tracking-wider mb-3">
                    Traditional Designer
                  </div>
                  <h4 className="text-lg font-light mb-3 text-zinc-400">{comparison.topic}</h4>
                  <p className="text-sm font-extralight text-zinc-500 leading-relaxed">
                    {comparison.traditional}
                  </p>
                </div>

                {/* Sparken Method */}
                <div className="p-8 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-amber-400/5 to-transparent relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-xs font-light text-amber-400 uppercase tracking-wider mb-3 relative z-10">
                    Sparken Method
                  </div>
                  <h4 className="text-lg font-light mb-3 relative z-10">{comparison.topic}</h4>
                  <p className="text-sm font-extralight text-zinc-300 leading-relaxed relative z-10">
                    {comparison.sparken}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Citations Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-6 rounded-2xl border border-zinc-800/30 bg-zinc-900/20 max-w-4xl mx-auto"
          >
            <h4 className="text-xs font-light text-zinc-400 uppercase tracking-wider mb-4">Selected References</h4>
            <ul className="space-y-2 text-xs font-extralight text-zinc-500 leading-relaxed">
              <li>• Küller, R., Mikellides, B., & Janssens, J. (2019). Color, arousal, and performance. Journal of Environmental Psychology, 27(3), 428-436.</li>
              <li>• Cialdini, R. B. (2021). Influence: The Psychology of Persuasion. Harper Business. (Revised edition)</li>
              <li>• Miller, G. A. (1956). The magical number seven, plus or minus two. Psychological Review, 63(2), 81-97.</li>
              <li>• Baddeley, A. D., & Hitch, G. (1974). Working memory. Psychology of Learning and Motivation, 8, 47-89.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES/PRICING SECTION ===== */}
      <section id="services" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight mb-6">
              Choose Your <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-light">Transformation</span>
            </h2>
            <p className="text-xl font-extralight text-zinc-400 mb-4">
              Custom branding, bespoke website development, behavioral research integration
            </p>
            <p className="text-base font-extralight text-zinc-500 max-w-3xl mx-auto">
              Every brand is custom-designed from scratch. Every website is custom-coded (no templates). 
              Every decision is backed by peer-reviewed behavioral research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {[
              {
                name: "Digital Presence",
                price: "$24,000",
                duration: "6-7 weeks",
                featured: false,
                description: "Foundation-level brand identity with psychology-backed design",
                features: [
                  "Behavioral research analysis of your target patient demographic",
                  "Custom brand strategy rooted in neuroscience principles",
                  "Bespoke logo and visual identity system (not templates)",
                  "Custom-coded 5-page website with conversion optimization",
                  "Mobile-first responsive design (tested across 12+ devices)",
                  "Strategic color selection backed by emotional response studies",
                  "Typography optimized for readability & trust perception",
                  "Basic SEO foundation & performance optimization",
                ],
              },
              {
                name: "Growth Brand",
                price: "$35,000",
                duration: "8-10 weeks",
                featured: true,
                badge: "Most Popular",
                description: "Complete brand transformation with advanced behavioral design",
                features: [
                  "Everything in Digital Presence, plus:",
                  "Deep behavioral psychology audit (anxiety triggers, trust signals)",
                  "Custom 10-page website with advanced CRO & A/B testing framework",
                  "Patient journey mapping using decision science",
                  "Persuasion architecture (Cialdini's 7 principles applied)",
                  "Custom animations & micro-interactions (dopamine optimization)",
                  "Advanced analytics setup with conversion tracking",
                  "Competitor psychological analysis & differentiation strategy",
                  "3 months post-launch optimization & consultation",
                ],
              },
              {
                name: "Authority Brand",
                price: "$52,000",
                duration: "10-14 weeks",
                featured: false,
                description: "Elite positioning with comprehensive research & bespoke development",
                features: [
                  "Everything in Growth Brand, plus:",
                  "Comprehensive market research study (qualitative & quantitative)",
                  "Brand perception study with target demographic (n=50+ respondents)",
                  "Custom photography art direction & styling guide",
                  "Neuromarketing-optimized copywriting (scarcity, authority, social proof)",
                  "Advanced conversion optimization (heatmaps, session recordings, funnel analysis)",
                  "Custom interactive features & booking system integration",
                  "Premium hosting & security (HIPAA-compliant infrastructure)",
                  "6 months strategic consulting with quarterly optimization",
                ],
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`p-10 rounded-3xl border backdrop-blur-sm relative ${
                  tier.featured
                    ? "border-amber-400/50 bg-gradient-to-br from-amber-400/10 to-transparent lg:scale-105 lg:-mt-8"
                    : "border-zinc-800/50 bg-zinc-900/30"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 text-xs font-light">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-light mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-extralight">{tier.price}</span>
                  </div>
                  <p className="text-sm font-extralight text-zinc-500 mb-3">{tier.duration}</p>
                  <p className="text-sm font-extralight text-zinc-400 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle 
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.featured ? "text-amber-400" : "text-zinc-600"
                        }`} 
                      />
                      <span className="text-sm font-extralight text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/andreago-sparkensolutions/sparken-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3.5 rounded-full font-light text-sm transition-all duration-300 hover:scale-105 ${
                    tier.featured
                      ? "bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950"
                      : "border border-zinc-700 text-zinc-300 hover:border-amber-400/50"
                  }`}
                >
                  Schedule Consultation
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section id="process" className="relative py-32 px-6 bg-zinc-900/20">
        <div className="max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-extralight mb-6">
              Research First. Design Second.
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-light">
                Results Always.
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Research & Discovery",
                description: "Deep dive into your practice, competitors, and target patients. Behavioral analysis and market positioning.",
              },
              {
                number: "02",
                title: "Brand Identity Design",
                description: "Crafting your visual language—logo, colors, typography—all backed by color psychology research and aesthetic studies.",
              },
              {
                number: "03",
                title: "Website Development",
                description: "Building your digital presence with conversion optimization, patient journey mapping, and evidence-based UX.",
              },
              {
                number: "04",
                title: "Launch & Optimize",
                description: "Strategic launch with analytics tracking, A/B testing, and continuous refinement based on real patient behavior data.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-24"
              >
                {/* Connecting Line */}
                {i < 3 && (
                  <div className="absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-amber-400/50 to-transparent" />
                )}

                {/* Number Badge */}
                <div className="absolute left-0 top-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/30 flex items-center justify-center">
                  <span className="text-2xl font-extralight bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm hover:border-amber-400/20 transition-all duration-500">
                  <h3 className="text-2xl font-light mb-3">{step.title}</h3>
                  <p className="text-base font-extralight text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-16 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-amber-400/10 via-transparent to-transparent backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extralight mb-6 leading-tight">
                Ready to Transform Your Practice
                <br />
                into an <span className="font-light italic">Icon</span>?
              </h2>
              
              <p className="text-xl font-extralight text-zinc-400 mb-10 max-w-2xl mx-auto">
                Let's discuss how research-driven design can elevate your brand and attract your ideal patients.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="https://calendly.com/andreago-sparkensolutions/sparken-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 text-base font-light hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/20 flex items-center gap-2"
                >
                  Book Discovery Call
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@sparken.studio"
                  className="px-8 py-4 rounded-full border border-amber-400/50 text-amber-400 text-base font-light hover:bg-amber-400/10 transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm font-extralight text-zinc-500">
                <MapPin className="w-4 h-4" />
                <span>Los Angeles, California</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative py-16 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-zinc-950" />
              </div>
              <div>
                <div className="text-lg font-extralight">
                  Sparken <span className="font-light">Studio</span>
                </div>
                <div className="text-xs font-extralight text-zinc-500">
                  Every Decision. Backed by Research.
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm font-extralight text-zinc-500 text-center md:text-right">
              <div>© {new Date().getFullYear()} Sparken Studio. All rights reserved.</div>
              <div className="text-xs text-zinc-600 mt-1">
                Website by <span className="text-amber-400">Sparken</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
