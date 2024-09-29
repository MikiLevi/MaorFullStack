"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = createNewUser;
const generatId_utils_1 = require("./generatId.utils");
const password_utils_1 = require("./password.utils");
function createNewUser(userName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = {
            id: (0, generatId_utils_1.createUniqueId)(),
            password: yield (0, password_utils_1.encryptsPassword)(password),
            userName: userName
        };
        return user;
    });
}
