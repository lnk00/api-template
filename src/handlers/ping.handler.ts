import { Context } from 'koa';

console.log();

export default async (ctx: Context) => {
  ctx.body = {
    message: 'pong',
  };
};
