query QuerySingleAndroid {
  android(name: "Roy Batty") {
    name
    gender
    model
  }
}

query QueryAllAndroid {
  android {
    name
    gender
    model
  }
}

mutation AddAnndroid {
  upsertAndroid(
    name: "Arnol", 
    gender: "Male",
    model: "NEXUS-1"
  ) {
    name
  }
}