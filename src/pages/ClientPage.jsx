import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import ClientPasswordGate from '../components/ClientPasswordGate';
import { sfaPartnersPage } from '../data/clientPages/sfaPartners';
import { missionFieldPage } from '../data/clientPages/missionField';
import { jonAlwinsonPage } from '../data/clientPages/jonAlwinson';
import { diaryOfACfoPage } from '../data/clientPages/diaryOfACfo';

const clientPages = {
  'sfa-partners': sfaPartnersPage,
  'mission-field': missionFieldPage,
  'jon-alwinson': jonAlwinsonPage,
  'diary-of-a-cfo': diaryOfACfoPage,
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

  const doc = <div className="client-page-doc" dangerouslySetInnerHTML={{ __html: page.htmlContent }} />;

  return (
    <>
      <title>{`${page.clientName} | ATL Podcast Pros`}</title>
      <meta name="robots" content="noindex, nofollow" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      {page.passwordProtected === false ? (
        doc
      ) : (
        <ClientPasswordGate slug={page.slug} correctPassword={page.password}>
          {doc}
        </ClientPasswordGate>
      )}
    </>
  );
}
