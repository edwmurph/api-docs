import { useContext } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import yaml from 'js-yaml';
import SettingsContext from '../contexts/settings';
import use_api from '../hooks/use-api';
import Swagger from './swagger.jsx';
import AsyncApi from './asyncapi.jsx';
import Markdown from './markdown.jsx';

function parse({ definition, data }) {
  try {
    const extension = definition.split('.').pop();

    if ( /^(yaml|yml)$/.test( extension ) ) {
      return yaml.load( data );
    }

    if ( /^json$/.test( extension ) ) {
      return typeof data === 'string' ? JSON.parse( data ) : data;
    }
  } catch ( ex ) {
    console.error( ex );
    // TODO fix this
    return '';
  }
}

function DefinitionContainer({ children }) {
  return (
    <div className='my-5 lg:my-7 mx-2 md:mx-5 lg:mx-8'>
      {children}
    </div>
  );
}

export default function Definition() {
  const [params] = useSearchParams();
  const { settings } = useContext( SettingsContext );

  const path = params.get('path');

  const { data, loading, error } = use_api({
    route: `/api/definition?${ createSearchParams({ path }).toString() }`
  });

  if ( error ) {
    return error;
  }

  if ( loading ) {
    return 'Loading...';
  }

  if ( settings.rawDocs ) {
    return (
      <DefinitionContainer>
        <code className='block white-space-pre'>
          {typeof data === 'object' ? JSON.stringify( data, null, 2 ) : data}
        </code>
      </DefinitionContainer>
    );
  }

  if ( path.endsWith('.md') ) {
    return (
      <DefinitionContainer>
        <Markdown md={data}/>
      </DefinitionContainer>
    );
  }

  // TODO memoize this
  const parsed = parse({ definition: path, data });

  if ( parsed.swagger || parsed.openapi ) {
    return (
      <DefinitionContainer>
        <Swagger spec={parsed}/>
      </DefinitionContainer>
    );
  }

  if ( parsed.asyncapi ) {
    return (
      <DefinitionContainer>
        <AsyncApi schema={parsed}/>
      </DefinitionContainer>
    );
  }

  return (
    <DefinitionContainer>
      {JSON.stringify( parsed )}
    </DefinitionContainer>
  );
}
