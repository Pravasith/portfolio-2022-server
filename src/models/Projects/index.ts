import { mediaBlockSchema } from "@models/MediaBlock/index"
import { ProjectsType, ProjectType } from "./interface"
import { model, Schema } from "mongoose"

const projectSchema = new Schema<ProjectType>({
    title: String,
    description: String,
    gitHubLink: String,
    liveLink: String,
    media: mediaBlockSchema,
})

const projectsSchema = new Schema<ProjectsType>({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    projects: {
        type: [projectSchema],
    },
})

export default model<ProjectsType>("Project", projectsSchema)
