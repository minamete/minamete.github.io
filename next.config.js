module.exports = {
    trailingSlash: true,
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    },
    async redirects() {
      return [
        {
          source: '/sideprojects',
          destination: '/side-projects',
          permanent: true,
        },
      ]
    }
  };