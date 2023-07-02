import { useEffect } from 'react';
import { SwaggerUIStandalonePreset, SwaggerUIBundle } from 'swagger-ui-dist';
import Layout from './layout.jsx';
import Logo from './logo.jsx';

export default function SwaggerUIComponent() {
  useEffect( () => {
    SwaggerUIBundle({
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
