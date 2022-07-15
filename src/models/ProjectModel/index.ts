import { ProjectsType, ProjectType } from "./interface"
import { model, Schema } from "mongoose"
import { mediaBlockSchema } from "@models/MediaGroupModel"

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

const ProjectModel = model<ProjectsType>("Project", projectsSchema)

export default ProjectModel
