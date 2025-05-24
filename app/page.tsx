"use client"
import Intro from './pages/Intro'
import { useEffect } from 'react'

export default function HomePage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Intro />
  
}
