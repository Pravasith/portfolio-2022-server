import { RequestHandler } from "express"
import models from "@models/index"

const { TextGroupModel } = models

// To be deleted
export const addTextGroup: RequestHandler = async (req, res) => {
    // const textBlock1 = await TextGroupModel.create({
    //     name: "home-section-1",
    //     page: GroupPages.HOME_PAGE,
    //     textBlocks: [
    //         {
    //             type: "h1",
    //             text: "A Product Designer :br: turned:br: Software Engineer.",
    //             "order": 1,
    //         },
    //         {
    //             type: "p",
    //             text: "Hey, I'm Pravas 👋🏼, a :st>Full Stack TypeScript/JavaScript<st: developer who is passionate about delivering the best :st> User Experiences 🎨<st: & loves :st> optimizing data 🚀<st: by utilizing data structures and writing algorithms.",
    //             "order": 2,
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
    //             "order": 1,
    //         },
    //         {
    //             type: "p",
    //             text: "I currently live in :st>Toronto, Canada 🍁 🇨🇦.<st:\n                In my :st>5 years🪄<st: of professional experience, I've helped start-ups and \n                large organizations solve user problems with technology. \n                :br: :br:\n                When I've time to spare, I like to design, build, and engineer beautiful products, physical and virtual.",
    //             "order": 2,
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
    //             "order": 1,
    //         },
    //         {
    //             type: "p",
    //             text: "Some projects I did in the past ✨. Be sure to check out the live links!",
    //             "order": 2,
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
    //             "order": 1,
    //         },
    //     ],
    // })

    // const textGroup = await TextGroupModel.create({
    //     name: "meal-delivery-app",
    //     page: "meal-delivery-app",
    //     textBlocks: [
    //         {
    //             type: "h3",
    //             text: "A little overview",
    //             order: 2,
    //         },
    //         {
    //             type: "p",
    //             text: "Back when I worked for my start-up, I didn't have much time to care about my food habits. Started as casual tryouts, ordering food online quickly became a daily habit; this is not uncommon among most corporate millennials like me. But we can’t be blamed because after a day full of  pretend hustle-bustle, one loses the patience to stir the ladle in the pot. Meal-delivery apps to the rescue, right? Did you know Forbes estimates that online food delivery is set to supersize to a hefty $200 billion by 2025, and the users on these apps are growing by astronomical numbers year by year.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "With increasing user size, restaurants and food options keep increasing. As a result, users get flooded with a great deal of data when they open their meal delivery app of choice. There comes a time when customers ought to be presented with qualitative data or at least an easy way to filter unnecessary data.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: ":st>Etsy for food delivery<st:",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "On a different note, with hundreds of restaurants trying to get into the online game, it is becoming a daunting task for local restaurants to keep their business going. So this is my attempt to design a meal-delivery app that incorporates all our local Grandma’s Bakeries and helps them connect to us millennials.",
    //             order: 3,
    //         },
    //         {
    //             type: "h3",
    //             text: "Problems with today’s food apps",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "I met quite several employees from a diverse range of companies a few years ago. I interviewed twenty employees who were friendly to me and a few other co-workers. Listening to them, I could connect so much about the issues generated by these apps, and I narrowed them down to three main ones.",
    //             order: 3,
    //         },
    //         {
    //             type: "li",
    //             text: "Apps eating into a huge chunk of the Millenial’s income;;;Health degradation;;;Distracting Ads - time wasted in analysing offers",
    //             order: 3,
    //         },
    //         {
    //             type: "h3",
    //             text: "My design solution",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "My app’s core design is done in steps without completely altering the traditional essence of food ordering. To begin with the process, we need to understand the behavior of the users. So to make it easier, I created two personas that collectively encompass all the food traits of the people I interviewed. Meet Millie and Walden, our 9 to 5 job-ing personas -",
    //             order: 3,
    //         },
    //         {
    //             type: "h3",
    //             text: "Core experience",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: ":st>Food centric design<st:",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "Most users I interviewed told me that they spend a lot of time deciding what they want which annoys them. So I deduced that there are only 3 cases that reflect their state of mind when they intend to order -",
    //             order: 3,
    //         },
    //         {
    //             type: "li",
    //             text: "I know what I want to order;;;I don’t know what to order but I feel like eating something spicy/junk/sweet;;;I have no idea what I want, so show me the options",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "Addressing this, the best way would be to let the user answer the question, whichever one amongst the 3 they're confronted with at the moment. And the answer would be much more evident if there are choices of food on their screen first rather than choices of restaurants. So I designed a front page with a minimalistic set of cards(without any unnecessary details) arranged in the following order - Regulars, Food Categories, Cuisines, and then Restaurants and Offers.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: ":st>Curated list artwork uniformity, and social proof to validate local restaurants<st:",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "Ongoing offers are shown right below cuisines section because for most users, offers are a crucial to determine the order. But simple restaurant-offer-posters on the screen force the user to perform involuntary and stressful calculations to buy that perfect value for money deal meal.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "I have intensified the offer details and added the count of availed offers in the last 24 hours so users can rely on Social Proof to choose between offers.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: ":st>Hierarchy of elements - Hashtag-based segregation<st:",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "Choosing the right meal is greatly simplified if we follow the hashtag approach like Instagram or Twitter because most of the times, couch-diners are looking for the main course item which is not necessarily associated with a brand or a restaurant.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "The hashtag approach not only narrows down items to peculiar choices but also provides restaurants a way to market in narrow pipelines. This approach is also familiar to today’s Millenials who comprise more than 70% of meal-delivery app customers.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: ":st>Food ratings over Restaurant ratings<st:",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "Food ratings are more significant than restaurant ratings because even the best restaurant has only a few signature dishes which everyone likes.",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "Design for a particular category, in this case, ice cream. The page is divided into sections, arranged priority-wise. My top metrics for ranking the relevance of these sections are -",
    //             order: 3,
    //         },
    //         {
    //             type: "li",
    //             text: ":st>Social proof<st: - Public favourites section which contains items ranked in an order determined by the item rating : number of ratings proportion.;;;:st>Personal preferences<st: - Previous orders are shown in My favourites section. Ratings or reviews by the user are shown as well to help them identify the item.;;;Offers on dishes/items;;;New local restaurants;;;Promoted restaurants",
    //             order: 3,
    //         },
    //         {
    //             type: "h3",
    //             text: "Restaurant pages - A focus on authenticity",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "To promote local restaurants that are genuinely great, users should be shown everything that makes a local restaurant great, like the pictures of owners and their story, where they source their ingredients from, restaurant pictures .. and so on. Customer testimonials are key in my design, no I’m not talking just about internet reviews, but the walk-in customer testimonials as well.",
    //             order: 3,
    //         },
    //         {
    //             type: "h3",
    //             text: "Personal health and money tracker",
    //             order: 3,
    //         },
    //         {
    //             type: "p",
    //             text: "For explorers, health is a high priority, and so is budget-spending for couch-diners, so I designed a system that alerts users when they consume more calories or spend more money than usual.",
    //             order: 3,
    //         },
    //         {
    //             type: "h3",
    //             text: "Fin.",
    //             order: 3,
    //         },
    //     ],
    // })

    let response: any = { message: "text block error" }

    try {
        response = await TextGroupModel.create(req.body)
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}

export const getTextGroup: RequestHandler = async (req, res) => {
    const { page } = req.query

    let response: any = { message: "text block error" }

    try {
        response = await TextGroupModel.find({
            page,
        })
    } catch (err) {
        console.error(err)
    } finally {
        res.send(response)
    }
}
