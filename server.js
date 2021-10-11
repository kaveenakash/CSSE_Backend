import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import mongoose from 'mongoose'

import userRoute from './src/routes/userRoutes.js'
import ItemRoutes from './src/routes/ItemRoutes.js'
import SiteRoutes from './src/routes/SiteRoutes.js'
import PurchaseOrderRoutes from './src/routes/PurchaseOrderRoutes.js'
import DeliveryAdviseNoteRoutes from './src/routes/DeliveryAdviseNoteRoutes.js'
import InvoiceRoutes from './src/routes/InvoiceRoutes.js'

dotenv.config();



const app = express();
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/api/users', userRoute);
app.use('/api/items', ItemRoutes);
app.use('/api/sites', SiteRoutes);
app.use('/api/purchase_orders', PurchaseOrderRoutes);
app.use('/api/delivery_notes', DeliveryAdviseNoteRoutes);
app.use('/api/invoices', InvoiceRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Api is working');
});

mongoose
.connect('mongodb+srv://admin:admin@csse.fpgzh.mongodb.net/CSSE?retryWrites=true&w=majority')
.then(() =>{
    console.log('Database Estabilished') 
    app.listen(process.env.PORT ,() =>{
        console.log('Server Started ',9090)
    })
})
.catch(err =>{
    console.log(err) 
})