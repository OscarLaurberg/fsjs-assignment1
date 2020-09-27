const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const platform = os.platform();
const osType = os.type();
const eol = os.EOL;

const osInfo = {platform, osType, freeMemory, totalMemory, eol};

module.exports.osInfo = osInfo;