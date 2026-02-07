import React from 'react'
import CanvasCreationHero from '@/components/canvas_creation/CanvasCreationHero'
import ArtistNamesSection from '@/components/canvas_creation/ArtistNamesSection'
import VenueSection from '@/components/canvas_creation/VenueSection'

const CanvasAndCreationPage = () => {
  return (
    <>
        <CanvasCreationHero/>
        <ArtistNamesSection/>
        <VenueSection/>
    </>
  )
}

export default CanvasAndCreationPage