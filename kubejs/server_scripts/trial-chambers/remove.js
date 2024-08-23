// Removes unused Trial Chambers recipes
ServerEvents.recipes(apd => {
    apd.remove({
        output:
        [
            'trials:crafter'
        ]
    })
})
