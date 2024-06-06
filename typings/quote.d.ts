type QuoteFromDB = {
  uuid: string;
  id: number;
  quote: string;
  tags: string[];
  grade: string;
};

interface QuoteInApp extends QuoteFromDB {
  color: string;
}

type QuoteReport = {
  issue: string;
  description?: string;
  quote: QuoteInApp;
};

type QuoteSorting = {
  value: string;
  column: string;
  isAscending: boolean;
};
