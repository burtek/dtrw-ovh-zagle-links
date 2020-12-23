const git = require('git-rev-sync')

module.exports = async () => `${git.branch()}-${git.short()}`;