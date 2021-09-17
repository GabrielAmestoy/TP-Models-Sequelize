module.exports = (sequelize,DataTypes) =>{
    let alias = "Actor";
    let cols = {
        id : {
            type : DataTypes.INTEGER.UNSIGNED, // insigned significa sin signos +-
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        first_name :{
            type : DataTypes.STRING(100),
            allowNull:false
        },
        last_name : {
            type : DataTypes.STRING(100),
            allowNull: false
        },
        rating : {
            type : DataTypes.DECIMAL(3,1),
            dafaultValue: null
        },
        favorite_movie_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            dafaultValue: null
        }
    }; // actores, actor-movies y genres
    let config = {
        tableName: 'actors',
        timestamps: true,
        underscored: true //permite utilizar guion bajo utlizado en los atributos de la base de datos
    };

    const Actor = sequelize.define(alias,cols,config);
    
    return Actor;
}