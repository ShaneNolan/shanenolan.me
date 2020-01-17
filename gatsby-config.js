module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41769697-13",
      },
    },
  ],
  siteMetadata: {
    title: `Shane Nolan`,
    author: `Shane Nolan`,
    description: `Shane Nolan's blog.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/smnolan`,
      },
      {
        name: `github`,
        url: `https://github.com/shanenolan`,
      },
    ],
  },
}
