'use strict';

import { Context } from "koa";
import json from 'koa-json';
import logger from 'koa-logger';
import bodyparser from 'koa-bodyparser';


const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx: Context) => {
  ctx.body = 'Hello World';
});

app
  .use(json())
  .use(logger())
  .use(bodyparser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
