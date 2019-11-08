const homelist = function(req, res){
    res.render('index',{title:'Welcome to Movies Store'});
};

const listDisplay = function(req,res){
    res.render('list-display',{movie:movieArray});
};

var movieArray = [
                 {
                   name:"Maleficient", 
                   year:"2019"  
                 },
                 {
                name:"Fast and Furious",
                year:"2019"
                },
                 {
                name:"Joker",
                year:"2018"
                }   
];


module.exports = {
  homelist,
  listDisplay
};