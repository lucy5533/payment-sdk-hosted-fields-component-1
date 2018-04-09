/* @flow */

import xcomponent from 'xcomponent';

// Xcomponent stuff
//
// Questions
// - Internal assets for Payments SDK, where do they live?
//
//
export function getContingency(options : Object) : Promise<void> {
    if (!document.body) {
        return Promise.reject(new Error('Expected document.body to exist'));
    }

    const { baseUrl, contingencyUrl } = options;
    const containerId = '#payments-sdk--hosted-fields-contingency';
    let container = document.createElement('div');

    container.id = containerId;
    // $FlowFixMe
    document.body.appendChild(container);

    const ContingencyComponent = xcomponent.create({
        tag: 'hosted-fields-contingency-frame',
        url: `${ baseUrl }/hosted-fields-contingency-frame.html`
    });

    return new Promise((resolve, reject) => {
        ContingencyComponent.render({
            contingencyUrl,
            onSuccess: resolve,
            onFail:    reject
        }, containerId);
    });
}
