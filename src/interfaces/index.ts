export interface Prod {
  key: number;
  data: {
    category: string;
    description: string;
    image: string;
    price: number;
    id: number;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  };
}

export interface Com {
  id: number;
  body: string;
  email: string;
  postID: number;
}

export interface ProdNoProps {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}
