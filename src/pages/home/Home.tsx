import React from 'react'
import './Home.scss'
import { Hero } from '../../components/hero/Hero'
import { About } from '../../components/about/About'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import { Blog } from '../../components/blog/Blog'
import Contact from '../../components/contact/Contact'
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/* <Hero /> */}
      <About />
      <Portfolio />
      <Blog />
      <Services />
      <Contact />

    </>
  )
}
