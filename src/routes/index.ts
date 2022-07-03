import { Router } from "express"
import dotenv from "dotenv"
import models from "@models/index"

import { API_ROUTE_URLS, BASE_URLS } from "@lib/server/api"
import { ETextBlockTypes, GroupPages } from "@models/TextGroups/interface"

dotenv.config()

const router = Router()

router.get(BASE_URLS.HOME, (_, res) => {
    res.send({
        hello: "Welcome to Pravasith's BE Server!",
    })
})

router.get(API_ROUTE_URLS.ADD_TEXT_BLOCK, async (_, res) => {
    const { TextGroups } = models

    const textBlock1 = await TextGroups.create({
        name: "home-section-1",
        page: GroupPages.HOME_PAGE,
        textBlocks: [
            {
                type: "h1",
                text: "A Product Designer :br: turned:br: Software Engineer.",
                order: 1,
            },
            {
                type: "p",
                text: "Hey, I'm Pravas 👋🏼, a :st>Full Stack TypeScript/JavaScript<st: developer who is passionate about delivering the best :st> User Experiences 🎨<st: & loves :st> optimizing data 🚀<st: by utilizing data structures and writing algorithms.",
                order: 2,
            },
        ],
    })

    const textBlock2 = await TextGroups.create({
        name: "home-section-2",
        page: GroupPages.HOME_PAGE,
        textBlocks: [
            {
                type: "h1",
                text: "About.",
                order: 1,
            },
            {
                type: "p",
                text: "I currently live in :st>Toronto, Canada 🍁 🇨🇦.<st:\n                In my :st>5 years🪄<st: of professional experience, I've helped start-ups and \n                large organizations solve user problems with technology. \n                :br: :br:\n                When I've time to spare, I like to design, build, and engineer beautiful products, physical and virtual.",
                order: 2,
            },
        ],
    })

    const textBlock3 = await TextGroups.create({
        name: "home-section-3",
        page: "HOME_PAGE",
        textBlocks: [
            {
                type: "h1",
                text: "Spare time projects. 🍓",
                order: 1,
            },
            {
                type: "p",
                text: "Some projects I did in the past ✨. Be sure to check out the live links!",
                order: 2,
            },
        ],
    })

    const textBlock4 = await TextGroups.create({
        name: "home-section-4",
        page: GroupPages.HOME_PAGE,
        textBlocks: [
            {
                type: "h1",
                text: `Write to me!`,
                order: 1,
            },
        ],
    })

    res.send("textBlock")
})

router.get(API_ROUTE_URLS.ADD_PROJECTS, async (_, res) => {
    const { Projects } = models

    // const textBlock = await Projects.create({
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
    //                 type: ESrcType.IMAGE,
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
    //                 type: ESrcType.IMAGE,
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
    //                 type: ESrcType.IMAGE,
    //                 id: "spacemine-thumbnail",
    //                 width: 1000,
    //                 height: 574,
    //                 caption: "A 3D game - Into the Void",
    //             },
    //         },
    //     ],
    // })

    // res.send(textBlock)
})

router.get(API_ROUTE_URLS.ADD_MEDIA, async (_, res) => {
    const { MediaBlocks } = models

    // const textBlock = await MediaBlocks.create({
    //     src: "https://folio-pics.s3.eu-west-2.amazonaws.com/project-3-cover.jpg",
    //     alt: "AR Helmet",
    //     type: ESrcType.IMAGE,
    //     id: "ar-helmet",
    //     width: 1000,
    //     height: 572,
    //     page: "fun",
    //     caption: "AR Helmet",
    //     showCaption: true,
    //     hyperlink: "/blogs/ar-helmet",
    // })

    // res.send(textBlock)
})

router.get(API_ROUTE_URLS.GET_TEXT_GROUPS, async (req, res) => {
    const { TextGroups } = models
    const { page } = req.query

    const textBlock = await TextGroups.find({
        page,
    })

    res.send(textBlock)
})

router.get(API_ROUTE_URLS.GET_PROJECTS, async (_, res) => {
    const { Projects } = models

    const textBlock = await Projects.find()

    res.send(textBlock)
})

router.get(API_ROUTE_URLS.GET_MEDIA, async (req, res) => {
    const { MediaBlocks } = models
    const { page } = req.query

    const textBlock = await MediaBlocks.find({
        page,
    })

    res.send(textBlock)
})

export default router
