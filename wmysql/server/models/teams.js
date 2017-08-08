/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define('teams', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING(250),
      allowNull: true,
      defaultValue: 'Equipo.jpg'
    },
    zone: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    points: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    matchesPlayed: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    matchesWon: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    matchesDrawn: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    matchesLost: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    goalsScored: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    goalsReceived: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    dif: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'teams'
  });
};
