{"changed":true,"filter":false,"title":"students.js","tooltip":"/routes/students.js","value":"exports.list = function(req, res){\n  req.getConnection(function(err,connection){\n       \n     connection.query('SELECT * FROM customer',function(err,rows)     {\n            \n        if(err)\n           console.log(\"Error Selecting : %s \",err );\n     \n            res.render('customers',{page_title:\"Customers - Node.js\",data:rows});\n                           \n         });\n       \n    });\n  \n};\nexports.add = function(req, res){\n  res.render('add_customer',{page_title:\"Add Customers-Node.js\"});\n};\nexports.edit = function(req, res){\n    \n  var id = req.params.id;\n    \n  req.getConnection(function(err,connection){\n       \n     connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)\n        {\n            \n            if(err)\n                console.log(\"Error Selecting : %s \",err );\n     \n            res.render('edit_customer',{page_title:\"Edit Customers - Node.js\",data:rows});\n                           \n         });\n                 \n    }); \n};\n/*Save the customer*/\nexports.save = function(req,res){\n    \n    var input = JSON.parse(JSON.stringify(req.body));\n    \n    req.getConnection(function (err, connection) {\n        \n        var data = {\n            \n            name    : input.name,\n            address : input.address,\n            email   : input.email,\n            phone   : input.phone \n        \n        };\n        \n        var query = connection.query(\"INSERT INTO customer set ? \",data, function(err, rows)\n        {\n  \n          if (err)\n              console.log(\"Error inserting : %s \",err );\n         \n          res.redirect('/customers');\n          \n        });\n        \n       // console.log(query.sql); get raw query\n    \n    });\n};/*Save edited customer*/\nexports.save_edit = function(req,res){\n    \n    var input = JSON.parse(JSON.stringify(req.body));\n    var id = req.params.id;\n    \n    req.getConnection(function (err, connection) {\n        \n        var data = {\n            \n            name    : input.name,\n            address : input.address,\n            email   : input.email,\n            phone   : input.phone \n        \n        };\n        \n        connection.query(\"UPDATE customer set ? WHERE id = ? \",[data,id], function(err, rows)\n        {\n  \n          if (err)\n              console.log(\"Error Updating : %s \",err );\n         \n          res.redirect('/customers');\n          \n        });\n    \n    });\n};\n\nexports.delete_customer = function(req,res){\n          \n     var id = req.params.id;\n    \n     req.getConnection(function (err, connection) {\n        \n        connection.query(\"DELETE FROM customer  WHERE id = ? \",[id], function(err, rows)\n        {\n            \n             if(err)\n                 console.log(\"Error deleting : %s \",err );\n            \n             res.redirect('/customers');\n             \n        });\n        \n     });\n};","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":112,"column":2},"action":"insert","lines":["exports.list = function(req, res){","  req.getConnection(function(err,connection){","       ","     connection.query('SELECT * FROM customer',function(err,rows)     {","            ","        if(err)","           console.log(\"Error Selecting : %s \",err );","     ","            res.render('customers',{page_title:\"Customers - Node.js\",data:rows});","                           ","         });","       ","    });","  ","};","exports.add = function(req, res){","  res.render('add_customer',{page_title:\"Add Customers-Node.js\"});","};","exports.edit = function(req, res){","    ","  var id = req.params.id;","    ","  req.getConnection(function(err,connection){","       ","     connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)","        {","            ","            if(err)","                console.log(\"Error Selecting : %s \",err );","     ","            res.render('edit_customer',{page_title:\"Edit Customers - Node.js\",data:rows});","                           ","         });","                 ","    }); ","};","/*Save the customer*/","exports.save = function(req,res){","    ","    var input = JSON.parse(JSON.stringify(req.body));","    ","    req.getConnection(function (err, connection) {","        ","        var data = {","            ","            name    : input.name,","            address : input.address,","            email   : input.email,","            phone   : input.phone ","        ","        };","        ","        var query = connection.query(\"INSERT INTO customer set ? \",data, function(err, rows)","        {","  ","          if (err)","              console.log(\"Error inserting : %s \",err );","         ","          res.redirect('/customers');","          ","        });","        ","       // console.log(query.sql); get raw query","    ","    });","};/*Save edited customer*/","exports.save_edit = function(req,res){","    ","    var input = JSON.parse(JSON.stringify(req.body));","    var id = req.params.id;","    ","    req.getConnection(function (err, connection) {","        ","        var data = {","            ","            name    : input.name,","            address : input.address,","            email   : input.email,","            phone   : input.phone ","        ","        };","        ","        connection.query(\"UPDATE customer set ? WHERE id = ? \",[data,id], function(err, rows)","        {","  ","          if (err)","              console.log(\"Error Updating : %s \",err );","         ","          res.redirect('/customers');","          ","        });","    ","    });","};","","exports.delete_customer = function(req,res){","          ","     var id = req.params.id;","    ","     req.getConnection(function (err, connection) {","        ","        connection.query(\"DELETE FROM customer  WHERE id = ? \",[id], function(err, rows)","        {","            ","             if(err)","                 console.log(\"Error deleting : %s \",err );","            ","             res.redirect('/customers');","             ","        });","        ","     });","};"],"id":1}]]},"ace":{"folds":[],"scrolltop":1237.5,"scrollleft":0,"selection":{"start":{"row":101,"column":38},"end":{"row":101,"column":46},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":94,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1467982736620}