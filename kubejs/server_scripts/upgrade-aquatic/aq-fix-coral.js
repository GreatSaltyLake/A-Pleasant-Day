// Adds intended coralstone recipe from Upgrade Aquatic

ServerEvents.recipes(apd => {
    apd.shaped('upgrade_aquatic:coralstone', 
    [
     'AA ',
     'AA ',
     '   '
    ], 
    {
        A: 'minecraft:nautilus_shell'
    })
})
