'use strict';

/**
 * Infos.js controller
 *
 * @description: A set of functions called "actions" for managing `Infos`.
 */

module.exports = {

  /**
   * Retrieve infos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.infos.search(ctx.query);
    } else {
      return strapi.services.infos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a infos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.infos.fetch(ctx.params);
  },

  /**
   * Count infos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.infos.count(ctx.query);
  },

  /**
   * Create a/an infos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.infos.add(ctx.request.body);
  },

  /**
   * Update a/an infos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.infos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an infos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.infos.remove(ctx.params);
  }
};
