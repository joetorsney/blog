import Image from 'next/image'
import Layout from '../src/components/layouts/layout'
import { SEO } from '../src/components/SEO'
import { Timeline } from 'flowbite-react'

import profilePic from '../public/images/profilepic.png'

const timelineItems = [
  {
    time: '2018 - 2023',
    title: 'The University of Sheffield',
    subtitle: '1st (hons) MComp Computer Science with a Year in Industry',
    body: 'During my time at university, I gained strong foundational knowledge in theoretical computer science, algorithms, and logic. I also gained practical experience in software engineering, database engineering, cryptography, and machine learning. My Masters\' thesis investigated the impact of speech data on advanced machine learning models for singing voice conversion.',
  },
  {
    time: 'Summer 2023',
    title: 'CERN Summer Student Program',
    subtitle: 'Full Stack Web Developer',
    body: 'I joined the ALICE experiment as a Full Stack Web Developer, and delivered several features to the \'Bookkeeping\' web app. Bookkeeping is used to keep track of day-to-day operations at ALICE, such as the experiments\' configuration, LHC Fills, and data taking. The app also allows staff to communicate by writing \'Logs\'. I implemented feature where users could link Logs to LHC Fills, an entity in the database. This involved adding a new table to the database to represent the many-to-many relationship, adding API endpoints to support the creation of Logs with LHC Fills, displayed these on the front-end, and wrote integration tests. I am currently implementing a flexible data table component as an open source contributor. I published a report on my achievements during my placement which is available online the CERN document server.',
  },
  {
    time: '2020-2022',
    title: 'Africa in Science',
    subtitle: 'Full Stack Web Developer',
    body: 'I am responsible for developing and maintaining the ReactJS web-app for AiS. The app generates a page for each African country and I helped build the API that fetches information on scientific publications in the given country from the database. To display this data, I designed and created custom data visualisations using D3JS, such as the \'AiS Badge\' which is used by the organisation as their flagship infographic.',
  },
  {
    time: '2020 - 2021',
    title: 'STFC',
    subtitle: 'Scientific Software Engineer',
    body: 'During my Year in Industry as part of my degree, I worked as a scientific software engineer on the Mantid Project, which provides tools for data reduction and analysis of particle physics and materials science experiments. I was involved in all aspects of the software lifecycle, including sprint planning, development, unit/integration testing, code reviews, and gathering user feedback. I delivered several features to improve the user experience, including a feature where a tool that plots 3D data reacted to changes in the data elsewhere in the application. I did this by implementing an Observer pattern. I also fixed bugs related to concurrency and gained deep experience with python: the application interfaced with a C++ backend exposed to python, and extended matplotlib and numpy to bring custom functionality.',
  }
]

export default function Home() {
  return (
    <Layout>
      <SEO title='Home'/>
      <div className='flex flex-col gap-20'>
        <div className='md:flex items-center gap-8 flex-row-reverse'>
          <div className='max-md:flex justify-center'>
            <div className='max-w-md max-md:w-1/2 relative aspect-square h-auto overflow-hidden border-0 border-transparent rounded-3xl'>
              <Image src={profilePic} alt='A picture of me' layout='responsive'/>
            </div>
          </div>
          <div>
            <h1 className='font-medium text-4xl text-secondary max-md:pt-20 py-2'><span>Hello, I&apos;m</span><span className='font-serif-italic'> Joseph Torsney</span></h1>
            <h1 className='text-2xl py-2'>I am a Masters of Computer Science Graduate with 1-2 years professional experience.</h1>
            <h1 className='text-2xl py-2'>I am primarily interested in <span className='font-mono underline'>Full Stack Web Development</span></h1>
          </div>
        </div>
        <div>
          <h1 className='text-3xl text-secondary py-2 font-bold'>My Story</h1>
          <Timeline>
            {timelineItems.map((item, index) => (
              <Timeline.Item key={index}>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Time className='text-white font-bold py-1'>{item.time}</Timeline.Time>
                  <Timeline.Body>
                    <h3 className='text-white text-xl font-semibold py-1'>{item.title}</h3>
                    {item.subtitle ? <h3 className='text-white text-lg font-semibold py-1'>{item.subtitle}</h3> : ''}
                    <p className='text-white text-justify py-1'>{item.body}</p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </Layout>
  )
}
