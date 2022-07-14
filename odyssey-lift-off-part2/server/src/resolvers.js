const resolvers = {
    Query: {
        // return s an array of Tracks that will be used to populate
        // the home page grid of our web client
        tracksForHome: (parent, args, context, info) => {
            const {
                dataSources
            } = context;            

            return dataSources.trackAPI.getTracksForHome();
           
        },

        getHello: () => {
            return {
                name: 'Panupong Chamsomboon',
                message: 'Hello World'
            }
        },

        getHelloWithContext: (parent, args, context, info) => {
            const {
                dataSources
            } = context;            

            return dataSources.myHelloWithContext.getHello();
        }
    },

    Track: {
        author: (parent, args, context, info) => {
            
            const { authorId } = parent;
            const { dataSources } = context;

            return dataSources.trackAPI.getAuthor(authorId)
        }
    }
}

module.exports = resolvers;