import React from "react"
import Head from "next/head"
import PropTypes from 'prop-types'
import { react as HomeContent } from '../content/home.md';
import getStaticFilesFrontMatter from '../getStatic'

export async function getStaticProps() {
  const projects = await getStaticFilesFrontMatter("_projects")
  const resources = await getStaticFilesFrontMatter("_resources")

  const preloadedProjects = projects.map((project) => {
    const associatedResources = resources.filter((resource) => {
      return resource.projects.indexOf(project.name) !== -1
    })
    project.resources = associatedResources
    return project
  })

  return {
    props: {
      projects: preloadedProjects,
      resources: resources,
    },
  }
}

function Home({ projects, resources }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>title</h1>
        <HomeContent />
        <h2>Active Projects</h2>
        <ul>
          {projects.map((project, k) => (
            <li key={k}>
            {project.name}
              <ul>
                <li><b>Description:</b>{project.description}</li>
                <li><b>Link:</b>{project.link}</li>
                <li><b>Associated Resources:</b>
                  <ul>
                    {project.resources.map((resource, k) => (
                      <li key={k}>
                        {resource.name}
                        <ul>
                          <li>{resource.description}</li>
                          <li>{resource.file}</li>
                          <li>{resource.link}</li>
                          <li>{resource.projects}</li>
                        </ul>
                      </li>
                      ))}
                  </ul>
                </li>
              </ul>
            </li>
          ))}
        </ul>

        <hr />

        <h2>All Resources</h2>
        <ul>
          {resources.map((resource, k) => (
            <li key={k}>
              {resource.name}
              <ul>
                <li>{resource.description}</li>
                <li>{resource.file}</li>
                <li>{resource.link}</li>
                <li>{resource.projects}</li>
              </ul>
            </li>
          ))}
        </ul>

      </article>
    </>
  )
}

Home.propTypes = {
  projects: PropTypes.array,
  resources: PropTypes.array
}

export default Home

