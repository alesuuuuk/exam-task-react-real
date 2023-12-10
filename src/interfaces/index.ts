export interface Prod {
  key: number;
  data: {
    category: string;
    description: string;
    image: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
    title: string;
  };
}

export interface Com {
  body: string;
  email: string;
  id: number;
  postID: number;
}

export interface ProdNoProps {
  id: number,
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