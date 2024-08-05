// Adds intended campfire recipes from No Tree Punch

ServerEvents.recipes(apd => {
        apd.shaped('minecraft:campfire', 
        [
         ' A ',
         'ABA',
         'CCC'
        ], 
        {
            A: '#forge:rods/wooden',
            B: 'notreepunching:fire_starter',
            C: '#minecraft:logs'
        })
        apd.shaped('minecraft:soul_campfire',
            [
                ' A ',
                'ABA',
                'CCC'
            ],
            {
                A: '#forge:rods/wooden',
                B: 'notreepunching:fire_starter',
                C: 'minecraft:soul_soil'
            })
 })
