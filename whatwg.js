export default function scrape (url, $) {
  let defs = {}
  $('.idl span').forEach(function (def) {
    if (def.attr('href')) {
      defs[def.text()] = def.attr('href')
    }
  })
  return defs
}
