export interface CardType {
  id: number;
  title: string;
  image: string;
  desc: string;
}

export interface BlogType {
  id: number;
  title: string;
  image: string;
  desc: string;
}

export interface RoomType {
  id: number;
  title: string;
  images: string[];
  imageAlt: string;
  discount_price: number;
  price: number;
  currency: string;
  priceInterval: string;
  description: string;
  detailedDescription: string;
  amenities: string[];
}

export type RoomsData = {
  title: string;
  heading: string;
  rooms: RoomType[];
};
