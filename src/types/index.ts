export interface SearchAdviceType {
  total_results: number;
  query: string;
  slips: { id: number; advice: string }[];
}

export interface RandomAdvice {
  id: number;
  advice: string;
}

export interface ApiError {
  type?: string;
  text?: string;
}

export interface ButtonProps {
  text: string;
  onClickHandler?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
}

export interface ImageProps {
  src: string;
  description: string;
  width: string;
  height: string;
}

export interface RoundButtonProps {
  onClickHandler: () => void;
}

export interface InputProps {
  searchTerm: string;
  onClickHandlerSearch: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchResultsProps {
  result: SearchAdviceType;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface RandomAdviceTextProps {
  loading: boolean;
  error: ApiError;
  advice?: RandomAdvice;
}
