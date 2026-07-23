import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ClientPasswordGate from '../components/ClientPasswordGate';
import { sfaPartnersPage } from '../data/clientPages/sfaPartners';
import { missionFieldPage } from '../data/clientPages/missionField';

const clientPages = {
  'sfa-partners': sfaPartnersPage,
  'mission-field': missionFieldPage,
};

export default function ClientPage() {
  const { slug } = useParams();
  const page = clientPages[slug];

  useEffect(() => {
    if (!page) return;
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-client-page', slug);
    styleEl.textContent = page.pageStyles || '';
    document.head.appendChild(styleEl);
    return () => {
      const existing = document.querySelector(`[data-client-page="${slug}"]`);
      if (existing) existing.remove();
    };
  }, [page, slug]);

  if (!page) return <Navigate to="/" replace />;

  return (
    <>
      <title>{page.clientName} — ATL Podcast Pros</title>
      <meta name="robots" content="noindex, nofollow" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <ClientPasswordGate slug={page.slug} correctPassword={page.password}>
        <div className="client-page-doc" dangerouslySetInnerHTML={{ __html: page.htmlContent }} />
      </ClientPasswordGate>
    </>
  );
}
