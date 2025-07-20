export interface WordData {
  word: string;
  ipas: ipasAdioLinks;
  audio_links: ipasAdioLinks;
  origin: string;
  meanings: WordDataMeaning[];
}

export interface ipasAdioLinks {
  uk: string;
  us: string;
}

export interface WordDataMeaning {
  posType: string | null;
  guideWordDefs: GuideWordDef[];
}

export interface GuideWordDef {
  guideWord: string | null;
  meanings: GuideWordDefMeaning[];
}

export interface GuideWordDefMeaning {
  definition: string;
  cerfLevel: string | null;
  examples: string[] | null;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWordData(json: string): WordData {
    return JSON.parse(json);
  }

  public static wordDataToJson(value: WordData): string {
    return JSON.stringify(value);
  }
}
