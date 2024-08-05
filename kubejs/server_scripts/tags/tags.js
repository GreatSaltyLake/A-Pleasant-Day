// Unifies various odd mod items to work as intended
ServerEvents.tags('item', apd => {
    apd.add('forge:sand', ['tropicraft:purified_sand','tropicraft:packed_purified_sand'])
    apd.add('forge:sand/colorless', ['tropicraft:purified_sand','tropicraft:packed_purified_sand'])
    apd.add('minecraft:smelts_to_glass', ['tropicraft:purified_sand','tropicraft:packed_purified_sand'])
})