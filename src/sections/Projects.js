
import styled from 'styled-components'
import Project from '../components/Project';
import kanban from '../assets/Images/projects/kanban.png'
import weather from '../assets/Images/projects/weather.png'
import crypto from '../assets/Images/projects/crypto.png'
import authapp from '../assets/Images/projects/authapp.png'
import kmovies from '../assets/Images/projects/kmovies.png'
import rhyme4u from '../assets/Images/projects/rhyme4u.png'
import Title from '../components/Title'

const Section = styled.div`
    width: 100%;
    padding: 4rem 0;
    background: #0D0D0D;
    @media (max-width: 768px) {
        padding: 3rem 0;
    }
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const projects = [
  {
    title: "Weather App",
    description: "A modern weather application that provides real-time weather information with an interactive map interface. Users can search for locations and view detailed weather forecasts with beautiful visualizations.",
    image: weather,
    url: 'https://weatherapp-k-next.vercel.app/',
    github: 'https://github.com/yourusername/weather-app',
    techStack: [
      'next.js',
      'react',
      'tailwind',
      'react-leaflet',
      'axios'
    ]
  },
  {
    title: "Kanban App",
    image: kanban,
    description: "A kanban board application that provides a flexible and customizable way to manage tasks and projects with an intuitive interface. Users can create, edit, and delete tasks, as well as move them between columns with ease.",
    url: 'https://mern-stack-kanban.vercel.app',
    techStack: [
      'react',
      'redux',
      'react-beautiful-dnd',
      'nodejs',
      'express',
      'jsonwebtoken',
      'mongoose',
      'cookie-parser',
      'cors'
    ]
  },
  {
    title: "Crypto Track",
    description: "A modern cryptocurrency tracking application that provides real-time data and analytics with an intuitive interface. Users can search for cryptocurrencies and view detailed information with beautiful visualizations.",
    image: crypto,
    url: 'https://track-app-crypto.netlify.app/',
    techStack: [
      'react',
      'recharts',
      'tailwind'
    ]
  },
  {
    title: "Rhyme4U",
    description: "react music player app with shazam core api",
    image: rhyme4u,
    url: 'https://rhyme4u.netlify.app/',
    techStack: [
      'react',
      'redux',
      'axios',
      'swiper'
    ]
  },
  {
    title: "Auth App",
    image: authapp,
    description: "A modern authentication application that provides secure user authentication and authorization with an intuitive interface. Users can sign up, log in, and manage their accounts with ease.",
    color: "#000000",
    url: 'https://mern-authenication.vercel.app/',
    techStack: [
      'react',
      'zustand',
      'tailwind',
      'nodejs',
      'express',
      'jsonwebtoken',
      'mailgen',
      'mongoose',
      'nodemailer'
    ]
  },
  {
    title: "Kmovies",
    description: "A movie application that provides a wide range of movies and TV shows with an intuitive interface. Users can search for movies and TV shows, save them to their favorites, and view detailed information.",
    image: kmovies,
    color: "#636e72",
    url: 'https://moviesk.netlify.app/',
    techStack: [
      'react',
      'redux',
      'materialui',
      'yup',
      'swiper',
      'nodejs',
      'express',
      'jsonwebtoken',
      'mongoose',
    ]
  }
]

const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
`

function Projects() {
    return (
        <Section id="projects">
            <Container>
                <Title title="Projects" />
                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <Project 
                            key={index}
                            {...project}
                        />
                    ))}
                </ProjectsGrid>
            </Container>
        </Section>
    )
}

export default Projects