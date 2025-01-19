const gpt4AllPlugin = require('eleventy-plugin-gpt4all');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(gpt4AllPlugin, { 
        modelName: 'Meta-Llama-3-8B-Instruct.Q4_0.gguf',
        verbose: true,
    });
};
