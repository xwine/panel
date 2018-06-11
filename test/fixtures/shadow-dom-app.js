import {Component, h} from '../../lib';

export class ShadowDomApp extends Component {
  get config() {
    return {
      css: `color: blue;`,
      // eslint-disable-next-line no-unused-vars
      template: state => h(`div`, {class: {foo: true}}, [
        h(`p`, `Hello`),
      ]),

      useShadowDom: true,
    };
  }
}
