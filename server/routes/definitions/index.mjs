import Router from '@koa/router';
import { list_objects } from '../../util/aws/s3.mjs';

const router = new Router({ prefix: '/api/definitions' });

router.get( '/', async ctx => {
  const { Contents } = await list_objects();

  const pathsByTeam = {};

  for ( const { Key } of Contents ) {
    const [ team, ...path ] = Key.split('/');

    if ( !pathsByTeam[ team ] ) {
      pathsByTeam[team] = [];
    }

    const pathString = path.join('/');

    pathsByTeam[ team ].push({
      name: pathString,
      path: `${ team }/${ pathString }`
    });
  }

  ctx.body = pathsByTeam;
});

export default router;
