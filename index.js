const xml2js = require('xml2js');
const { getUsersInJSON, getUsersInXML } = require('./api.js');

const parseNumbers = (value, name) => {
  if (name === 'id') return parseInt(value);
  return value;
}

async function run() {
  Promise.all([getUsersInJSON(), getUsersInXML()]).then(async (results) => {
    const parser = new xml2js.Parser({
      explicitArray: false,
      valueProcessors: [parseNumbers]
    });
    const xmlResult = await parser.parseStringPromise(results[1]);
    const users = [...results[0].person, ...xmlResult.persons.person];

    users.sort((a, b) => a.id > b.id ? 1 : -1)
    console.log(users);
  })
}

run();