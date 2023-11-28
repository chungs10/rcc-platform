const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
(async () => {
  try {
    await mongoose.connect('mongodb+srv://krumpp:M1TRRCC@rcc-cluster.h5eohrh.mongodb.net/');

    console.log('Connected to MongoDB');

    // Define a MongoDB schema
    const itemSchema = new mongoose.Schema({
        CTF: {
          title: String,
          problem: String,
          Connect: String,
          solution: String,
          links: [
            {
              link: String,
            },
          ],
          answer: String,
        },
      });
  
      // Model for the Bid-2 collection
      const Bid2 = mongoose.model('Bid-2', itemSchema);


    // Routes
    app.post('/api/items', async (req, res) => {
        try {
          const newItem = new Bid2(req.body);  
          const savedItem = await newItem.save();
          res.json(savedItem);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      });
      
      app.get('/api/items/:title', async (req, res) => {
        const title = req.params.title;
    
        try {
            const query = {};
            query[`CTF.${title}`] = { $exists: true };
            const challenge = await Bid2.findOne(query);
    
            console.log('Title:', title);
            console.log('MongoDB Query Result:', challenge);
    
            if (!challenge) {
                return res.status(404).json({ message: 'Item not found' });
            }
    
            res.json(challenge.CTF);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
    
      
      
      
    app.put('/api/items/:id', async (req, res) => {
      try {
        const updatedItem = await Bid2.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    app.delete('/api/items/:id', async (req, res) => {
      try {
        const deletedItem = await Bid2.findByIdAndRemove(req.params.id);
        res.json(deletedItem);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Default route handler for the root path
    app.get('/', (req, res) => {
        res.send('Server is running. Use /api/items to interact with the API.');
      });
  
      // Start the server
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
})();
