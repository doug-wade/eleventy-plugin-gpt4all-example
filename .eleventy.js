const gpt4AllPlugin = require('eleventy-plugin-gpt4all');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(gpt4AllPlugin, { 
        modelName: 'mistral-7b-openorca.Q4_0.gguf'
    });
};
