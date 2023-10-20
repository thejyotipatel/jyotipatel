import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
})

const Work = () => {
  const [projects, setProjects] = useState([])
  const featchData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })

      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys?.id
        const img = image?.fields?.file?.url
        return { id, title, url, img }
      })
      setProjects(projects)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    featchData()
  }, [])

  return (
    <main className=''>
      <section className='work | space-margin-top' id='work '>
        <h1>Projects</h1>
        <p className='git-desc'>
          These are some of my project that i have worked on and check out my
          all projects on
          <a
            href='https://github.com/thejyotipatel/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GITHUB
          </a>
        </p>

        <div className='work-cards' id='work-cards'>
          {projects.map((item) => {
            return (
              <div key={item.id} className='card'>
                <a href={item.url} target='_blank' rel='noopener noreferrer'>
                  <img src={item.img} alt={item.title} loading='lazy' />
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
export default Work
