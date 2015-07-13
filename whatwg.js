export default function ($, spec) {
  let defs = {}
  $('.idl a[href]').each(function (i, def) {
    let href = $(def).attr('href')
    if (href.startsWith('#')) {
      href = `https://${spec}.spec.whatwg.org/${href}`
    }
    defs[$(def).text()] = href
  })
  return defs
}
