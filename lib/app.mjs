import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';
import Koa from 'koa';
import serve from 'koa-static';
import send from 'koa-send';
import routes from './routes/index.mjs';

const __filename = fileURLToPath( import.meta.url );
const __dirname = path.dirname( __filename );

const app = new Koa();
const listen = promisify( app.listen ).bind( app );
const port = 3000;
const dist_path = path.join( __dirname, '..', 'dist' );

app.use( serve( dist_path ) );

for ( const router of routes ) {
  app.use( router.routes() );
  app.use( router.allowedMethods() );
}

app.use( ctx => send( ctx, 'index.html', { root: dist_path } ) );

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
