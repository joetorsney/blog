import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import profilePic from '../../public/images/profilepic.png'
import Typewriter from './typewriter'
import Image from 'next/image'
import Link from 'next/link'

const interests = ['Full-Stack Web Developement', 'Python Applications', 'Machine Learning']

const socials = [
  {
    title: 'Github',
    href: 'https://github.com/joetorsney',
    icon: faGithub
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joseph-torsney-788345195/',
    icon: faLinkedin
  },
  {
    title: 'Email',
    href: 'mailto:joetorsney@gmail.com',
    icon: faEnvelope
  },
  {
    title: 'CV',
    href: 'https://drive.google.com/file/d/1fqYWBjRSPD3lsay0PG1pQsFN0MIR7dEi/view?usp=sharing',
    icon: faNewspaper
  }
]

const Hero = () => {
    return <div className='md:flex items-center gap-8 flex-row-reverse'>
      <div className='max-md:flex justify-center'>
        <div className='w-1/2 md:w-[250px] aspect-square h-auto overflow-hidden border-0 border-transparent rounded-[40px]'>
          <Image src={profilePic} alt='A picture of me' layout='responsive' />
        </div>
      </div>
      <div>
        <h1 className='font-medium text-4xl text-secondary max-md:pt-10 py-2'><span>Hello, I&apos;m</span><span className='font-serif-italic'> Joseph Torsney</span></h1>
        <h1 className='text-xl sm:text-2xl py-2'>I am a Masters of Computer Science Graduate with 1-2 years professional experience.</h1>
        <h1 className='text-xl sm:text-2xl py-2'>
          I am primarily interested in
          <br />
        </h1>
        <Typewriter texts={interests} cursor={'▊'} delay={100} pause={2000} className='font-mono text-xl sm:text-2xl'></Typewriter>
        <div className='py-4'>
          <div className='flex items-center gap-4'>
            {socials.map(({ title, href, icon }) => {
              return <Link key={title} href={href}>
                <div className='flex items-center gap-2 hover:text-secondary transition-colors duration-75'>
                  <FontAwesomeIcon icon={icon} className='fa-xl ' />
                  <span className='text-lg sm:text-xl'>{title}</span>
                </div>
              </Link>
            })}
          </div>
        </div>
      </div>
    </div>
}

export default Hero