module.exports = function(eleventyConfig) {
  // শুধুমাত্র স্ট্যাটিক অ্যাসেটগুলো কপি হবে
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  
  return {
    // এই লাইনটি স্পষ্টভাবে বলে দিচ্ছে কোন কোন ফরম্যাট প্রসেস করতে হবে
    templateFormats: ["md", "njk", "html", "xml"],
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
