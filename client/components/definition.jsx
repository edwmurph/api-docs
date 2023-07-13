import { useParams } from 'react-router-dom';
import use_api from '../hooks/use-api';

export default function Definition() {
  const params = useParams();

  const definition = params?.['*'];

  const { data, loading, error } = use_api({ route: `/api/definition?path=${ definition }` });

  if ( error ) {
    return error;
  }

  if ( loading ) {
    return 'Loading...';
  }

  console.log( data );

  return ( <div>done</div> );
}
