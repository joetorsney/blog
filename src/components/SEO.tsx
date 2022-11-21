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