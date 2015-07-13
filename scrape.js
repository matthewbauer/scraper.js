
import cheerio from 'cheerio'
import whatwg from './whatwg'

export default function (html, spec) {
  let $ = cheerio.load(html)
  if ($('link[rel=icon]').attr('href') === 'https://resources.whatwg.org/logo-fullscreen.svg') {
    return whatwg($, spec)
  }
}
