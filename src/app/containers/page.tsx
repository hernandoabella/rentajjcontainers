import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContainersGrid from './components/ContainerGrid'

const Containers = () => {
  return (
    <div>
        <TopBar />
        <Header />
        <ContainersGrid />
        <Footer />
    </div>
  )
}

export default Containers