"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var WilderSchema = new mongoose_1.Schema({
    name: { type: String },
    city: { type: String },
    description: { type: String },
    skills: [{ title: String, votes: Number }],
});
var WilderModel = (0, mongoose_1.model)("wilder", WilderSchema);
exports.default = WilderModel;
