import baseConfig, { file, output } from './rollup.config'
export default {
  ...baseConfig,
  output: {
    ...output,
    format: 'umd',
    file: file('umd'),
    globals: {
      vue: 'Vue'
    },
    exports: 'named'
  }
}
