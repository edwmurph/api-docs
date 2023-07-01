import { useEffect } from 'react';
import SwaggerUI from 'swagger-ui';

import 'swagger-ui/dist/swagger-ui.css';

export default function SwaggerUIComponent() {
  useEffect( () => {
    SwaggerUI({
      dom_id: '#swagger-ui',
      queryConfigEnabled: true
    });
  }, [] );

  return ( <div id='swagger-ui'></div> );
}
