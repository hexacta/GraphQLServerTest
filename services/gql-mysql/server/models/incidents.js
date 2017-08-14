/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('incidents', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    idPlayer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'players',
        key: 'id'
      }
    },
    idMatch: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'matches',
        key: 'id'
      }
    }
  }, {
    tableName: 'incidents'
  });
};
