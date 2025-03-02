const { Article } = require('../models');

// ✅ استرجاع جميع القصص
exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'خطأ في استرجاع البيانات' });
  }
};

// ✅ إنشاء قصة نجاح جديدة
exports.createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ استرجاع قصة نجاح محددة
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    if (!article) return res.status(404).json({ error: 'المقال غير موجود' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'خطأ في استرجاع البيانات' });
  }
};

// ✅ حذف قصة نجاح
exports.deleteArticle = async (req, res) => {
  try {
    const deleted = await Article.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'المقال غير موجود' });
    res.json({ message: 'تم حذف المقال بنجاح' });
  } catch (error) {
    res.status(500).json({ error: 'خطأ في حذف المقال' });
  }
};
