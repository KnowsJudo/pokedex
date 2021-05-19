import { Pokemon } from "../pokemon";

class Venusaur extends Pokemon {
  constructor(name, number, type, evolves) {
    super(name, number, type, evolves);
  }
  _stats = {
    hp: 80,
    attack: 82,
    defense: 83,
    special: 100,
    speed: 80,
  };
  _moves = {
    sleepPowder: "Sleep Powder",
    petalDance: "Petal Dance",
    razorLeaf: "Razor Leaf",
    solarBeam: "Solar Beam",
  };
  get stats() {
    return this._stats;
  }

  get moves() {
    return this._moves;
  }
}

export const venusaur = new Venusaur("Venusaur", 3, "Grass", false);
