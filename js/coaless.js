var article = Backbone.Model.extend({});

var ArticleView = Backbone.View.extend({
  model: article,
  tagName: 'article'
})


article.set({
  copy:  ["But there was also pessimism in Israel that ",
          "the Syrian president, Bashar al-Assad, would ",
          "actually fulfill his promise to turn over and ",
          "ultimately destroy his chemical stockpile. ",
          "Instead, many analysts worried that Mr. Assad, ",
          "his Iranian patrons and the Lebanese militia ",
          "Hezbollah would emerge strengthened, and ",
          "that the main upshot of the episode would ",
          "be a sense of American wavering on involvement ",
          "in the Middle East."].join('');
});
