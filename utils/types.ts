export type PowerStats = {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
};

export enum Filter {
  intelligence = 'intelligence',
  strength = 'strength',
  speed = 'speed',
  durability = 'durability',
  power = 'power',
  combat = 'combat',
  none = '',
}

export type Hero = {
  id: string;
  name: string;
  appearance: {
    "eye-color": string;
    gender: string;
    "hair-color": string;
    height: string[];
    race: string;
    weight: string[];
  };
  biography: {
    aliases: string[];
    alignment: string;
    "alter-egos": string;
    "first-appearance": string;
    "full-name": string;
    "place-of-birth": string;
    publisher: string;
  };
  connections: {
    "group-affiliation": string;
    relatives: string;
  };
  image: {
    url: string;
  };
  powerstats: PowerStats;
  work: {
    base: string;
    occupation: string;
  };
};
