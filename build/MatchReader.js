"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        // .map(
        //   (row: string[]): MatchData => {
        //     return [
        //       dateStringToDate(row[0]),
        //       row[1],
        //       row[2],
        //       parseInt(row[3]),
        //       parseInt(row[4]),
        //       row[5] as MatchResult,
        //       row[6]
        //     ]
        //   }
        // )
    }
}
exports.MatchReader = MatchReader;
