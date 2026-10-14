import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceModal from './components/ServiceModal';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import ProjectModal from './components/ProjectModal';
import Technologies from './components/Technologies';
import Industries from './components/Industries';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ProjectEstimator from './components/ProjectEstimator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [activeModalService, setActiveModalService] = useState(null);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [transferScope, setTransferScope] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleStartProject = () => {
    scrollToSection('estimator');
  };

  const handleOpenContact = () => {
    scrollToSection('contact');
  };

  const handleInquireService = (service) => {
    setTransferScope({
      title: service.title,
      services: [service.title],
      timeline: 'Standard (6 - 8 Weeks)'
    });
    scrollToSection('contact');
  };

  const handleSelectSolution = (solution) => {
    setTransferScope({
      title: solution.title,
      services: [solution.title],
      stage: solution.badge,
      timeline: 'Standard (6 - 8 Weeks)'
    });
    scrollToSection('contact');
  };

  const handleStartSimilarProject = (project) => {
    setTransferScope({
      title: project.title,
      services: [project.category],
      stage: 'Concept Demonstration Architecture',
      timeline: 'Standard (6 - 8 Weeks)'
    });
    scrollToSection('contact');
  };

  const handleInquireIndustry = (industry) => {
    setTransferScope({
      title: `Specialized ${industry.name} Architecture`,
      services: ['Custom Software Development'],
      stage: industry.name,
      timeline: 'Standard (6 - 8 Weeks)'
    });
    scrollToSection('contact');
  };

  const handleTransferEstimator = (scope) => {
    setTransferScope(scope);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-background text-light font-sans selection:bg-electric selection:text-white relative">
      
      {/* Sticky Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onExploreServices={handleExploreServices}
          onStartProject={handleStartProject}
        />

        {/* 2. Services Section (All 12 Services) */}
        <Services 
          onSelectService={(srv) => setActiveModalService(srv)}
        />

        {/* 3. Solutions Section (Packaged delivery models) */}
        <Solutions 
          onSelectSolution={handleSelectSolution}
        />

        {/* 4. Why Choose Us (Your Vision. Our Technology. One Powerful Partnership.) */}
        <WhyChooseUs />

        {/* 5. Our 4-Step Process (Discover, Strategize, Build & Create, Launch & Improve) */}
        <Process />

        {/* 6. Portfolio / Case Studies with Category Filters */}
        <Portfolio 
          onSelectProject={(proj) => setActiveModalProject(proj)}
        />

        {/* 7. Technologies We Work With (Categorized) */}
        <Technologies />

        {/* 8. Industries We Serve (8 Tailored sectors) */}
        <Industries 
          onInquireIndustry={handleInquireIndustry}
        />

        {/* 9. About Us (Headline, Description, Mission, Vision, Philosophy) */}
        <AboutUs 
          onGetInTouch={handleOpenContact}
        />

        {/* 10. Testimonials & Client Trust Framework */}
        <Testimonials />

        {/* 11. Interactive Project Scope & Timeline Estimator */}
        <ProjectEstimator 
          onTransferToContact={handleTransferEstimator}
        />

        {/* 12. "Let's Talk" & Project Brief Form */}
        <ContactSection 
          initialScope={transferScope}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {activeModalService && (
        <ServiceModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onInquire={handleInquireService}
        />
      )}

      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          onStartSimilar={handleStartSimilarProject}
        />
      )}

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
