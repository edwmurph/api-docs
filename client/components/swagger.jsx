import SwaggerUI from 'swagger-ui-react';

// const url = 'https://petstore.swagger.io/v2/swagger.json';

export default function Swagger({ spec }) {
  return (
    <SwaggerUI spec={spec}/>
  );
}
