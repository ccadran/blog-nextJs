import Article from "@/components/Article";
import Meta from "@/components/Meta";
import React from "react";

const index = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <Meta />
      <h1>Blog</h1>
      <div className="articles_list">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default index;

//Executer le code coté serveur

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
