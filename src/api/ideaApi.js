import {get, post, put, remove, patch } from "@/services/http";

const IDEA_URL = `/ideas`;

const ideaApi = {
    /**
     * Get list of records
     * @param {Number} page
     * @returns {Promise}
     */
    list: (page = 1) => get(`${IDEA_URL}?page=${page}`)
      .then(response => response.data)
      .catch(err => {
        throw err;
      }),

    /**
     * Get record
     * @returns {Promise}
     */
    get: () => get(IDEA_URL),

    /**
     * Create record
     * @param {*} idea
     * @returns {Promise}
     */
    create: idea => post(IDEA_URL, idea)
      .then(response => response.data)
      .catch(err => {
        throw err;
      }),

    /**
     * Update record
     * @param {*} idea
     * @returns
     */
    update: idea => put(`${IDEA_URL}/${idea.id}`, idea)
      .then(response => response.data)
      .catch(err => {
        throw err;
      }),

    /**
     * Restore record
     * @param {*} idea
     * @returns {Promise}
     */
    restore: id => patch(`${IDEA_URL}/${id}`)
      .then(response => response.data)
      .catch(err => {
        throw err;
      }),

    /**
     * Remove record
     * @param {*} idea
     * @returns {Promise}
     */
    remove: id => remove(`${IDEA_URL}/${id}`)
      .then(response => response.data)
      .catch(err => {
        throw err;
      }),
}


export default ideaApi;
