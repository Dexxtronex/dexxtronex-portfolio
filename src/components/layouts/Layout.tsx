import React, { useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { motion, useCycle } from "framer-motion";
import { useDimensions } from '../../utils/use-dimensiones';
import { Navigation } from '../navigation/Navigation';
import { MenuToggle } from '../menuToggle/MenuToggle';
import { Footer } from '../footer/Footer';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


export const Layout = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null) as any;
  const { height } = useDimensions(containerRef);


  return (
    <>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <Outlet/>
        <Footer title="Dexxtronex - Michael Pérez" />
    </>
  )
}
