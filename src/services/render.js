//allow us to render different files usoing router

const axios = require('axios'); //will allow us to make request
const port = process.env.PORT || 5000;


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/books using axios
    const baseUrl = "http://localhost:5000";
    axios.get(`${baseUrl}/api/books`)
        .then(function(response){
            res.render('index', { books : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_book = (req, res) =>{
    res.render('add_book');
}

