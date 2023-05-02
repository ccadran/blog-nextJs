import Head from "next/head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Le blog dev pour les passionnés",
  description: "Toutes les news du dev",
};

export default Meta;
