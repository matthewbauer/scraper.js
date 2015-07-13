/* global describe, before, it, expect */

import System from 'systemjs'

exports.bootstrap = function () {
  System.import('./scrape').then(function (scrape) {
    ['fullscreen'].forEach(function (page) {
      describe(page, function () {
        let spec, html
        before(function (done) {
          System.import(`spec/${page}.json!`).then(function (out) {
            spec = out
          }).then(done, done)
        })
        before(function (done) {
          System.import(`test/${page}.html!text`).then(function (out) {
            html = out
          })
        })
        it('scrapes correctly', function () {
          let out = scrape(html)
          expect(out).to.equal(spec)
        })
      })
    })
  })
}
