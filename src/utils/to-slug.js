/**
 * @name toSlug
 *
 * @param  {...string} rest
 * @returns {string}
 */
export default function toSlug (...rest) {
  return rest.map((d) => d.toLowerCase().replace(/\W/g, '-')).join('-');
}
