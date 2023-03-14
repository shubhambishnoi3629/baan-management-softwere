import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);
const domSantizeoption = {
  USE_PROFILES: {},
};

function sanitizeObj(dataObj) {
  for (const reqKey in dataObj) {
    if (
        Object.hasOwnProperty.call(dataObj, reqKey) &&
        typeof dataObj[reqKey] === 'string'
    ) {
      dataObj[reqKey] = DOMPurify.sanitize(
        dataObj[reqKey],
        domSantizeoption,
      ).trim();
    } else if (
      Object.hasOwnProperty.call(dataObj, reqKey) &&
      typeof dataObj[reqKey] === 'object'
    ){
      sanitizeObj(dataObj[reqKey]);
    }
  }
  return dataObj;
}

export const santizeInput = ( req,res, next) => {
  sanitizeObj(req.body);
  next();

}