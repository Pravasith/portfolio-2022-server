import { Router } from "express"
import dotenv from "dotenv"
import models from "@models/index"
import { ETextBlockTypes, ETextTypes } from "@models/TextBlocks/interface"
import { API_ROUTE_URLS, BASE_URLS } from "@lib/server/api"
import { ESrcType } from "@models/MediaBlocks/interface"

dotenv.config()

const router = Router()

router.get(BASE_URLS.HOME, (_, res) => {
    res.send({
        hello: "Welcome to Pravasith's BE Server!",
    })
})

router.get(API_ROUTE_URLS.ADD_TEXT_BLOCK, async (_, res) => {
    const { TextBlocks } = models

    // const textBlock = await TextBlocks.create({
    //     name: "home-section-4",
    //     type: ETextBlockTypes.HOME_PAGE,
    //     textBlocks: [
    //         {
    //             type: ETextTypes.H1,
    //             text: `Write to me!`,
    //         },
    //     ],
    // })

    // res.send(textBlock)
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

router.get(API_ROUTE_URLS.GET_TEXT_BLOCKS, async (req, res) => {
    const { TextBlocks } = models
    const { type } = req.query

    const textBlock = await TextBlocks.find({
        type,
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
