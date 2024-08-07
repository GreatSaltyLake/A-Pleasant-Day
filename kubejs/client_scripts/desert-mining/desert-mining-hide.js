// Hides unused Desert Mining items in JEI
JEIEvents.hideItems((apd) => {
    apd.hide([
        'desert_mining:master_shovel',
        'desert_mining:speedy_shovel',
        'desert_mining:fortunate_shovel',
        'desert_mining:fortunate_shovel_upgrade',
        'desert_mining:speedy_shovel_upgrade',
        'desert_mining:master_shovel_upgrade',
        'desert_mining:sandy_hand_sieve'
    ])
})