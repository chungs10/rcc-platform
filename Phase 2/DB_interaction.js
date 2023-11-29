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
      _id: mongoose.Schema.Types.ObjectId,
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
    });

    // Model for the bid-2 collection
    const CTFModel = mongoose.model('Bid-2', ctfSchema);

    // Routes
    // POST request to add a new CTF entry
    app.post('/api/ctf', async (req, res) => {
        try {
          const newCTFEntry = new CTFModel({
            _id: new mongoose.Types.ObjectId(), // Generate a new ObjectId
            ...req.body,
          });
      
          const savedCTFEntry = await newCTFEntry.save();
          console.log('Saved CTF Entry:', savedCTFEntry);
          res.json(savedCTFEntry);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: error.message });
        }
      });
      

    // GET request to retrieve all CTF entries
    app.get('/api/ctf', async (req, res) => {
      try {
        const allCTFEntries = await CTFModel.find({});
        res.json(allCTFEntries);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    });

    // GET request to retrieve a specific CTF entry by title
    app.get('/api/ctf/:title', async (req, res) => {
      const ctfTitle = req.params.title;

      try {
        const ctfEntry = await CTFModel.findOne({ title: ctfTitle });

        if (!ctfEntry) {
          return res.status(404).json({ message: 'CTF entry not found' });
        }

        res.json(ctfEntry);
      } catch (error) {
        console.error('Error in /api/ctf/:title route:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
    });

    // PUT request to update a specific CTF entry by title
    app.put('/api/ctf/:title', async (req, res) => {
      try {
        const updatedCTFEntry = await CTFModel.findOneAndUpdate(
          { title: req.params.title },
          { $set: req.body },
          { new: true }
        );

        if (!updatedCTFEntry) {
          return res.status(404).json({ message: 'CTF entry not found' });
        }

        res.json(updatedCTFEntry);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

// DELETE request to remove a specific CTF entry by title
app.delete('/api/ctf/:title', async (req, res) => {
    try {
      const deletedCTFEntry = await CTFModel.findOneAndDelete({ title: req.params.title });
  
      if (!deletedCTFEntry) {
        return res.status(404).json({ message: 'CTF entry not found' });
      }
  
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
