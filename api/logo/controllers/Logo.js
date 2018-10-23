'use strict';

/**
 * Logo.js controller
 *
 * @description: A set of functions called "actions" for managing `Logo`.
 */

module.exports = {

  /**
   * Retrieve logo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.logo.search(ctx.query);
    } else {
      return strapi.services.logo.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a logo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.logo.fetch(ctx.params);
  },

  /**
   * Count logo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.logo.count(ctx.query);
  },

  /**
   * Create a/an logo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.logo.add(ctx.request.body);
  },

  /**
   * Update a/an logo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.logo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an logo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.logo.remove(ctx.params);
  }
};
