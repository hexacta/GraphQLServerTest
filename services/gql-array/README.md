# GraphQL con un array como fuente de datos
Este es un ejemplo de como trabajar con GraphQL teniendo como fuente de datos un array.

### Instalar e iniciar la app
```sh
npm install
node index.js
```

El servicio estará escuchando en el puerto 2400. El ejemplo utiliza la herramienta GraphiQL para poder realizar las consultas: ```http://localhost:2400/graphql```

### Query / Mutation
Estos son unos ejemplos de las operaciones que podemos realizar.
```json
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
```
