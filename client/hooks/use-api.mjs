import { useState, useEffect } from 'react';
import axios from 'axios';

const use_api = ({ route, defaultData = null }) => {
  const [data, setData] = useState( defaultData );
  const [loading, setLoading] = useState( false );
  const [error, setError] = useState( false );

  useEffect( () => {
    ( async () => {
      setError( false );
      setLoading( true );

      try {
        const res = await axios.get( route );
        setData( res.data );
      } catch ( e ) {
        setError( e.message );
        setData( null );
      }

      setLoading( false );
    })();
  }, [route] );

  return { data, loading, error };
};

export default use_api;
