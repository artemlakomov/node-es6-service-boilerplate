import Locale from 'counterpart';

const defaultCulture = 'en';
const data = {
  "APP_NAME": "Boilerplate",
  "NOT_FOUND": "The requested resource was not found."
}

class LocalizationService {

  constructor(){
    Locale.registerTranslations(defaultCulture, data);
  }

  t(key){
    return Locale.translate(key, { fallback: key });
  }
}

var instance = new LocalizationService();
export default instance;
