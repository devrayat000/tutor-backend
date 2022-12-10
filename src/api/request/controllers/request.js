"use strict";

/**
 *  request controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const _ = require("lodash");

module.exports = createCoreController("api::request.request", {
  async find(ctx) {
    const authUser = ctx.state.user;
    ctx.query = _.merge(ctx.query, {
      filters: { user: { id: { $eq: authUser.id } } },
    });
    return await super.find(ctx);
  },
});
