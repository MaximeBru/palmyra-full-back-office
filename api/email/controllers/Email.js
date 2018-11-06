'use strict';

/**
 * Email.js controller
 *
 * @description: A set of functions called "actions" for managing `Email`.
 */

module.exports = {

  /**
   * Retrieve email records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.email.search(ctx.query);
    } else {
      return strapi.services.email.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a email record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.email.fetch(ctx.params);
  },

  /**
   * Count email records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.email.count(ctx.query);
  },

  /**
   * Create a/an email record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.email.add(ctx.request.body);
  },

  /**
   * Update a/an email record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.email.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an email record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.email.remove(ctx.params);
  }
};
