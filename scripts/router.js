hexo.extend.generator.register('articles_route', function(locals) {
  return [
    {
      path: 'articles/index.html',
      layout: ['index']
    },
    {
      path: 'search/index.html',
      layout: ['index']
    }
  ];
});