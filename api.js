const fs = require('fs');
const jsonUsers = require('./mocks/api-1.json');

exports.getUsersInJSON = async () => {
  return new Promise(resolve  => {
    setTimeout(() => {
      resolve(jsonUsers);
    }, 5000);
  });
}

exports.getUsersInXML = async () => {
  return new Promise(resolve  => {
    setTimeout(() => {
      const xmlUsers = fs.readFileSync('./mocks/api-2.xml', 'utf8');
      resolve(xmlUsers);
    }, 10000);
  });
}