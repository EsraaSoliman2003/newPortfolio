import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const tools = [
  {
    title: 'HTML5',
    icon: '/imgs/HTML5.png',
  },
  {
    title: 'CSS3',
    icon: '/imgs/CSS3.png',
  },
  {
    title: 'Bootstrap',
    icon: '/imgs/Bootstrap.png',
  },
  {
    title: 'JavaScript',
    icon: '/imgs/JavaScript.png',
  },
  {
    title: 'React',
    icon: '/imgs/react.svg',
  },
  {
    title: 'MUI',
    icon: '/imgs/mui.png',
  },
  {
    title: 'Next',
    icon: '/imgs/nextjs.png',
  },
  {
    title: 'MongoDB',
    icon: '/imgs/mongodb.webp',
  }
]

export default function Experience() {
  return (
    <div className={styles.container}>
      <h1>Skills and Tools</h1>
      <div className={styles.tools}>
        {
          tools.map(tool => (
            <div key={tool.title} className={styles.tool}>
              <Image src={tool.icon} alt={tool.title} width={50} height={50} className={`${styles.img} ${tool.title === "Next" ? styles.next : ""} ${tool.title === "React" ? styles.react : ""}`} />
              <p>{tool.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
