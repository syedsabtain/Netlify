module.exports = {
  plugins: ["gatsby-plugin-typescript"],
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8vc63zp6y08d`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'THYcffl8xGpyhB5bi6p8e5gGpIq9uKBJFtRQIrTPntQ',
      },
    },
  ],
};
