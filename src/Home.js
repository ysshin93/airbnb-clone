import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
function Home(){
    return (
        <div className='home'>  
            <Banner />

            <div className="home__section">
                <Card src="https://bendyworks.com/assets/images/blog/2017-10-27-joyful-tech-43-268a0748.jpg"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of"/>
                <Card src="https://bendyworks.com/assets/images/blog/2017-10-27-joyful-tech-43-268a0748.jpg"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of"/>
                <Card src="https://bendyworks.com/assets/images/blog/2017-10-27-joyful-tech-43-268a0748.jpg"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of"/>
            </div>
            <div className="home__section">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home