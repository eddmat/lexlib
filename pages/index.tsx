import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { NextSeo } from 'next-seo'

const Home = () => {
  const [url, setUrl] = useState('')

  useEffect(() => setUrl(window.location.href))

  return (
    <>
      <NextSeo
        title="Inicio"
        openGraph={{
          url: url,
        }}
      />
      <Hero />
      <Posts />
    </>
  )
}

export default Home
