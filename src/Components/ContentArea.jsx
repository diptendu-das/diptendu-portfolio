import { StarBackground } from "./StarBackground"
import { FairyLights } from "./FairyLights"
import { Hero } from "./Hero"
import { About } from "./About"
import { Skills } from "./Skills"
import { Timeline } from "./Timeline"
import { Works } from "./Works"
import { Contact } from "./Contact"

export const ContentArea = ({ isDarkMode }) => {

    return (

        <div className="flex-col grow bg-blue-100 dark:bg-transparent z--1 relative" >
            {/* Global Thematic Backgrounds */}
            {isDarkMode ? <StarBackground className="hidden" /> : ""}
            <FairyLights />

            {/* ----------------- Hero Section ----------------- */}
            <Hero />


            {/* ----------------- About ----------------- */}
            <About />

            {/* ----------------- Skills ----------------- */}
            <Skills />

            {/* ----------------- Time Line ----------------- */}
            <Timeline />

            {/* -----------------My Works---------------------*/}
            <Works />

            {/* ----------------- Contact Me ----------------- */}
            <Contact />
        </div>

    )
}

