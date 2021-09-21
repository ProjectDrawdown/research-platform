import React from "react";
import fs from "fs";
import PropTypes from 'prop-types';
import { serialize } from 'next-mdx-remote/serialize';
import Button from "../../components/Button";

function Post() {
  return (
    <Button />
  )
}

Post.propTypes = {
  data: PropTypes.array
}

export const getStaticPaths = async () => {
  const paths = fs.readdirSync('projects');
  const pathsSlugs = paths.map(path => '/projects/' + path.replace('.md', ''));
  return {
    paths: pathsSlugs,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.id;
  const source = fs.readFileSync('projects/' + slug + '.md', "utf8");
  const data = await serialize(source);
  return {
    props: { data },
  };
};

export default Post

