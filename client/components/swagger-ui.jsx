import { useEffect } from 'react';
import SwaggerUI from 'swagger-ui';
import Layout from './layout.jsx';

export default function SwaggerUIComponent() {
  useEffect( () => {
    SwaggerUI({
      dom_id: '#swagger-ui',
      queryConfigEnabled: true,
      plugins: [() => ({ components: { Layout } })],
      layout: 'Layout'
    });
  }, [] );

  return ( <div id='swagger-ui'></div> );
}
