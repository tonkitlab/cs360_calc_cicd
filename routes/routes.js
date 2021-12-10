const { add, subtract, multiply, divide } = require("../src/math");

module.exports = function (server) {
    //route - about
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, h) {
            var data = {
                message: 'Calculator API - made for CS360. Hello PRAGMA Student Workshop 2021'
            };
            return data;
        }
    });

    //route - sum
    server.route({
        method: 'GET',
       
       path: '/calculator/sum/{num1}+{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: add(num1, num2)
            };
    
            return data;
        }
    });
    
    //route - subtraction
    server.route({
        method: 'GET',
       
       path: '/calculator/sub/{num1}-{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: subtract(num1, num2)
            };
    
            return data;
        }
    });

    //route - multiplication
    server.route({
        method: 'GET',
       
       path: '/calculator/multi/{num1}*{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: multiply(num1, num2)
            };
    
            return data;
        }
    });

    //route - division
    server.route({
        method: 'GET',
       
       path: '/calculator/div/{num1}/{num2}',
        handler: function (request, h) {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                answer: divide(num1, num2)
            };
    
            return data;
        }
    });
}
