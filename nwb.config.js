module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
        umd: {
            global: 'OpenDotaApi',
            externals: {
                react: 'React'
            }
        }
    },
    webpack: {
        html: {
            template: 'demo/src/index.html'
        }
    }
}