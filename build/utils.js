"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => {
        return parseInt(value);
    });
};
exports.dateStringToDate = dateStringToDate;
