import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Router from '@koa/router';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

const router = new Router({ prefix: '/api/definition' });

router.get( '/', ctx => {
  console.log( ctx.query.path );

  const definition_path = path.join( __dirname, '../../../definitions', ctx.query.path );

  try {
    ctx.body = fs.readFileSync( definition_path ).toString();
  } catch ( ex ) {
    ctx.body = 'Not Found';
    ctx.status = 404;
  }
});

export default router;
