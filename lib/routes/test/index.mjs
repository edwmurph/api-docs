import Router from '@koa/router';
import httpError from 'http-errors';

const router = new Router({ prefix: '/test' });

router.get( '/', async ( ctx ) => {
  const { url } = ctx.query;

  if ( !url ) {
    throw httpError( 400, 'url query param is required' );
  }

  ctx.body = 'hello world';
});

export default router;
