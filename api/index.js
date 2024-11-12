const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//Homepage
app.get('/', (request, response) => {
    //response.status(200).json({messege: `API Homepage`});
    response.send(`<h1>API Homepage</h1>`);
    response.send(`<h2>Mark Gervacio</h2>`);
})
app.get('/', (request, response) => {
    response.send(`<h2>Mark Gervacio</h2>`);
})

// Customers
const customerRouter = require('./routes/customer');
app.use('/customers', customerRouter);

// Ordersfdd
const orderRouter = require('./routes/order');
app.use('/orders', orderRouter);

// Paymentsujhgrg
const paymentRouter = require('./routes/payment');
app.use('/payments', paymentRouter);

//hotdog