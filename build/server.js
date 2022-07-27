"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
// process.env.NODE_ENV !== "production" &&
require("dotenv").config({
    path: path_1.default.join(__dirname, "/envs/staging.env"),
});
const routes_1 = __importDefault(require("./routes"));
const MongooseService_1 = __importDefault(require("@services/MongooseService"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
const port = 8000; // default port to listen
const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true, // <-- REQUIRED backend setting
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json({ limit: "50kb" }));
app.use(express_1.default.urlencoded({ extended: true }));
MongooseService_1.default.connect();
app.use("/", routes_1.default);
// start the Express server
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : port, () => {
    console.log(`Server started @http://localhost:${port}`);
});
