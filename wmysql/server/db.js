import Sequelize from 'sequelize';

const sequelizeTorneoDeFutbol = new Sequelize(
    'torneodefutbol',
    'graphqltest', 
    'graphqldb', 
    {
        dialect: 'mysql',
        host: '127.0.0.1',
        define: {
        timestamps: false
    }   
});

let goal = sequelizeTorneoDeFutbol.import('./models/goals');
let incident = sequelizeTorneoDeFutbol.import('./models/incidents');
let matche = sequelizeTorneoDeFutbol.import('./models/matches');
let player = sequelizeTorneoDeFutbol.import('./models/players');
let season = sequelizeTorneoDeFutbol.import('./models/season');
let team = sequelizeTorneoDeFutbol.import('./models/teams');

team.hasMany(player, {
  foreignKey: 'idTeam'
});

player.belongsTo(team, {
  foreignKey: 'idTeam'
});

export default sequelizeTorneoDeFutbol;