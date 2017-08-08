query GetSomePlayerWithTeam {
  player(id: 11) {
    name,
    team {
      id
      name
    },
    something {
      name
    }
  }
}

query GetOnlyOneTeam {
  team(name: "Fui a la pelota") {
    id
    name
    points
  }    
}

query GetTeamWithPayers {
  team(name: "Fui a la pelota") {
    name,
    something {
      name
    },
    players {
      name
    }
  }
}
