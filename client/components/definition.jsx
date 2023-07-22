import { createSearchParams, useSearchParams } from 'react-router-dom';
import yaml from 'js-yaml';
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

export default function Definition() {
  const [params] = useSearchParams();

  const path = params.get('path');

  const { data, loading, error } = use_api({
    route: `/api/definition?${ createSearchParams({ path }).toString() }`
  });

  if ( error ) {
    return error;
  }

  if ( path.endsWith('.md') ) {
    return ( <Markdown md={data}/> );
  }

  // TODO memoize this
  const parsed = parse({ definition: path, data });

  console.log( parsed );

  if ( loading || !parsed ) {
    return 'Loading...';
  }

  if ( parsed.swagger || parsed.openapi ) {
    return ( <Swagger spec={parsed}/> );
  }

  if ( parsed.asyncapi ) {
    return ( <AsyncApi schema={parsed}/> );
  }

  return (
    <div>{JSON.stringify( parsed )}</div>
  );
}
