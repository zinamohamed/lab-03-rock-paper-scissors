# ROCK-PAPER-SCISSORS

## HTML 
  - Page layout (title, header, main,footer etc.)
  - Explain rules section.
  - 3 radio buttons with !same name for grouping! (rock, paper, scissors)
  - Play button
  - Div to display current wins, losses, and draws
  - Div to display result of each game (win, loss, draw)


## JS SETUP 
  - getRandomThrow function 
      a. computer returns rock, paper, scissors depending on assigned number AT RANDOMMM
  - didUserWin function
      a. Takes to parameters into consideration (playerThrow, computerThrow)
      b. returns following values.
        - draw: the throws are identical
        - win: the player's throw beats the computer throw
        - lose: the computer's throw beats the player's throw
  - Track wins, losses, and draws.
        - if player wins win++
        - if player loses lose++
        - if player draws++
  - Initial State
    -  let wins, lossses, draws = 0
  - Add event listerner 
    - playButton ('click')
