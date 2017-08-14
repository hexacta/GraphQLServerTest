# GraphQL con MongoDB
Este es un ejemplo de como trabajar con GraphQL teniendo como fuente de datos MongoDB.

### Datos
Restaurar los datos que se encuentran en la carpeta *data/data_mogo_bladerunner_db*.
En el archivo *server/mongoService.js* esta la configuración a la base de datos.

### Instalar e iniciar la app
```sh
npm install
node index.js
```

El servicio estará escuchando en el puerto 2400. El ejemplo utiliza la herramienta GraphiQL para poder realizar las consultas: ```http://localhost:2400/graphql```

### Query / Mutation
Estos son unos ejemplos de las operaciones que podemos realizar.
```json
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
```
