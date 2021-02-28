import { defineComponent } from 'vue';
import kebabCase from 'lodash/kebabCase';

const requireComponent = require.context(
  '@/components',
  true,
  /msp-[a-z0-9-]*.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName =
    kebabCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    );

  defineComponent(
    componentName,
    componentConfig.default || componentConfig
  );
});
