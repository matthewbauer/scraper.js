
import cheerio from 'cheerio'
import whatwg from './whatwg'

export default function scrape (html) {
  let $ = cheerio.load(html)
  if ($('link[rel=icon]').attr('href') === 'https://resources.whatwg.org/logo-fullscreen.svg') {
    return whatwg.scrape($)
  }
}
