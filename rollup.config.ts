import clear from 'rollup-plugin-clear';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import fs from 'fs';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const inputPath = path.resolve('src');
const outputDir = 'dist';

export default {
  // 输入配置
  input: extensions
    .map((ext) => path.resolve(inputPath, `index${ext}`))
    .find((file) => fs.existsSync(file)),
  // 输出配置
  output: [
    // 打包为commonJS模块
    {
      dir: outputDir,
      sourcemap: true,
      format: 'cjs',
    },
    // 打包为ES6模块
    {
      file: `${outputDir}/index.esm.js`,
      sourcemap: true,
      format: 'es',
    },
  ],
  // 插件
  plugins: [
    //打包前先清空dist文件夹
    clear({
      targets: ['dist'],
      watch: true,
    }),
    // eslint检测
    eslint(),
    // 允许导入json文件
    json(),
    // ts处理，打包声明ts文件
    typescript({
      declaration: true,
      // 输出的声明目录
      declarationDir: outputDir,
    }),
    // 允许加载外部模块
    resolve(),
    // 将commonjs转为es2015供 Rollup 处理
    commonjs(),
    // 将es2015转为es5
    babel({
      // 排除所有外部模块,只编译我们的源代码
      exclude: 'node_modules/**',
      // 使plugin-transform-runtime生效
      runtimeHelpers: true,
    }),
  ],
  // 外部的包，不需要打包的内容
  external: ['axios', 'lodash'],
};
