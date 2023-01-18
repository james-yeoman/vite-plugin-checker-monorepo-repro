const react = require("@vitejs/plugin-react");
const { default: checker } = require("vite-plugin-checker");
const viteSvgr = require("vite-plugin-svgr");
const { default: tsconfigPaths } = require("vite-tsconfig-paths");

const cfg = (root) => {
  const checkerOpts = {
    typescript: true,
    eslint: { lintCommand: `eslint ${root}/src/**/*.{js,jsx,ts,tsx}` },
  };

  const plugins = [react(), viteSvgr(), checker(checkerOpts), tsconfigPaths()];

  return {
    plugins,
    server: { open: true },
  };
};

module.exports = { cfg };
