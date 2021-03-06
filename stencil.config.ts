import {Config} from '@stencil/core';
import {JsonDocs} from '@stencil/core/internal';

import {sass} from '@stencil/sass';
import {postcss} from '@stencil/postcss';
// @ts-ignore
import autoprefixer from 'autoprefixer';

import {generateDesc} from './deckdeckgo.desc';

export const config: Config = {
  namespace: 'jb-deckdeckgo-two-columns-with-headers',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        generateDesc(docs);
      }
    },
    {
      type: 'dist-custom-elements-bundle'
    }
  ],
  plugins: [
    sass({
      includePaths: ['node_modules/@deckdeckgo/slide-utils/styles/']
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
