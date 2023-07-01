import fs from 'fs';
import path from 'path';
import Router from '@koa/router';
import swaggerUIDist from 'swagger-ui-dist';

/*
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';
import SwaggerUI from 'swagger-ui';
*/

const pathToSwaggerUI = swaggerUIDist.getAbsoluteFSPath();

const indexContent = fs.readFileSync( path.join( pathToSwaggerUI, 'swagger-initializer.js' ) )
  .toString();
// .replace('https://petstore.swagger.io/v2/swagger.json', '/path/to/swagger.json')

const router = new Router();

router.get( '/swagger-initializer.js', ctx => {
  console.log( 'query', ctx.query );
  ctx.body = indexContent;
});

/*
router.get( '/', async ( ctx ) => {
  ctx.body = indexContent;
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: '<button @click="count++">{{ count }}</button>'
  });

  const html = await renderToString( app );

  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue SSR Example</title>
      </head>
      <body>
        <div id="app">${ html }</div>
      </body>
    </html>
    `;
});
*/

export default router;
