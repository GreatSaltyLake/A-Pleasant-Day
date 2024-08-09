// Removes unused Upgrade Aquatic items
ServerEvents.recipes(apd => {
    apd.remove({
        output:
        [
        '#upgrade_aquatic:bedrolls'
        ]
    })
})
