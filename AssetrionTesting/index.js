// 介绍 node.js 中 assert 模块的作用，并给出基本的demo

// strict assertion mode

import { strict as assert } from 'node:assert';

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
