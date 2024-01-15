import Image from 'next/image'
import Layout from '../src/components/layouts/layout'
import Typewriter from '../src/components/typewriter'
import { SEO } from '../src/components/SEO'
import { Timeline } from 'flowbite-react'

import profilePic from '../public/images/profilepic.png'
import { useState } from 'react'

const interests = ['Full-Stack Web Developement', 'Python Applications', 'Machine Learning']

const timelineItems = [
  {
    time: '2018 - 2023',
    title: 'The University of Sheffield',
    subtitle: '1st (hons) MComp Computer Science with a Year in Industry',
    body: 'I gained strong foundational knowledge in theoretical computer science, algorithms, and logic. I also gained practical experience in software engineering, database engineering, cryptography, and machine learning. My Masters\' thesis investigated the impact of speech data on advanced machine learning models for singing voice conversion.',
  },
  {
    time: 'Summer 2023',
    title: 'CERN Summer Student Program',
    subtitle: 'Full Stack Web Developer',
    body: 'I joined the ALICE experiment as a Full Stack Web Developer, and delivered several features to the \'Bookkeeping\' web app used in the operation of the ALICE experiment. The app allows staff to communicate by writing \'Logs\'. I implemented feature where users could link Logs to a particular database entity. This involved adding a new table to the database to represent the many-to-many relationship, adding API endpoints to support the creation of Logs with the entity, displayed these on the front-end, and wrote integration tests. I am currently implementing a flexible data table component as an open source contributor. I published a report on my achievements during my placement which is available online the CERN document server.',
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
    body: 'As part of my degree I undertook an industrial placement on the Mantid Project, which provides tools for data reduction and analysis of particle physics and materials science experiments. I delivered several features to improve the user experience, in particular a feature requested by users where a tool that plots 3D data reacted to changes in the data elsewhere in the application. I did this by implementing an Observer pattern. I also fixed bugs related to concurrency and gained deep experience with python: The application interfaced with a C++ backend exposed to python, and I worked on extending matplotlib to bring custom functionality. I was involved in all aspects of the software lifecycle, including sprint planning, development, unit/integration testing, code reviews, and gathering user feedback.',
  }
]

export default function Home() {
  const [currentInterestIndex, setCurrentInterestIndex] = useState(0)
  const changeInterest = () => {
    setCurrentInterestIndex((currentInterestIndex + 1) % interests.length)
  }

  return (
    <Layout>
      <SEO title='Home'/>
      <div className='flex flex-col gap-20'>
        <div className='md:flex items-center gap-8 flex-row-reverse'>
          <div className='max-md:flex justify-center'>
            <div className='max-w-md max-md:w-1/2 relative aspect-square h-auto overflow-hidden border-0 border-transparent rounded-[40px]'>
              <Image src={profilePic} alt='A picture of me' layout='responsive'/>
            </div>
          </div>
          <div>
            <h1 className='font-medium text-4xl text-secondary max-md:pt-20 py-2'><span>Hello, I&apos;m</span><span className='font-serif-italic'> Joseph Torsney</span></h1>
            <h1 className='text-2xl py-2'>I am a Masters of Computer Science Graduate with 1-2 years professional experience.</h1>
            <h1 className='text-2xl py-2'>
              I am primarily interested in 
              <Typewriter text={interests[currentInterestIndex]} cursor={'▊'} delay={100} pause={2000} doneCallback={changeInterest}></Typewriter>
            </h1>
            {/* <span className='font-mono underline'>Full Stack Web Development</span> */}
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
                    <h3 className='text-white text-2xl font-semibold py-1'>{item.title}</h3>
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
