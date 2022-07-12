import { RequestHandler } from "express"
import models from "@models/index"

const { TextGroupModel } = models

// To be deleted
export const addTextGroup: RequestHandler = async (_, res) => {
    // const textBlock1 = await TextGroups.create({
    //     name: "home-section-1",
    //     page: GroupPages.HOME_PAGE,
    //     textBlocks: [
    //         {
    //             type: "h1",
    //             text: "A Product Designer :br: turned:br: Software Engineer.",
    //             order: 1,
    //         },
    //         {
    //             type: "p",
    //             text: "Hey, I'm Pravas 👋🏼, a :st>Full Stack TypeScript/JavaScript<st: developer who is passionate about delivering the best :st> User Experiences 🎨<st: & loves :st> optimizing data 🚀<st: by utilizing data structures and writing algorithms.",
    //             order: 2,
    //         },
    //     ],
    // })

    // const textBlock2 = await TextGroups.create({
    //     name: "home-section-2",
    //     page: GroupPages.HOME_PAGE,
    //     textBlocks: [
    //         {
    //             type: "h1",
    //             text: "About.",
    //             order: 1,
    //         },
    //         {
    //             type: "p",
    //             text: "I currently live in :st>Toronto, Canada 🍁 🇨🇦.<st:\n                In my :st>5 years🪄<st: of professional experience, I've helped start-ups and \n                large organizations solve user problems with technology. \n                :br: :br:\n                When I've time to spare, I like to design, build, and engineer beautiful products, physical and virtual.",
    //             order: 2,
    //         },
    //     ],
    // })

    // const textBlock3 = await TextGroups.create({
    //     name: "home-section-3",
    //     page: "HOME_PAGE",
    //     textBlocks: [
    //         {
    //             type: "h1",
    //             text: "Spare time projects. 🍓",
    //             order: 1,
    //         },
    //         {
    //             type: "p",
    //             text: "Some projects I did in the past ✨. Be sure to check out the live links!",
    //             order: 2,
    //         },
    //     ],
    // })

    // const textBlock4 = await TextGroups.create({
    //     name: "home-section-4",
    //     page: GroupPages.HOME_PAGE,
    //     textBlocks: [
    //         {
    //             type: "h1",
    //             text: `Write to me!`,
    //             order: 1,
    //         },
    //     ],
    // })

    const textGroup = await TextGroupModel.create({
        name: "meal-delivery-app",
        page: "meal-delivery-app",
        textBlocks: [
            {
                type: "h1",
                text: "A little overview",
                order: 2,
            },
            {
                type: "p",
                text: "When I worked for my start-up, I didn't have much time to care about my food habits. Started as casual tryouts, ordering food online quickly became a daily habit; this is not uncommon among most corporate millennials like me. But we can’t be blamed because after a day full of  pretend hustle-bustle, one loses the patience to stir the ladle in the pot. Meal-delivery apps to the rescue, right? Did you know Forbes estimates that online food delivery is set to supersize to a hefty $200 billion by 2025, and the users on these apps are growing by astronomical numbers year by year.",
                order: 3,
            },
        ],
    })

    res.send(textGroup)
}

export const getTextGroup: RequestHandler = async (req, res) => {
    const { page } = req.query

    const textGroup = await TextGroupModel.find({
        page,
    })

    res.send(textGroup)
}
