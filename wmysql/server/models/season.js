/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('season', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'season'
  });
};
