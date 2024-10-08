"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_routing_1 = __importDefault(require("./routing/user.routing"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || "3000";
app.use(express_1.default.json());
app.use(user_routing_1.default);
app.listen(PORT, () => {
    console.log(`Listen to ${PORT}`);
});
