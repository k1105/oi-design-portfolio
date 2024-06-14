declare global {
  type Work = {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    releaseDate: string;
    title: string;
    description: string;
    category: string[] | null;
    year: string;
    credit: string;
    images:
      | {
          url: string;
          height: number;
          width: number;
        }[]
      | null;
    slug: string;
  };
}

export {};
