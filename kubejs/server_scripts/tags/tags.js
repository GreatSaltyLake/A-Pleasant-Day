// Unifies various odd mod items to work as intended
ServerEvents.tags('item', apd => {
    // Mystic's Biomes fixes
    apd.add('minecraft:smelts_to_glass', ['mysticsbiomes:lush_sand'])
    apd.add('naturalist:tortoise_tempt_items', ['mysticsbiomes:spring_bamboo'])
})