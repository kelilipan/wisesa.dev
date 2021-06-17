export type ProjectType = {
  title: string;
  description: string;
  createdAt: string;
  image: string | any;
  technology?: {
    name: string;
    url?: string;
  }[];
  source?: string;
  url?: string;
};
