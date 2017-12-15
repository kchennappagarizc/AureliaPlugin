import {FrameworkConfiguration, PLATFORM } from 'aurelia-framework';
import {I18N, TCustomAttribute} from 'aurelia-i18n';
import * as Backend from 'i18next-xhr-backend';

export function configure(aurelia: FrameworkConfiguration) {
    aurelia
        .globalResources([

    ]);

    aurelia
    .plugin('aurelia-i18n', (instance) => {
        let aliases = ['t', 'i18n'];
        // add aliases for 't' attribute
        TCustomAttribute.configureAliases(aliases);
        
        // register backend plugin
        instance.i18next.use(Backend);
  
        // adapt options to your needs (see http://i18next.com/docs/options/)
        // make sure to return the promise of the setup method, in order to guarantee proper loading
        return instance.setup({
          backend: {                                  // <-- configure backend settings
            loadPath: './src/locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
            
          },
          attributes: aliases,
          lng : 'de',
          fallbackLng : 'en',
          debug : false,
          ns: ['translation','nav', 'common'],
          defaultNS: 'translation'
        });
      });
}
