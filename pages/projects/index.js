import React, {useState} from "react"
import Head from "next/head"
import PropTypes from 'prop-types'
import getStaticFilesFrontMatter from '../../getStatic'

export async function getStaticProps() {
  const projects = await getStaticFilesFrontMatter("_projects")
  const resources = await getStaticFilesFrontMatter("_resources")

  const preloadedProjects = projects.map((project) => {
    const associatedResources = resources.filter((resource) => {
      return resource && resource.projects && resource.projects.indexOf(project.name) !== -1
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

function ProjectList({ projects, resources }) {
  const [value, setValue] = useState({ projects, resources, filteredProjects: projects, filteredResources: resources })

  function handlekeydown (e) {
    if (e.keyCode === 13) {
      const filter = e.target.value

      setValue({
        projects,
        resources,
        filteredProjects: projects.filter((project) => {
          return project.name.indexOf(filter) !== -1 || project.description.indexOf(filter) !== -1
        }),
        filteredResources: resources.filter((resource) => {
          return resource.name.indexOf(filter) !== -1 || resource.description.indexOf(filter) !== -1
        })
      })
    }
  }

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <article>
        <h1>title</h1>

        <h2>Browse all Projects</h2>

        <input type="text" onKeyDown={handlekeydown} />

        <ul>
          {value.filteredProjects.map((project, k) => (
            <li key={k}>
            {project.name}
              <ul>
                <li><b>Description:</b>{project.description}</li>
                {project.resources.length !== 0 ?
                <li>
                  <b>Associated Resources:</b>
                  <ul>
                    {project.resources.map((resource, k) => (
                      <li key={k}>
                        <ul>
                          <li>{resource.file}</li>
                        </ul>
                      </li>
                      ))}
                  </ul>
                </li> : ""
                }
              </ul>
            </li>
          ))}
        </ul>

        <hr />

        <h2>All Resources</h2>
        <ul>
          {value.filteredResources.map((resource, k) => (
            <li key={k}>
              {resource.name}
              <ul>
                <li>{resource.description}</li>
                <li><b>{resource.file}</b></li>
                <li><i>{resource.link}</i></li>
              </ul>
            </li>
          ))}
        </ul>

      </article>
    </>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array,
  resources: PropTypes.array
}

export default ProjectList

