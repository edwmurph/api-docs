import { useEffect } from 'react';
import { SwaggerUIStandalonePreset, SwaggerUIBundle } from 'swagger-ui-dist';
import Layout from './layout.jsx';
import Logo from './logo.jsx';

export default function SwaggerUIComponent() {
  useEffect( () => {
    SwaggerUIBundle({
      urls: [
        { url: '/definitions/team1/def1.json', name: 'team1/def1' },
        { url: '/definitions/team1/def2.json', name: 'team1/def2' }
      ],
      dom_id: '#swagger-ui',
      queryConfigEnabled: true,
      // layout: 'Layout',
      layout: 'StandaloneLayout',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        () => ({
          components: {
            Layout,
            Logo
          }
        })
      ]
    });
  }, [] );

  return ( <div id='swagger-ui'/> );
}
