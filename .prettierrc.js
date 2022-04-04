module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  // 如果为 true，则将多行jsx元素的 > 放在最后一行的末尾，而不是单独放在下一行
  jsxBracketSameLine: false,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
  // husky  是一个为 git 客户端增加 hook 的工具。安装后，它会自动在仓库中的 .git/ 目录下增加相应的钩子；比如 pre-commit 钩子就会在你执行 git commit 的触发。
  husky: {
    hooks: {
      'pre-commit': 'lint-staged',
      'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS', // 校验commit时添加的备注信息是否符合我们要求的规范
    },
  },
  // lint-staged，一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具
  'lint-staged': {
    '*.{js,jsx,vue,ts,tsx}': ['yarn lint', 'yarn prettier --write', 'git add'],
  },
}
