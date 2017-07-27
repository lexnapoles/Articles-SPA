export const hasProperty = (key, obj) => Object.prototype.hasOwnProperty.call(obj, key);

export const hasAllFields = (obj, fields = []) => obj && fields.every(key => hasProperty(key, obj));
