const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const getApiInfo = async () => {
  const apiInfo = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
  const list = await apiInfo.data.map((el) => {
    return {
      name: el.name,
      lifeSpan: el.life_span,
      id: el.id,
      height: el.height.metric,
      weight: el.weight.metric,
      temperament: [el.temperament].join().split(",").map((el) => el.trim()),
      image: el.image.url,
    };
  });
  return list;
};

module.exports = getApiInfo;