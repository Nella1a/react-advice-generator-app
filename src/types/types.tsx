export type Advice = {
  id: number;
  advice: string;
  date?: number;
};

export type Error = {
  type: string;
  text: string;
};

export type RandomAdviceApiResponse = { slip: Advice } | { message: Error };

export type SearchAdviceApiResponse =
  | {
      total_results: number;
      query: string;
      slips: Advice[];
    }
  | { message: Error };
