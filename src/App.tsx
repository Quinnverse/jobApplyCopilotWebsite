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
import { LiveInteractiveDemoModal } from './components/LiveInteractiveDemoModal';
import { DocumentPage } from './components/DocumentPage';

const documentPaths = {
  '/privacy/': 'privacy',
  '/terms/': 'terms',
  '/help/': 'help',
} as const;

export default function App() {
  const documentKind = documentPaths[window.location.pathname as keyof typeof documentPaths];
  if (documentKind) return <DocumentPage kind={documentKind} />;

  const [extensionModalOpen, setExtensionModalOpen] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const openWebApp = () => window.location.assign('https://jobs.quinnverse.tech');

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf9] text-[#131a16]">
      <Navbar onOpenApp={openWebApp} onOpenDownload={() => setExtensionModalOpen(true)} />
      <main className="flex-1">
        <HeroSection onGetExtension={() => setExtensionModalOpen(true)} onOpenApp={openWebApp} />
        <ProblemSection />
        <CoreFlowSection />
        <AutofillControlSection />
        <WorkspaceSection onOpenPreview={() => setPreviewModalOpen(true)} />
        <DeterministicSection />
        <DualProductSection onGetExtension={() => setExtensionModalOpen(true)} onOpenApp={openWebApp} />
        <PrivacyTrustSection />
        <FaqSection />
        <FinalCtaSection onGetExtension={() => setExtensionModalOpen(true)} onOpenApp={openWebApp} />
      </main>
      <Footer onOpenDownload={() => setExtensionModalOpen(true)} />
      <DownloadModal isOpen={extensionModalOpen} onClose={() => setExtensionModalOpen(false)} />
      <LiveInteractiveDemoModal
        isOpen={previewModalOpen}
        onClose={() => setPreviewModalOpen(false)}
        onOpenDownload={() => setExtensionModalOpen(true)}
      />
    </div>
  );
}
