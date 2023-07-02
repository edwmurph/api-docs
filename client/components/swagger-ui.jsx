import { useEffect } from 'react';
import { SwaggerUIBundle } from 'swagger-ui-dist';
import Layout from './layout.jsx';

export default function SwaggerUIComponent() {
  useEffect( () => {
    SwaggerUIBundle({
      dom_id: '#swagger-ui',
      queryConfigEnabled: true,
      layout: 'Layout',
      presets: [
        SwaggerUIBundle.presets.apis
      ],
      plugins: [
        () => ({
          components: {
            Layout
          }
        })
      ]
    });
  }, [] );

  return ( <div id='swagger-ui'/> );
}
