export type WilderType = {
  _id: string;
  city: string;
  name: string;
  description: string;
  skills: any[];
  // handleDelete: (_id: string) => Promise<void>;
};

export type WilderSkills = {
  title: string;
  votes: number;
};
