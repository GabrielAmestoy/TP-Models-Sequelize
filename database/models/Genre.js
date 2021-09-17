module.exports = (sequelize,DataTypes) =>{
    let alias = "Genero";
    let cols = {
        id : {
            type : DataTypes.INTEGER.UNSIGNED, // insigned significa sin signos +-
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        name :{
            type : DataTypes.STRING(100),
            allowNull:false
        },
        ranking : {
            type : DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique : true 
        },
        active : {
            type : DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue : 1
        }
    }; 
    let config = {
        tableName: 'genres',
        timestamps: true,
        underscored: true //permite utilizar guion bajo utlizado en los atributos de la base de datos
    };
    
    const Genre = sequelize.define(alias,cols,config);
    
    return Genre;
}