import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(new URL(import.meta.url));
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')));

  app.get('/meetingtimer', (req, res) => {
    const { agenda, times } = req.query;

    if (!agenda || !times) {
      return res.status(400).send('Missing agenda or times parameters');
    }

    const agendaItems = agenda.split(',');
    const timeItems = times.split(',').map(Number);

    if (agendaItems.length !== timeItems.length || agendaItems.length > 10 || agendaItems.length < 1) {
      return res.status(400).send('Invalid number of agenda items or times');
    }

    res.render('timer', { agendaItems, timeItems });
  });

  app.listen(port, () => {
    console.log(`AgendaControl running at http://localhost:${port}`);
  });

