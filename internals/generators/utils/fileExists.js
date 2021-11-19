const fs = require('fs')
const path = require('path')

const pageComponents = fs.readdirSync(
  path.join(__dirname, '../../../src/components')
)
const components = pageComponents.map(e => e.toLowerCase())

function componentExists (comp) {
  return components.indexOf(comp.toLowerCase()) >= 0
}
const slices = fs.readdirSync(
  path.join(__dirname, '../../../src/features')
).map(e => e.toLowerCase())
function sliceExists (slice) {
  return slices.indexOf(slice.toLowerCase()) >= 0
}
module.exports = {
  componentExists,
  sliceExists,
  slices
}
