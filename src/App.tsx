import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { CoreFlowSection } from './components/CoreFlowSection';
import { AutofillControlSection } from './components/AutofillControlSection';
import { WorkspaceSection } from './components/WorkspaceSection';
import { DeterministicSection } from './components/DeterministicSection';
import { DualProductSection } from './components/DualProductSection';
import { PrivacyTrustSection } from './components/PrivacyTrustSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { PrivacyModal } from './components/PrivacyModal';
import { TermsModal } from './components/TermsModal';
import { HelpModal } from './components/HelpModal';
import { LiveInteractiveDemoModal } from './components/LiveInteractiveDemoModal';

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [liveDemoModalOpen, setLiveDemoModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const handleOpenApp = () => {
    // Open the interactive preview sandbox or link directly to production
    setLiveDemoModalOpen(true);
  };

  const handleGetExtension = () => {
    setDownloadModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#131a16]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenApp={handleOpenApp}
        onOpenDownload={handleGetExtension}
        onOpenHelp={() => setHelpModalOpen(true)}
      />

      {/* Main Marketing Narrative Sections */}
      <main className="flex-1">
        {/* Section 01: Hero */}
        <HeroSection
          onGetExtension={handleGetExtension}
          onOpenApp={handleOpenApp}
        />

        {/* Section 02: The Problem */}
        <ProblemSection />

        {/* Section 03: The Core Flow */}
        <CoreFlowSection />

        {/* Section 04: Autofill Without Losing Control */}
        <AutofillControlSection />

        {/* Section 05: Web Workspace */}
        <WorkspaceSection onOpenAppModal={handleOpenApp} />

        {/* Section 06: Built for Deterministic Workflows */}
        <DeterministicSection />

        {/* Section 07: Extension + Web Dual Product */}
        <DualProductSection
          onGetExtension={handleGetExtension}
          onOpenApp={handleOpenApp}
        />

        {/* Section 08: Privacy & Trust Principles */}
        <PrivacyTrustSection />

        {/* Section 09: FAQ */}
        <FaqSection />

        {/* Section 10: Final CTA */}
        <FinalCtaSection
          onGetExtension={handleGetExtension}
          onOpenApp={handleOpenApp}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
        onOpenHelp={() => setHelpModalOpen(true)}
        onOpenDownload={handleGetExtension}
      />

      {/* Modals & Subpages */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        onOpenApp={handleOpenApp}
      />

      <LiveInteractiveDemoModal
        isOpen={liveDemoModalOpen}
        onClose={() => setLiveDemoModalOpen(false)}
        onOpenDownload={handleGetExtension}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />

      <HelpModal
        isOpen={helpModalOpen}
        onClose={() => setHelpModalOpen(false)}
      />
    </div>
  );
}
