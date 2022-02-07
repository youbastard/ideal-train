# Applicant Coding Challenge

### Installation

- Clone the repository from Github

  `git clone git@github.com:youbastard/ideal-train.git appchallenge && cd appchallenge`

- Install the NPM dependencies

  `npm install`

- Create a .env file in the root of the project with the following content. The value of `VITE_MLB_GQL_TOKEN` will be supplied in my email

  ```bash
  #! .env
  VITE_MLB_GQL_SOURCE=https://musical-midge-96.hasura.app/v1/graphql
  VITE_MLB_GQL_TOKEN=
  ```

- Start the local server

  `npm run dev`


### Directions

The objective of this exercise is to gain a general overview of your coding style and ability. I expect that since this is simply an interview challenge, the application will be a little rough around the edges. An emphasis should be made on clean and concise code, use of standard frameworks, and user experience.
At a high-level your application must meet the following requirements:

- **Search Function**: It should have the ability to search for a player given a combination of player lastname and firstname. It should then display this list to the user along with some pertinent information about the player to aid in the user finding the specific player the user was looking for. Upon selecting a player from the list, it should display more detailed biographical information about the player (see Player Info below).

- **Team Roster**: It should include a list of teams, and allow users to select a specific team in order to view that team’s complete roster. Selecting any player on the roster should display more detailed biographical information about the player (see Player Info below).

- **Player Info**: For each player, it should display the player’s bio info along with some simple statistics about each player for the last 3 seasons:
  - Hitters (positions 2-10): Games, At Bats, Hits, Strike Outs, Walks (intentional+unintentional), AVG, OBP, SLG, OPS
  - Pitchers (positions 1,11,12): Games, Games Started, Wins-Losses-Saves, Innings Pitched, Hits, Strike Outs, Walks (intentional+unintentional), ERA
