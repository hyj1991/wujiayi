'use strict';

module.exports = app => {
  const { controller, router } = app;

  router.get('home', '/', controller.home.index);
};