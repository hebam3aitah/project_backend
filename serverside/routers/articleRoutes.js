const express = require('express');
const { getArticles, createArticle, getArticleById, deleteArticle } = require('../controllers/articleController');

const router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.get('/:id', getArticleById);
router.delete('/:id', deleteArticle);

module.exports = router;
