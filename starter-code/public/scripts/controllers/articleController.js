'use strict';

(function(module) {
  const articleController = {};
  articleController.init = function(){
  Article.fetchAll(articleView.initIndexPage);
    $('.tab-content').hide();
    $('#articles').show();
  };
  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:

  module.articleController = articleController;
})(window);
