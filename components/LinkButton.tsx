import Head from 'next/head';
import ReactGA from 'react-ga';
import Link from 'next/link';

const onClick = (action: string) => {
  ReactGA.event({
    category: 'Click',
    action,
  });
};
const ChooseLink: React.FC<{ url: string; as?: string }> = ({
  children,
  url,
  as,
}) => {
  if (url.includes(':')) {
    return (
      <>
        <Head>
          <link href={`${url}`} rel="prerender" />
        </Head>
        <a href={url} onClick={() => onClick(String(children))}>
          {children}
        </a>
        <style jsx>{`
          a {
            text-decoration: none;
            color: white;
            font-size: 15px;
          }
          a:hover {
            color: white !important;
          }
          a:visited {
            color: white;
          }
        `}</style>
      </>
    );
  }
  return (
    <>
      <Link href={`${url}`} as={as}>
        <a onClick={() => onClick(String(children))}>{children}</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: white;
          font-size: 15px;
        }
        a:hover {
          color: white !important;
        }
        a:visited {
          color: white;
        }
      `}</style>
    </>
  );
};

const LinkButton: React.FC<{ url: string; margin?: string; as?: string }> = ({
  url,
  children,
  margin,
  as,
}) => (
  <div className="inline">
    <ChooseLink url={url} as={as}>
      {children}
    </ChooseLink>

    <style jsx>{`
      .inline {
        display: inline-block;
        margin: ${margin || 0};
      }
    `}</style>
  </div>
);

export default LinkButton;
