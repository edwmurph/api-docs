import { promisify } from 'util';
import Koa from 'koa';
import routes from './routes/index.mjs';

const app = new Koa();
const listen = promisify( app.listen ).bind( app );
const port = 3000;

for ( const router of routes ) {
  app.use( router.routes() );
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
