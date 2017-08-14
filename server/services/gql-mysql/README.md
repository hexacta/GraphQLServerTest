# GraphQL con MySQL
Este es un ejemplo de como trabajar con GraphQL teniendo como fuente de datos MySQL.

### Datos
Restaurar los datos que se encuentran en la carpeta *data/data_mysql*
En el archivo *server/db.js* esta la configuración a la base de datos.

### Instalar e iniciar la app
```sh
npm install
node index.js
```

El servicio estará escuchando en el puerto 2500. El ejemplo utiliza la herramienta GraphiQL para poder realizar las consultas: ```http://localhost:2500/graphql```

### Query / Mutation
Estos son unos ejemplos de las operaciones que podemos realizar.
```json
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

```
