module.exports = (sequelize,DataTypes) =>{
    let alias = "Pelicula";
    let cols = {
        id : {
            type : DataTypes.INTEGER.UNSIGNED, // insigned significa sin signos +-
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        title : {
            type : DataTypes.STRING(500),
            allowNull:false
        },
        rating : {
            type : DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards :{
            type : DataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            dafaultValue: 0
        },
        release_date : {
            type : DataTypes.DATE,
            allowNull : false
        },
        length : {
            type : DataTypes.INTEGER.UNSIGNED,
            dafaultValue: null
        },
        genre_id : {
            type : DataTypes.INTEGER.UNSIGNED,
            dafaultValue: null
        }
    }; // actores, actor-movies y genres
    let config = 
    {
        tableName: 'movies',
        timestamps: true, // si en la tabla de mysql no estan las filas: created_at y updated_at, entonces va(timestamps : false,)
        underscored: true //permite utilizar guion bajo utlizado en los atributos de la base de datos
    };


    const Movie = sequelize.define(alias,cols,config);
    
    return Movie;
}