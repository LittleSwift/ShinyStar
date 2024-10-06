hexo.extend.filter.register('after_generate', function() {
  const posts = hexo.locals.get('posts');
  const pages = hexo.locals.get('pages');

  // Redirect all pages and posts to the index page.
  pages.forEach(page => {
    if(page.path.startsWith('static/')){
      return;
    }
    page.content = ''; // Clear the content to avoid duplicates
    page.raw = ''; // Clear raw content as well
  });

  posts.forEach(post => {
    post.content = ''; // Clear post content to avoid duplication
    post.raw = ''; // Clear raw content as well
  });
});
