
exports.render = function (req, res) {

    var definitions = [
        {
            name: 'MongoDB',
            definition: 'MongoDB is a NoSQL database that stores application data in flexible, JSON-like documents.'
        },
        {
            name: 'Express',
            definition: 'Express is a web framework for Node.js that simplifies building web applications and APIs.'
        },
        {
            name: 'Angular',
            definition: 'Angular is a frontend framework used to create dynamic and interactive web applications.'
        },
        {
            name: 'Node.js',
            definition: 'Node.js is a JavaScript runtime that allows developers to run JavaScript outside of a web browser.'
        }
    ];

    var myname = 'Alexandria Laws';

    res.render('index', {
        title: 'The MEAN Stack',
        myname: myname,
        definitions: definitions
    });

};
