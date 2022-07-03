module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-nesting': {},
    'postcss-custom-media': {
      importFrom: [
        () => {
          const customMedia = {
            '--device-mobile': '(min-width: 0) and (max-width: 640px)',
            '--device-tablet': '(min-width: 641px) and (max-width: 1280px)',
          };
          return { customMedia };
        },
      ],
    },
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
};
