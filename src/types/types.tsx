export type SearchAdviceType = {
  total_results: number;
  query: string;
  slips: { id: number; advice: string }[];
};

export type RandomAdvice = {
  id: number;
  advice: string;
};

export type Error = {
  type?: string;
  text?: string;
};

export type RandomAdviceApiResponse =
  | { slip: RandomAdvice }
  | { message: Error };

export type SearchAdviceApiResponse = SearchAdviceType | { message: Error };
