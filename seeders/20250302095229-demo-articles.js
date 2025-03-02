module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Articles', [
      {
        date: new Date('2024-02-01'),
        title: 'نجاح مشروع تصنيع الصابون الطبيعي',
        description: 'مشروع صغير بدأ بإمكانات محدودة وتحول إلى علامة تجارية محلية.',
        detailed_description: 'بدأت رانيا في تصنيع الصابون الطبيعي في منزلها بمواد طبيعية بسيطة... واليوم توسعت لتصبح علامة تجارية معروفة في السوق المحلي.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date('2023-12-15'),
        title: 'مشروع ورشة الخياطة',
        description: 'كيف تمكنت سعاد من تحويل موهبتها في الخياطة إلى مشروع ناجح.',
        detailed_description: 'بدأت سعاد بتقديم خدمات الخياطة في منطقتها، واليوم لديها ورشة تضم أكثر من 5 عاملات وتنتج ملابس بجودة عالية.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date('2023-11-20'),
        title: 'نجاح مزرعة صغيرة لإنتاج العسل',
        description: 'تجربة ملهمة لشاب قرر الاستثمار في تربية النحل.',
        detailed_description: 'أحمد، شاب من الريف، قرر بدء مشروع صغير لتربية النحل. بفضل الدعم، أصبح لديه الآن 30 خلية نحل ومنتجات عسل طبيعية.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date('2023-10-05'),
        title: 'تحويل أسطح المنازل إلى مزارع خضراء',
        description: 'تجربة فريدة في الزراعة الحضرية ساعدت العديد من الأسر.',
        detailed_description: 'بمساعدة هذا المشروع، تمكنت عشرات الأسر من زراعة الخضروات الطازجة على أسطح منازلهم، مما ساعدهم على تحقيق الاكتفاء الذاتي.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date('2023-09-18'),
        title: 'تطبيق توصيل الطلبات بالدراجات الهوائية',
        description: 'فكرة مبتكرة لمساعدة الشباب في كسب دخل إضافي بطريقة صديقة للبيئة.',
        detailed_description: 'أطلق خالد مبادرة لتوصيل الطلبات داخل المدينة باستخدام الدراجات الهوائية، مما وفر فرص عمل جديدة للشباب.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date('2023-08-10'),
        title: 'نجاح مشروع صناعة المنتجات اليدوية',
        description: 'مجموعة من النساء تعاونّ لإنشاء علامة تجارية للحرف اليدوية.',
        detailed_description: 'بفضل التمويل الجماعي، استطاعت مجموعة من النساء إطلاق متجر إلكتروني لبيع المنتجات اليدوية التقليدية.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
