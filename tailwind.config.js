/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  purge: [
    'pages/**/*.vue'
  ],
  plugins: [
    // require('daisyui'), //is this still needed?
  ]
};
