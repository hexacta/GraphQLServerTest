/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('goals', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idPlayer: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    idMatch: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'matches',
        key: 'id'
      }
    },
    selfGoal: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    shootout: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    idTeam: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    }
  }, {
    tableName: 'goals'
  });
};
