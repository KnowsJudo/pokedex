import { Pokemon } from "../pokemon";

class Ivysaur extends Pokemon {
  constructor(name, number, type, evolves) {
    super(name, number, type, evolves);
  }
  _stats = {
    hp: 60,
    attack: 62,
    defense: 63,
    special: 80,
    speed: 60,
  };
  _moves = {
    sleepPowder: "Sleep Powder",
    leechSeed: "Leech Seed",
    vineWhip: "Vine Whip",
    razorLeaf: "Razor Leaf",
  };
  get stats() {
    return this._stats;
  }

  get moves() {
    return this._moves;
  }
}

export const ivysaur = new Ivysaur("Ivysaur", 2, "Grass", true);
