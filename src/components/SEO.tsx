<Head>
    <title>Joseph Torsney</title>
    <meta name="description" content="Joseph Torsney" />
    <link rel="icon" href="/favicon.ico" />
</Head>

import Head from 'next/head';


interface Props {
  title?: string;
}

const SEO = (props: Props) => {
  const {title = ``} = props;

  return (
    <Head>
      <title>
        {title ? `${title} |` : ''} Joseph Torsney
      </title>
    </Head>
  );
};

export { SEO };