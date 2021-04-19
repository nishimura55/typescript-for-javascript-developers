export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number
};

type PartalType = Partial<Profile>;

type RequiredType = Required<Profile>;