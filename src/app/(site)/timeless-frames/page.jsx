import React from 'react'
import Footer from '@/components/common/Footer'
import EnduringSection from '@/components/timeless_frames/EnduringSection'
import Exhibition from '@/components/timeless_frames/Exhibition'
import FocusSection from '@/components/timeless_frames/FocusSection'
import MobileVisionaries from '@/components/timeless_frames/MobileVisionaries'
import TimelessHero from '@/components/timeless_frames/TimelessHero'
import TimelessMobileHero from '@/components/timeless_frames/TimelessMobileHero'
import Visionaries from '@/components/timeless_frames/Visionaries'

const TimelessFramesPage = () => {
    return (
        <>
            <div className="hidden lg:block w-full">
                <TimelessHero />
            </div>
            <div className="lg:hidden w-full">
                <TimelessMobileHero />
            </div>

            {/* <AboutFoundation /> */}
            <EnduringSection />
            <Exhibition />

            <div className="hidden lg:block w-full">
                <Visionaries />
            </div>
            <div className="lg:hidden w-full">
                <MobileVisionaries />
            </div>

            <FocusSection />

            {/* <Footer/> */}
        </>
    )
}

export default TimelessFramesPage