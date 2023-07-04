import SwaggerUI from 'swagger-ui-react';

export default function Swagger() {
  return (
    <div className='d-flex justify-content-center'>
      <SwaggerUI url='https://petstore.swagger.io/v2/swagger.json'/>
    </div>
  );
}
