/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('matches', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team1: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    team2: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    season: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    playoff: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    manOfTheMatch: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    played: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'matches'
  });
};
