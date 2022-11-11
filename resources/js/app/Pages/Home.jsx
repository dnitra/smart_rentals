import React from 'react'
import { useContent } from "./../Context/ContentContext"
import { useTheme } from "./../Context/ThemeContext"

function Home() {
  const content = useContent();
  const { theme } = useTheme();



  return (
    <div className="main">
        <section className='welcome'>
                <div className='project-name'>SMART RENTALS</div>
        </section>
    </div>

  )
}

export default Home