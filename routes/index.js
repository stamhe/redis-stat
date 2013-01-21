
/*
 * GET home page.
 */

module.exports.add_routes = function(app, clusters) {
    app.get('/', function(req, res) {
        res.render('index', { title: 'Redis-Stat', 
                              group: req.query['group'],
                              clusters: clusters});
    });
};

