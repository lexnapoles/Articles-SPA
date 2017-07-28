const EXCERPT_LENGTH = require('./constants').EXCERPT_LENGTH;

const hasProperty = (key, obj) => Object.prototype.hasOwnProperty.call(obj, key);

const hasAllFields = (obj, fields = []) => obj && fields.every(key => hasProperty(key, obj));

const getExcerpt = article => article.content.substr(0, EXCERPT_LENGTH);

exports.hasProperty = hasProperty;
exports.hasAllFields = hasAllFields;
exports.getExcerpt = getExcerpt;
