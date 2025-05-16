export interface PhotoInterface {
  path: string;
  type: string;
  size: number;
  width: number;
  height: number;
  alt?: string;
  title?: string;
}

export interface PageInterface {
  id: number;
  title: string;
  content?: string;
  tags?: string[];
  photos?: PhotoInterface[];
}

//კითხვის ნიშანი აღნიშნავს რომ ოფშენალია, ანუ შეიძ₾ება რომ არ იყოს.
