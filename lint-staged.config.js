export default {
    '**/resources': 'prettier --write --ignore-unknown',
    '**/*.php*': ['vendor/bin/duster fix'],
};
