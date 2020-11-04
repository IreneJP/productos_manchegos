const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//Create connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    database : 'manchego_products',
    password: null,
    user: 'root',
});

//Connect
connection.connect(function(err) {
  if(err){
      console.log(err);
  }else{
      console.log("Conexion establecida con exito.")
  }
});


// All the cheeses
app.get("/cheeses",function(req,res){
  connection.query("SELECT * FROM `products` WHERE product = 'queso' ",function(error,result){
      if (error){
      console.log(error)
    }else{
      res.send(result)
    }
  });
});

// Cured cheeses
app.get("/cheeses/cured",function(req,res){
    connection.query("SELECT * FROM `products` WHERE product = 'queso' AND type = 'Curado'",function(error,result){
        if (error){
      console.log(error)
    }else{
      res.send(result)
    }
    });
});

// Semi cheeses
app.get("/cheeses/semicured",function(req,res){
    connection.query("SELECT * FROM `products` WHERE product = 'queso' AND type = 'Semicurado'",function(error,result){
        if (error){
      console.log(error)
    }else{
      res.send(result)
    }
    });
});

//Soft cheeses
app.get("/cheeses/softed",function(req,res){
    connection.query("SELECT * FROM `products` WHERE product = 'queso' AND type = 'Tierno'",function(error,result){
        if (error){
      console.log(error)
    }else{
      res.send(result)
    }
    });
});

// A cheese
app.get('/cheeses/:product_id', (req, res) => {
  const { product_id } = req.params; 
  connection.query("SELECT * FROM `products` WHERE product = 'queso' AND product_id = ?", [product_id], (error, result) => {
    if (error){
      console.log(error)
    }else{
      res.send(result)
    }
  });
});

// All the wines
app.get("/wines",function(req,res){
  connection.query("SELECT * FROM `products` WHERE product = 'vino' ",function(error,result){
      if (error){
      console.log(error)
    }else{
      res.send(result)
    }
  });
});

// Cured wines
app.get("/wines/red",function(req,res){
    connection.query("SELECT * FROM `products` WHERE product = 'vino' AND type = 'Tinto'",function(error,result){
        if (error){
      console.log(error)
    }else{
      res.send(result)
    }
    });
});

// Semi wines
app.get("/wines/rose",function(req,res){
    connection.query("SELECT * FROM `products` WHERE product = 'vino' AND type = 'Rosado'",function(error,result){
        if (error){
      console.log(error)
    }else{
      res.send(result)
    }
    });
});

//Soft wines
app.get("/wines/white",function(req,res){
    connection.query("SELECT * FROM `products` WHERE product = 'vino' AND type = 'Blanco'",function(error,result){
        if (error){
      console.log(error)
    }else{
      res.send(result)
    }
    });
});

// A cheese
app.get('/wines/:product_id', (req, res) => {
  const { product_id } = req.params; 
  connection.query("SELECT * FROM `products` WHERE product = 'vino' AND product_id = ?", [product_id], (error, result) => {
    if (error){
      console.log(error)
    }else{
      res.send(result)
    }
  });
});



//--USER--

//Create a user
app.post("/user", function (req,res) {
    var insert = "INSERT INTO `user`( `name`, `surname`, `birthDate`, `email`, `password`) VALUES (?,?,?,?,?)";
    var array = [req.body.name, req.body.surname, req.body.birthDate, req.body.email, req.body.password ];
        connection.query(insert,array,function(err,result){
            if(!err){
                    if(!err){
                        res.send(result);
                        console.log(result);
                    }else{
                        res.send(err);
                    }
                }
            })
});

//Update user
app.put("/user", function(req,res){
    var insert = "UPDATE `user` SET `name`= ?, `surname`= ?, `birthDate` = ?, `email`= ?,`password`= ? WHERE user_id = ? ";
    var array = [req.body.name, req.body.surname, req.body.birthDate, req.body.email, req.body.password, req.body.user_id];
    connection.query(insert, array, function(err, result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    });
});

// Delete user
app.delete("/user/:user_id", function(req,res){  
    var insert = "DELETE FROM user WHERE user_id = " + req.params.user_id + "";   
    connection.query(insert, function(err, result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    });
});


//--ADDRESS--

//Create an address
app.post("/address", function (req,res) {
    var insert = "INSERT INTO `address` (`user_id`, `name`, `surname`, `address`, `postcode`, `city`, `phone`) VALUES (?,?,?,?,?,?,?)";
    var array = [req.body.user_id, req.body.name ,req.body.surname, req.body.address, req.body.postcode, req.body.city, req.body.phone ];
        connection.query(insert,array,function(err,result){
            if(!err){
                    if(!err){
                        res.send(result);
                        console.log(result);
                    }else{
                        res.send(err);
                    }
                }
            })
});

//Update address
app.put("/address", function(req,res){
    var insert = "UPDATE `address` SET `name`= ?, `surname`= ?, `address`= ?, `postcode`= ?, `city`= ?, `phone`= ? WHERE address_id = ? ";
    var array = [req.body.name, req.body.surname, req.body.address, req.body.postcode, req.body.city, req.body.phone, req.body.address_id];
    connection.query(insert, array, function(err, result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    });
});

// Delete address
app.delete("/address/:address_id", function(req,res){  
    var insert = "DELETE FROM `address` WHERE address_id = " + req.params.address_id + "";   
    connection.query(insert, function(err, result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    });
});

//--ORDER--

//Create an order
app.post("/basket", function (req,res) {
var insert = "INSERT INTO `orders`(`order_id`, `user_id`, `address_id`, `orderDate`, `deliveryDate`, `situation`, `discount`, `shippingPrice`,`totalPrice`) VALUES (?,?,?,?,?,?,?,?,?)";
var array = [req.body.order_id, req.body.user_id, req.body.address_id, req.body.orderDate ,req.body.deliveryDate, req.body.situation,req.bodydiscount, req.body.shippingPrice, req.body.totalPrice];
    connection.query(insert, array, function(err,result){
        if(!err){
            var insert2 = "INSERT INTO `order_products`(`order_id`, `product_id`) VALUES (?,?)";
            var array2 =[req.body.order_id,req.body.product_id];
            connection.query(insert2, array2, [result.insertId, order_id], function(err,result){
                if(!err){
                    res.send(result);
                    console.log(result);
                }else{
                    res.send(err);
                }
            })
        }
    });
});


app.listen(3000)
