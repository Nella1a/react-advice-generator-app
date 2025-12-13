export interface SearchAdviceType {
  total_results: number;
  query: string;
  slips: { id: number; advice: string }[];
};

export interface RandomAdvice {
  id: number;
  advice: string;
};

export interface ApiError {
  type?: string;
  text?: string;
};
