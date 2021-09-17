module.exports = (sequelize,DataTypes) =>{
    let alias = "Actor_movie";
    let cols = {
        id : {
            type : DataTypes.INTEGER(10).UNSIGNED, // insigned significa sin signos +-
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        actor_id : {
            type : DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        movie_id : {
            type : DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        }
    }; // actores, actor-movies y genres
    let config = {
        tableName: 'actor_movie',
        timestamps: true,
        underscored: true //permite utilizar guion bajo utlizado en los atributos de la base de datos
    };
    
    const Actor_movie = sequelize.define(alias,cols,config);
    
    return Actor_movie;
}