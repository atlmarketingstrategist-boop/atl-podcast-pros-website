import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <title>Page Not Found | ATL Podcast Pros</title>
      <meta name="robots" content="noindex, follow" />
      <div className="container" style={{ padding: '140px 0 120px', textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p style={{ margin: '16px 0 28px' }}>
          The page you are looking for does not exist or may have moved.
        </p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </>
  )
}
