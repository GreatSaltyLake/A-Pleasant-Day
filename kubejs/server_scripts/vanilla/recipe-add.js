// Adds additional recipes for compat that involve vanilla items

ServerEvents.recipes(apd => {
    apd.shaped('minecraft:oak_planks', 
    [
     'AA ',
     'AA ',
     '   '
    ], 
    {
        A: 'minecraft:stick'
    })
})

ServerEvents.recipes(apd => {
    apd.shaped('minecraft:bundle', 
    [
     'ABA',
     'B B',
     'BBB'
    ], 
    {
        A: 'minecraft:string',
        B: 'minecraft:rabbit_hide'
    })
})
