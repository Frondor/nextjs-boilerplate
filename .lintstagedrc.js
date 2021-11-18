module.exports = {
  '**/*.{js,ts,tsx,json}?(x)': filenames => [
    `next lint --fix --file ${filenames
      .map(file => file.split(process.cwd())[1])
      .join(' --file ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
}
