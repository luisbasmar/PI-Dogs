const getApiInfo = require("./getApiInfo");
const getDbInfo = require("./getDbInfo");

const getAllDogs = async () => {
  const infoApi = await getApiInfo();
  const infoDb = await getDbInfo();
  const infoAll = infoApi.concat(infoDb);

  return infoAll;
};

module.exports = getAllDogs;