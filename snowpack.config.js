module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-dotenv"],
  alias: {
    "@ctm/compass": "./src/components/index.js"
  }
};
