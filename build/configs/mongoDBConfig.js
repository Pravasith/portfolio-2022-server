"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const USERNAME = "pravasith", PASSWORD = "1DYZvOQPvqWX4BkF", CLUSTER_URI = "portfolio-2022-db.cb851.mongodb.net";
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER_URI}/?retryWrites=true&w=majority`;
const mongoDBConfig = {
    uri,
};
exports.default = mongoDBConfig;