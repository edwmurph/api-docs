import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Router from '@koa/router';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

const uber = fs.readFileSync( path.join( __dirname, '../../../uber.json' ) ).toString();

const router = new Router({ prefix: '/definitions' });

router.get( '/:team/:definition', ctx => {
  console.log( ctx.params.team, ctx.params.definition );
  ctx.body = uber;
});

export default router;
