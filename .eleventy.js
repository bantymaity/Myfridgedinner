module.exports = function(eleventyConfig) {
  // Pass through images, css and robots.txt
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  
  // Force Eleventy to copy your static pages exactly as they are!
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("about.html");
  eleventyConfig.addPassthroughCopy("contact.html");
  eleventyConfig.addPassthroughCopy("terms.html");
  eleventyConfig.addPassthroughCopy("privacy.html");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
