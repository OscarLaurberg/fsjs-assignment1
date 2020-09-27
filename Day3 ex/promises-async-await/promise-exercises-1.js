const crypto = require('crypto');

function firstAssignment() {
  var result = { title: '6 secure randoms', randoms: [] };
  let size = 48;

  crypto.randomBytes(size, function (err, buffer) {
    let secureHex = buffer.toString('hex');
    result.randoms.push({ length: size, random: secureHex });
    size = size - 8;

    crypto.randomBytes(size, function (err, buffer) {
      let secureHex = buffer.toString('hex');
      result.randoms.push({ length: size, random: secureHex });
      size = size - 8;

      crypto.randomBytes(size, function (err, buffer) {
        let secureHex = buffer.toString('hex');
        result.randoms.push({ length: size, random: secureHex });
        size = size - 8;

        crypto.randomBytes(size, function (err, buffer) {
          let secureHex = buffer.toString('hex');
          result.randoms.push({ length: size, random: secureHex });
          size = size - 8;

          crypto.randomBytes(size, function (err, buffer) {
            let secureHex = buffer.toString('hex');
            result.randoms.push({ length: size, random: secureHex });
            size = size - 8;

            crypto.randomBytes(size, function (err, buffer) {
              let secureHex = buffer.toString('hex');
              result.randoms.push({ length: size, random: secureHex });
              size = size - 8;
              console.log(result);
            });
          });
        });
      });
    });
  });
}
 

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

function secondAssignment() {
  var result = { title: '6 secure randoms', randoms: [] };
  const sizes = [48, 40, 32, 24, 16, 8];
  var randomBytePromises = sizes.map((size) => {
    return makeRandomBytes(size);
  });
  Promise.all(randomBytePromises).then((res) => {
    res.forEach((secureHex) => {
      result.randoms.push(secureHex);
    });

    console.log(result);
  });
}

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

module.exports = {
  firstAssignment,
  secondAssignment,
  secondAssignmentRefactored,
};
