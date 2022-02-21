{
    // ...
    plugins: [{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-vscode`,
          options: {
            theme: 'Abyss' // Or install your favorite theme from GitHub
          }
        }]
      }
    }]
  }