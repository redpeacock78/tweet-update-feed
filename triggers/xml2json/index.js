const axios = require('axios').default;
const Parser = require('rss-parser');
const parser = new Parser();

module.exports = class Xml2json {
    constructor({ helpers, options }) {
      this.options = options;
      this.helpers = helpers;
    }
    async run() {
      const feedurl = this.options["url"];
      const result = await axios({method: "get" ,url: feedurl});
      const json = parser.parseString(result.data);
      return json;
    }
  };
