/* @flow */

import assert from 'assert';

import { getContingency } from '../src/contingency';

describe('getContingency', () => {
    it('creates an iframe for contingecy', () => {
        return getContingency({
            baseUrl:        'https://example.com',
            contingencyUrl: 'https://some-contingency.com/path'
        }).then(() => {
            assert.ok(document.querySelector('#payments-sdk--hosted-fields-contingency'));
        });
    });
});
