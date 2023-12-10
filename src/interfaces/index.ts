export interface Prod {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export interface Com {
    body: string;
    email: string;
    id: number;
    postID: number;
  };

