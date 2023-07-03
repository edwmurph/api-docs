import Router from '@koa/router';

const router = new Router({ prefix: '/api/definitions' });

router.get( '/', ctx => {
  ctx.body = [
    '/definitions/team1/def1.json',
    '/definitions/team1/def2.json'
  ];
});

export default router;
