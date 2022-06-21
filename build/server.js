"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("@routes/index"));
const mongooseService_1 = __importDefault(require("@services/mongooseService"));
const app = (0, express_1.default)();
const port = 8000; // default port to listen
const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true, // <-- REQUIRED backend setting
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
mongooseService_1.default.connectToMongoDBWithMongoose();
app.use("/", index_1.default);
// start the Express server
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : port, () => {
    console.log(`Server started @http://localhost:${port}`);
});
