'use strict';
const Controller = require('egg').Controller;

class HomeController extends Controller {
  *index() {
    let { ctx } = this;
    yield this.ctx.render('home');
  }
}

module.exports = HomeController;