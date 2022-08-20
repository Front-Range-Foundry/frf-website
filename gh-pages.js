const ghPages = require("gh-pages");

ghpages.publish(
  'public', // path to public directory
  {
      branch: 'main',
      repo: 'https://github.com/Front-Range-Foundry/frf-website.git', // Update to point to your repository  
      user: {
          name: 'jackdixonryan', // update to use your name
          email: 'jack.dixon.ryan@gmail.com' // Update to use your email
      }
  },
  () => {
      console.log('Deploy Complete!');
  }
)