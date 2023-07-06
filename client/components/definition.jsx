import { useParams } from 'react-router-dom';

export default function Definition() {
  const params = useParams();
  const definition = params?.['*'];

  return ( <div>{definition}</div> );
}
