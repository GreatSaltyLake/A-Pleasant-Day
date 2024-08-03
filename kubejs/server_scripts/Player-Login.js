// priority: 0
// Listen to player login event
PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // Start in Tropicraft Dimension
      // Give some items to player
      event.player.give('ftbquests:book')
      event.player.give('30x minecraft:apple')
    }
  })