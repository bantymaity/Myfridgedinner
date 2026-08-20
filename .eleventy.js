const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  // আপনার ওয়েবসাইটের ডিজাইন এবং ছবি যেন ঠিক থাকে
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images"); // যদি images ফোল্ডার থাকে

  // গুগল সার্চ কনসোলের জন্য অটোমেটিক Sitemap তৈরি
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.myfridgedinner.com",
    },
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  }
};
