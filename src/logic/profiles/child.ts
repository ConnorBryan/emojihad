import { IProfileCharacter } from "../../types";

export default {
  emoji: "🧒",
  name: "Child",
  abilities: [
    {
      name: "Growing Mind",
      description: "Instead of rolling, re-use the roll from last round.",
      recharge: 5
    }
  ]
} as IProfileCharacter;
