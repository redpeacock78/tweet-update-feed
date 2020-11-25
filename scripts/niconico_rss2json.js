const axios = require('axios');
const xml2js = require('xml2js');

const fetchXml = async () => {
  const config = {
    transformResponse: [(data) => {
      let jsonData;
      const parser = new xml2js.Parser({
        async: false,
        explicitArray: false
      });
      parser.parseString(data, (error, json) => {
        jsonData = json;
      });
      return jsonData;
    }],
  };
  return await axios.get('http://www.nicovideo.jp/mylist/33014334/64875310?rss=2.0', config);
};

fetchXml()
  .then(response => console.log(JSON.stringify(response.data, null, 2)))
  .catch(e => console.error(e));
