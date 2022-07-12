import { RequestHandler } from "express"
import models from "@models/index"

const { ProjectModel } = models

export const addProject: RequestHandler = async (_, res) => {
    // const textBlock = await ProjectModel.create({
    //     name: "all-projects",
    //     projects: [
    //         {
    //             title: "My old portfolio website",
    //             description:
    //                 "Old portfolio built using :span:>NextJS, ThreeJS, Express, Firebase<:span:; hosted on a DigitalOcean droplet using :span:>Ngnix, and PM2.<:span:",
    //             gitHubLink: "https://github.com/Pravasith",
    //             liveLink: "https://pravasdesign.com",
    //             media: {
    //                 src: "/img/pravasith-portfolio-website.png",
    //                 alt: "pravasith-portfolio-thumbnail",
    //                 type: EMediaType.IMAGE,
    //                 id: "pravasith-portfolio-thumbnail",
    //                 width: 1000,
    //                 height: 574,
    //                 caption: "Pravasith's old portfolio site",
    //             },
    //         },
    //         {
    //             title: "Spotifinder",
    //             description:
    //                 "A Spotify clone app built using :span:>NextJS, Apollo, GraphQL<:span: on the frontend; :span:>Express, TypeGraphQL<:span: on the backend. Make sure to check the GitHub code for this!",
    //             gitHubLink:
    //                 "https://github.com/stars/Pravasith/lists/spotifinder",
    //             liveLink: "https://spotifinder.vercel.app/",
    //             media: {
    //                 src: "/img/spotifinder-graphql.png",
    //                 alt: "spotifinder thumbimage",
    //                 type: EMediaType.IMAGE,
    //                 id: "spotifinder-thumbnail",
    //                 width: 1000,
    //                 height: 574,
    //                 caption: "A very cool app with a very cool Backend",
    //             },
    //         },
    //         {
    //             title: "Into The Void",
    //             description:
    //                 "A first person 3D game built using :span:>ThreeJS and NextJS<:span:. (in progress)",
    //             gitHubLink: "https://github.com/Pravasith/into-the-void",
    //             liveLink: "https://bootes-void.vercel.app/bootes-space-mine",
    //             media: {
    //                 src: "/img/space-mine-game.png",
    //                 alt: "spacemine thumbimage",
    //                 type: EMediaType.IMAGE,
    //                 id: "spacemine-thumbnail",
    //                 width: 1000,
    //                 height: 574,
    //                 caption: "A 3D game - Into the Void",
    //             },
    //         },
    //     ],
    // })
    // res.send(textBlock)
}

export const getProjects: RequestHandler = async (_, res) => {
    const project = await ProjectModel.find()
    res.send(project)
}
