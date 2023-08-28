import React from 'react'
import './Home.scss'
import { Hero } from '../../components/hero/Hero'
import { About } from '../../components/about/About'
import Services from '../../components/services/Services'
import Portfolio from '../../components/portfolio/Portfolio'
import { Blog } from '../../components/blog/Blog'
import Contact from '../../components/contact/Contact'

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Portfolio/>
    <Blog/>
    <Services/>
    <Contact/>
    
    </>
  )
}
