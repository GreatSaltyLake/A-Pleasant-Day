// Adds sticks to Shimmerweed drops

LootJS.modifiers((apd) => {
  apd
      .addBlockLootModifier("undergarden:shimmerweed")
      .randomChance(0.5)
      .addLoot("minecraft:stick");
});

LootJS.modifiers((apd) => {
  apd
      .addBlockLootModifier("undergarden:tall_shimmerweed")
      .randomChance(0.55)
      .addLoot("minecraft:stick");
});
