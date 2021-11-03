module.exports = {
    client: {
        excludes: ['src/generated/**.*'],
        service: {
            name: 'blocnotes API',
            url: 'http://localhost:8080/v1/graphql',
        }
    }
};
