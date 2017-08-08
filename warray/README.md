mutation AddTodo {
  add(title: "My first task") {
    title
  }
}

query GetTasts {
  todos {
    title
    data {
      message
    }
    something {
      name
    },
    somethingWithoutResolver {
      name
    }
  }
}