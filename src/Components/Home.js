
import React from 'react'
import Data from './Data'
import '../Style/Home.css'



const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                {/* <Social /> */}

                

                <Data />
            </div>
            {/* scrolldown */}
        </div>
    </section>
  )
}

export default Home