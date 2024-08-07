// Removes unused Desert Mining recipes
ServerEvents.recipes(apd => {
    apd.remove({
        output:
        [
        'desert_mining:master_shovel',
        'desert_mining:speedy_shovel',
        'desert_mining:fortunate_shovel',
        'desert_mining:fortunate_shovel_upgrade',
        'desert_mining:speedy_shovel_upgrade',
        'desert_mining:master_shovel_upgrade',
        'desert_mining:sandy_hand_sieve'
        ]
    })
})
