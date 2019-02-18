export interface IShortSource {
  id: string;
  name: string;
}

export interface INews {
  author: string;
  title: string;
  content?: string;
  description?: string;
  publishedAt?: string;
  source?: IShortSource;
  url?: string;
  urlToImage?: string;
  id?: string;
  _id?: string;
  text?: string;
  date?: string;
}

export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}
