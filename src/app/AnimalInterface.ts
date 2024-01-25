export interface Animal {
  id: number;
  name: string;
  species: string;
  foods: {
    likes: string[];
    dislikes: string[];
  };
}
