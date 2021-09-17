const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Pelicula.findAll()
        .then(movies => res.render("moviesList",{
            movies
        }))
        .catch(error => console.log(error))
    },
    new : (req,res) => { 
        db.Pelicula.findAll({
            order : [
                ["release_date", "DESC"],
            ],
        }).then(movies => res.render("newestMovies",{
            movies
        }))
    },
    detail : (req,res) =>{
        db.Pelicula.findOne({
            where : {
                id : req.params.id
            }
        }).then(movie => res.render("moviesDetail",{
            movie
        }))
    },
    recomended:(req,res) =>{
        db.Pelicula.findAll({
            limit : 5,
            order : [
                ["release_date", "DESC"]
            ],
        }).then(movies => res.render("recommendedMovies",{
            movies
        }))
    }
}