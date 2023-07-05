import { useEffect } from 'react';
import AsyncApiStandalone from '@asyncapi/react-component/browser/standalone';

// eslint-disable-next-line max-len
const schema = '{"asyncapi":"2.4.0","info":{"title":"Account Service","version":"1.0.0","description":"This service is in charge of processing user signups"},"channels":{"user/signedup":{"subscribe":{"message":{"$ref":"#/components/messages/UserSignedUp"}}}},"components":{"messages":{"UserSignedUp":{"payload":{"type":"object","properties":{"displayName":{"type":"string","description":"Name of the user"},"email":{"type":"string","format":"email","description":"Email of the user"}}}}}}}';

export default function AsyncAPI() {
  useEffect( () => {
    AsyncApiStandalone.render(
      {
        schema: {
          // eslint-disable-next-line max-len
          url: 'https://raw.githubusercontent.com/asyncapi/spec/v2.0.0/examples/2.0.0/streetlights.yml',
          options: { method: 'GET', mode: 'cors' }
        },
        config: {
          show: {
            sidebar: false
          }
        }
      },
      document.getElementById('asyncapi-component')
    );
  }, [] );

  return (
    <div id='asyncapi-component'/>
  );
}
