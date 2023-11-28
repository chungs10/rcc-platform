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
    await mongoose.connect('mongodb+srv://krumpp:M1TRRCC@rcc-cluster.h5eohrh.mongodb.net/RCC-Bid-2', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Define a MongoDB schema
    const ctfSchema = new mongoose.Schema({
      CTF: [
        {
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
      ],
    });

    // Model for the bid-2 collection
    const CTFModel = mongoose.model('Bid-2', ctfSchema);

    // Routes
    app.post('/api/ctf', async (req, res) => {
      try {
        const newCTFEntry = new CTFModel(req.body);
        const savedCTFEntry = await newCTFEntry.save();
        console.log('Saved CTF Entry:', savedCTFEntry);
        res.json(savedCTFEntry);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
    });

    app.get('/api/ctf', async (req, res) => {
      try {
        const allCTFEntries = await CTFModel.find({});
        res.json(allCTFEntries);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    app.get('/api/ctf/:id', async (req, res) => {
      try {
        const ctfEntry = await CTFModel.findById(req.params.id);
        res.json(ctfEntry);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    app.put('/api/ctf/:id', async (req, res) => {
      try {
        const updatedCTFEntry = await CTFModel.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.json(updatedCTFEntry);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    app.delete('/api/ctf/:id', async (req, res) => {
      try {
        const deletedCTFEntry = await CTFModel.findByIdAndRemove(req.params.id);
        res.json(deletedCTFEntry);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // Default route handler for the root path
    app.get('/', (req, res) => {
      res.send('Server is running. Use /api/ctf to interact with the API.');
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
})();
