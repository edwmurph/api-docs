import Router from '@koa/router';
import { get_object } from '../../util/aws/s3.mjs';

const router = new Router({ prefix: '/api/definition' });

router.get( '/', async ctx => {
  try {
    const response = await get_object({ key: ctx.query.path });
    ctx.body = await response.Body.transformToString();
  } catch ( ex ) {
    if ( ex.$metadata.httpStatusCode === 404 ) {
      ctx.body = 'Not Found';
      ctx.status = 404;
    } else {
      throw ex;
    }
  }
});

export default router;
