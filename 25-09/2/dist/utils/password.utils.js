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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptsPassword = encryptsPassword;
exports.passwordChecker = passwordChecker;
const bcrypt_1 = __importDefault(require("bcrypt"));
function encryptsPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        console.log(hashPassword);
        return hashPassword;
    });
}
function passwordChecker(password, hashPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const passwordTrue = yield bcrypt_1.default.compare(password, hashPassword);
        console.log(passwordTrue);
        return passwordTrue;
    });
}
