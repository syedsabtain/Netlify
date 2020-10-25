var path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    const result = await graphql(`
    {
      allContentfulSmartPhones {
          nodes {
            slug
            name
            description {
              json
            }
            image {
              file {
                url
              }
            }
          }
          }
    }
    `)

    // console.log(JSON.stringify(result));

    result.data.allContentfulSmartPhones.nodes.forEach((obj)=>{
        createPage({
            path: `/Products/${obj.slug}`,
            component: path.resolve('./src/templates/Products.tsx'),
            context: {
                itemDetails: obj
            }
        })
    })
    
}