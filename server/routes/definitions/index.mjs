import Router from '@koa/router';
import { list_objects } from '../../util/aws/s3.mjs';

const router = new Router({ prefix: '/api/definitions' });

router.get( '/', async ctx => {
  const { Contents } = await list_objects();

  ctx.body = Contents.map( i => i.Key );
});

export default router;
