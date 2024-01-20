const gpt4AllPlugin = require('eleventy-plugin-gpt4all');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(gpt4AllPlugin, { 
        modelName: 'replit-code-v1_5-3b-newbpe-q4_0.gguf' 
    });
};
