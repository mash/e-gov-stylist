import { strict as assert } from 'assert';
import { replace } from "../src/util.js"

const tests = [
  {
    input: '...（...（...（...）...）...）...（...（...）...）...',
    output: '...<span>（...<span>（...<span>（...）</span>...）</span>...）</span>...<span>（...<span>（...）</span>...）</span>...',
  }
]

for (const tt of tests) {
  const res = replace(tt.input, "<span>（", "）</span>")
  assert.equal(res, tt.output)
}
