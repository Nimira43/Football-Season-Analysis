import { MatchData } from './MatchData'

export interface Analyser {
  run(matches: MatchData[]): string
}

