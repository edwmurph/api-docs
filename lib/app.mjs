import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';
import Koa from 'koa';
import serve from 'koa-static';
import routes from './routes/index.mjs';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

const app = new Koa();
const listen = promisify( app.listen ).bind( app );
const port = 3000;

app.use( serve( path.join( __dirname, '..', 'dist' ) ) );

for ( const router of routes ) {
  app.use( router.routes() );
  app.use( router.allowedMethods() );
}

app.on( 'error', ex => {
  console.error( 'api error', ex );
});

async function start() {
  console.log('starting app...');
  await listen( port );
  console.log( `app listening on port ${ port }` );
}

export default {
  start
};
