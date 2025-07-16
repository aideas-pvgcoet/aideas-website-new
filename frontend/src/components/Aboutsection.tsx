'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.about-item');

    sections.forEach((section: any, i: number) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="w-full  text-white px-6 sm:px-12 py-20"
    >
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-sky-400 about-item">
          About aIDEAS
        </h2>

        <div className="space-y-10 text-left">
          {/* Who We Are */}
          <div className="about-item">
            <h3 className="text-2xl font-semibold text-purple-400">
              Who We Are
            </h3>
            <p className="text-gray-300 mt-2">
              aIDEAS is a passionate student-led association at PVGCOET, bringing together enthusiasts of Artificial Intelligence and Data Science. We aim to bridge the gap between theoretical learning and practical implementation.
            </p>
          </div>

          {/* What We Do */}
          <div className="about-item">
            <h3 className="text-2xl font-semibold text-purple-400">
              What We Do
            </h3>
            <p className="text-gray-300 mt-2">
              We organize technical events, workshops, guest lectures, and project showcases to nurture real-world skills and collaborative innovation in AI and DS.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="about-item">
            <h3 className="text-2xl font-semibold text-purple-400">
              Vision & Mission
            </h3>
            <p className="text-gray-300 mt-2">
              Our mission is to create an ecosystem where students not only learn but build. We envision a future where every student is AI-aware, AI-capable, and AI-empowered.
            </p>
          </div>

          {/* Our Values */}
          <div className="about-item">
            <h3 className="text-2xl font-semibold text-purple-400">
              Our Values
            </h3>
            <p className="text-gray-300 mt-2">
              We believe in innovation, inclusivity, curiosity, and teamwork. At aIDEAS, every idea matters — and every mind can shape the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
