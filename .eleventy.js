const gpt4AllPlugin = require('eleventy-plugin-gpt4all');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(gpt4AllPlugin, { 
        modelName: 'starcoder-newbpe-q4_0.gguf',
        verbose: true,
    });
};
