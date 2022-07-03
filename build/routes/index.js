"use strict"
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected)
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            )
        })
    }
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, "__esModule", { value: true })
const express_1 = require("express")
const dotenv_1 = __importDefault(require("dotenv"))
const index_1 = __importDefault(require("@models/index"))
const interface_1 = require("@models/TextGroups/interface")
const api_1 = require("@lib/server/api")
// import urls from "./urls"
dotenv_1.default.config()
const router = (0, express_1.Router)()
router.get(api_1.BASE_URLS.HOME, (_, res) => {
    res.send({
        hello: "Welcome to Pravasith's BE Server!",
    })
})
router.get(api_1.API_ROUTE_URLS.CREATE_TEXT_BLOCK, (_, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const { TextGroups } = index_1.default
        const textBlock = yield TextGroups.create({
            name: "home-section-1",
            textBlocks: [
                {
                    type: interface_1.ETextTypes.H1,
                    text: `A Product Designer :br: turned:br: Software Engineer.`,
                },
                {
                    type: interface_1.ETextTypes.P,
                    text: "Hey, I'm Pravas 👋🏼, a :span:>Full Stack TypeScript/JavaScript<:span: developer who is passionate about delivering the best :span:> User Experiences 🎨<:span: & loves :span:> optimizing data 🚀<:span: by utilizing data structures and writing algorithms.",
                },
            ],
        })
        res.send(textBlock)
    })
)
exports.default = router
