const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('dish.html', 'utf8');

function assertIncludes(fragment, label) {
  assert.ok(html.includes(fragment), `missing ${label}: ${fragment}`);
}

assert.ok(!html.includes('鸡茸'), 'recipe copy should use homestyle chicken wording instead of 鸡茸');

assertIncludes('id="current-meal-hero"', 'current meal hero');
assertIncludes('id="current-swap-actions"', 'dynamic current meal swap actions');
assertIncludes('id="next-meal-preview"', 'next meal preview');
assertIncludes('body[data-mode="caregiver"] .meals-section', 'caregiver meal spacing rule');
assertIncludes('data-mode="elder"', 'elder default mode');
assertIncludes('toggleCaregiverMode', 'caregiver mode toggle');
assertIncludes('prefers-reduced-motion', 'reduced motion support');
assertIncludes('isGrandmaRisky', 'grandma risk filter');
assertIncludes('getSafeMealOptions', 'safe meal pool');

const script = html.match(/<script>([\s\S]*)<\/script>/);
assert.ok(script, 'inline script block should exist');

const sandbox = {
  document: {
    querySelectorAll: () => [],
    querySelector: () => null,
    getElementById: () => null,
    body: { appendChild() {}, removeChild() {} },
    createElement: () => ({ style: {}, scrollWidth: 0, scrollHeight: 0, textContent: '' }),
    title: '',
  },
  window: { addEventListener() {} },
  requestAnimationFrame() {},
  getComputedStyle: () => ({
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    fontWeight: '700',
  }),
  Date,
  Math,
};

vm.createContext(sandbox);
vm.runInContext(script[1], sandbox);

assert.strictEqual(typeof sandbox.isGrandmaRisky, 'function', 'isGrandmaRisky should be callable');
assert.strictEqual(typeof sandbox.getSafeMealOptions, 'function', 'getSafeMealOptions should be callable');
assert.strictEqual(typeof sandbox.getCurrentSwapActions, 'function', 'getCurrentSwapActions should be callable');

const riskySamples = [
  { name: '榨菜', method: '凉拌', ingredients: ['榨菜1小包'] },
  { name: '土豆烧肉', method: '炖', ingredients: ['五花肉或里脊200g', '生抽2勺', '老抽几滴', '冰糖2颗'] },
  { name: '红薯泥', method: '蒸', ingredients: ['红薯300g'] },
  { name: '蒜泥黄瓜', method: '凉拌', ingredients: ['黄瓜1根', '蒜1瓣'] },
];

for (const recipe of riskySamples) {
  assert.strictEqual(sandbox.isGrandmaRisky(recipe), true, `${recipe.name} should be risky by default`);
}

assert.strictEqual(
  sandbox.isGrandmaRisky({ name: '南瓜小米粥', method: '煮', ingredients: ['小米半杯', '南瓜200g'] }),
  false,
  'soft pumpkin millet porridge should be safe',
);

assert.strictEqual(
  sandbox.getSafeMealOptions(sandbox.coldDishes, '午').length,
  0,
  'cold dishes should not appear in the default grandma-safe lunch pool',
);

assert.strictEqual(
  sandbox.getCurrentSwapActions('早').map((action) => action.label).join('|'),
  '换主食|换菜品',
  'breakfast should offer staple and dish swaps',
);

assert.strictEqual(
  sandbox.getCurrentSwapActions('午').map((action) => action.label).join('|'),
  '换主食|换热菜|换热汤',
  'lunch should offer staple, hot dish, and soup swaps',
);

assert.strictEqual(
  sandbox.getCurrentSwapActions('晚').map((action) => action.label).join('|'),
  '换主食|换菜品',
  'dinner should offer staple and dish swaps',
);

console.log('elder-friendly front-end checks passed');
