/**
 * @name groupBy
 * @function
 *
 * @param {array} items - array of objects
 * @param {string} field - name of object field to group the content by
 * @param {boolean} [asObject=false] - optional return the data as an object
 *
 * @return {array|object} - depends on asObject flag
 */
export default function groupBy (items = [], field = '', asObject = false) {
  const obj = {};

  items.forEach((item) => {
    const key = item[field];
    if (!obj[key]) {
      obj[key] = { key, items: [] };
    }
    obj[key].items.push(item);
  });

  return (asObject) ? obj : Object.values(obj);
}
