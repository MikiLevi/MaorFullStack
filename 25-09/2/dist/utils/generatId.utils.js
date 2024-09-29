"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUniqueId = createUniqueId;
const uuid_1 = require("uuid");
function createUniqueId() {
    const newId = (0, uuid_1.v4)();
    return newId;
}
