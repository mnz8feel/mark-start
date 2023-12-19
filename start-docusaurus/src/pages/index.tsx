import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <div>
      <Link className="button button--secondary button--lg" to="/docs">
        docs
      </Link>
      <Link className="button button--secondary button--lg" to="/blog">
        blog
      </Link>
    </div>
  );
}
