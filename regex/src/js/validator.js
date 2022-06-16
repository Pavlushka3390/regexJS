export default class Valdiator {
    static validateUsername(userName) {
      if (typeof userName !== 'string') {
        return false;
      }
  
      const templates = [
        /\d{4}/,
        /[^\-\w]/,
        /^[\-_0-9]/,
        /[\-_0-9]$/,
      ];
  
      for (const template of templates) {
        if (template.test(userName)) {
          return false;
        }
      }
  
      return true;
    }
}