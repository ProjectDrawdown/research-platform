import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, projects } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <h2>Active Projects</h2>
          <ul>
            {projects.map((project, k) => (
              <li key={k}>
              {project}
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}
