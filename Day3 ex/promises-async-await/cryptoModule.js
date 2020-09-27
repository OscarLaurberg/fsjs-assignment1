const crypto = require('crypto');

const makeRandomBytes = (size) =>
  new Promise(function (resolve, reject) {
    crypto.randomBytes(size, function (err, buffer) {
      let secureHex = buffer.toString('hex');
      if (err) {
        return reject(new Error('Something went wrong'));
      }
      resolve({ length: size, random: secureHex });
    });
  });

async function secondAssignmentRefactored(list) {
  var promises = list.map((size) => {
    return makeRandomBytes(size);
  });
  var results = await Promise.all(promises).then((res) => {
    let result = { title: '6 secure randoms', randoms: [] };
    res.forEach((secureHex) => {
      result.randoms.push(secureHex);
    });
    return result;
  });
  console.log(results);
  return results;
}

module.exports = secondAssignmentRefactored;