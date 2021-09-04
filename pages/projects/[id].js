import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import fs from "fs";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote'

export default function Post({
  data
}) {
  return (
    <MDXRemote {...data} />
  )
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
