export interface ISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export const SOURCES: ISource[] = [
  {
    id: "abc-news",
    name: "ABC News",
    description: "Your trusted source for breaking news, analysis, e…interviews, headlines, and videos at ABCNews.com.",
    url: "https://abcnews.go.com",
    category: "general"
  },
  {
    id: "abc-news-au",
    name: "ABC News (AU)",
    description: "Australia's most trusted source of local, national…is, the latest business, sport, weather and more.",
    url: "http://www.abc.net.au/news",
    category: "general"
  },
  {
    id: "aftenposten",
    name: "Aftenposten",
    description: "Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.",
    url: "https://www.aftenposten.no",
    category: "general",
  },
  {
    id: "al-jazeera-english",
    name: "Al Jazeera English",
    description: "News, analysis from the Middle East and worldwide,…ies, podcasts, long reads and broadcast schedule.",
    url: "http://www.aljazeera.com",
    category: "general"
  },
  {
    id: "ansa",
    name: "ANSA.it",
    description: "Agenzia ANSA: ultime notizie, foto, video e approf…ioni, mondo, sport, calcio, cultura e tecnologia.",
    url: "http://www.ansa.it",
    category: "general",
  }
];
