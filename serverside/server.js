const express = require('express');
const cors = require('cors');
const { Project } = require('./models');
// const articleRoutes = require('./routes/articleRoutes');
const articleRoutes = require('./routers/articleRoutes')

const app = express();
const PORT = process.env.PORT || 9562;

app.use(cors());
app.use(express.json());

// ✅ استرجاع جميع المشاريع
app.get('/api/projects', async (req, res) => {
  const projects = await Project.findAll();
  res.json(projects);
});

// ✅ إنشاء مشروع جديد
app.post('/api/projects', async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
});


app.use('/api/articles', articleRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
