import React from "react"
import { promises as fs } from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

async function getFrontMatter (directory, filename) {
  const filePath = path.join(directory, filename)
  const fileContents = await fs.readFile(filePath, "utf8")
  return matter(fileContents).data
}

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), "_projects")
  const resourcesDirectory = path.join(process.cwd(), "_resources")
  const projectFiles = await fs.readdir(projectsDirectory)
  const resourceFiles = await fs.readdir(resourcesDirectory)

  const projectPromises = projectFiles.map((filename) => {
    return getFrontMatter(projectsDirectory, filename)
  })

  const resourcePromises = resourceFiles.map((filename) => {
    return getFrontMatter(resourcesDirectory, filename)
  })

  const projects = await Promise.all(projectPromises)
  const resources = await Promise.all(resourcePromises)

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

export default Home

