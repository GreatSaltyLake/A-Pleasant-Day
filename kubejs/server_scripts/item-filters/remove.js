// Removes unused Item Filters recipes
ServerEvents.recipes(apd => {
    apd.remove({
        output:
        [
            '#itemfilters:filters'
        ]
    })
})
