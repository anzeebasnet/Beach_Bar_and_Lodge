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

export type RoomCardType = {
  images: string[];
  icon: string;
  title: string;
  description: string[];
  orientation?: "left" | "right";
  price: {
    OnePerson: string;
    TwoPerson: string;
  };
};

export type BookingDetails = {
  checkin: Date;
  checkout: Date;
  rooms: {
    adults: string;
    children: string[];
  }[];
};
