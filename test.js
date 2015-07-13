/* global describe, before, it */

import System from 'systemjs'
import {expect} from 'chai'
import scrape from './scrape'

describe('scraper.js', function (done) {
  before(function (done) {
    System.import('./config.js').then(function () {
      done()
    }).catch(done)
  })
  ;['fullscreen'].forEach(function (page) {
    describe(page, function () {
      let spec, html
      before(function (done) {
        System.import(`spec/${page}.json!`).then(function (out) {
          spec = out
          done()
        }).catch(done)
      })
      before(function (done) {
        System.import(`test/${page}.html!text`).then(function (out) {
          html = out
          done()
        })
      })
      it('scrapes correctly', function () {
        let out = scrape(html, page)
        expect(out).to.deep.equal(spec)
      })
    })
  })
})
