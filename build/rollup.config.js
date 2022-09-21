import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import img from '@rollup/plugin-image'
// import scss from 'rollup-plugin-scss'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: ['src/App.vue', 'src/components/HelloWorld.vue']
}
export const file = type => {
  return `dist/bundle.${type}.js`
}
export const output = {
  name: 'App'
}
export default {
  input: './src/main.ts',
  external: ['vue'],
  plugins: [
    vue(),
    typescript({
      tsconfigOverride: overrides
    }),
    img(),
    nodeResolve(),
    postcss({
      plugins: [autoprefixer()],
      extract: true
    })
  ]
}
