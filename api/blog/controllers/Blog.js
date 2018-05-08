'use strict';

/**
 * Blog.js controller
 *
 * @description: A set of functions called "actions" for managing `Blog`.
 */

module.exports = {

  /**
   * Retrieve blog records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.blog.fetchAll(ctx.query);
  },

  /**
   * Retrieve a blog record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.blog.fetch(ctx.params);
  },

  /**
   * Create a/an blog record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.blog.add(ctx.request.body);
  },

  /**
   * Update a/an blog record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.blog.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an blog record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.blog.remove(ctx.params);
  }
};
