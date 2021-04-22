import React from "react"
import calculator from "../Images/project_calculator.gif"
import weather from "../Images/project_weather.gif"
import reactNative from "../Images/project_track.png"
import instaClone from "../Images/instaclone/rn-instaclone.gif"
import portfolio from "../Images/project_portfolio-final.gif"
import gpni from "../Images/project_GPLanding.jpg"


import ProjectCard from "../Projects/ProjectCard"

const FeaturedProjects = (props) => {

    return (<>
        <ProjectCard
            image={instaClone}
            gitlink="https://github.com/rpollock03/rn_instagram_clone"
            bloglink="/post/robstagram"
            title="Instagram Clone"
            summary="Post, comment, follow, like in realtime with this fully functional, full-stack instagram clone. "
            tags={["react-native", "redux", "firebase"]}
            filter={props.filter}
        />
        <ProjectCard
            image={calculator}
            gitlink="https://github.com/rpollock03/iphone-calculator"
            title="iOS Calculator"
            summary="Built with React, the styling on this fully functional calculator is  iOS inspired"
            tags={["react", "javascript", "css"]}
            filter={props.filter}
        />

        <ProjectCard
            image={weather}
            gitlink="https://github.com/rpollock03/weather-app"
            title="Weather App"
            summary="Search for forecasts and weather map by auto GPS or manual search"
            tags={["react", "javascript", "leafletjs"]}
            filter={props.filter}
        />
        <ProjectCard
            image={reactNative}
            gitlink="https://github.com/rpollock03/tracking-app_frontend"
            title="Location Tracker"
            summary="Location tracking app built with React Native."
            tags={["react-native", "context-api", "nodejs"]}
            filter={props.filter}
        />
        <ProjectCard
            image={portfolio}
            gitlink="https://github.com/rpollock03/portfolio-site"
            title="This site!"
            summary="Wouldn't be much of a developer if I didn't make my own portfolio!"
            tags={["react", "react-router", "javascript", "frontend"]}
            filter={props.filter}
        />
        <ProjectCard
            image={gpni}
            gitlink="https://github.com/rpollock03/portfolio-site"
            title="Landing Page"
            summary="A bootstrap landing page for a political party."
            tags={["javascript", "react", "frontend"]}
            filter={props.filter}
        />
    </>
    )
}

export default FeaturedProjects