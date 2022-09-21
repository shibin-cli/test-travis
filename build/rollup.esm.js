import baseConfig, { file, output } from './rollup.config'
export default {
  ...baseConfig,
  output: {
    ...output,
    format: 'esm',
    file: file('esm')
  }
}
