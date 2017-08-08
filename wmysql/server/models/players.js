/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('players', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    idTeam: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    captain: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'players'
  });
};
