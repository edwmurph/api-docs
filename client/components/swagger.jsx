import SwaggerUI from 'swagger-ui-react';

// const url = 'https://petstore.swagger.io/v2/swagger.json';

export default function Swagger({ spec }) {
  return (
    <div className='d-flex justify-content-center'>
      <SwaggerUI spec={spec}/>
    </div>
  );
}
