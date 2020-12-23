const getBuildId = require('./config/getBuildId')

module.exports = {
    reactStrictMode: true,
    generateBuildId: getBuildId,
    images: {
        domains: [
            'www.countryflags.io'
        ]
    }
};
