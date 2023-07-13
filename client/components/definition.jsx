import { createSearchParams, useSearchParams } from 'react-router-dom';
import yaml from 'js-yaml';
import use_api from '../hooks/use-api';

function parse({ definition, data }) {
  try {
    const extension = definition.split('.').pop();

    if ( /^(yaml|yml)$/.test( extension ) ) {
      return yaml.load( data );
    }

    if ( /^json$/.test( extension ) ) {
      console.log( 'data', data );
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

  // TODO memoize this
  const parsed = parse({ definition: path, data });

  if ( loading || !parsed ) {
    return 'Loading...';
  }

  return ( <div>{JSON.stringify( parsed )}</div> );
}
