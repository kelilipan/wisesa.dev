export type ProjectType = {
  title: string;
  description: string;
  createdAt: string;
  image: string;
  technology?: {
    name: string;
    url?: string;
  }[];
  source?: string;
  url?: string;
};
