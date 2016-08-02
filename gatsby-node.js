exports.rewritePath = (parsedFilePath, metadata) => {
  if (parsedFilePath.dirname === 'previous-years') {
    return `/${parsedFilePath.name}/`
  }
  return undefined
}
