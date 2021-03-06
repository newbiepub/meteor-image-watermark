Package.describe({
    name: 'newbiepub:image-watermark',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Add Watermark for image using watermarkjs',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/newbiepub/meteor-image-watermark/',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});


Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');
    api.use('jquery', 'client');
    api.use(['ecmascript@0.1.6',
             'ecmascript-runtime@0.2.6'], 'client');
    api.addFiles('lib/watermark.js');

    api.export('WatermarkConfig', 'client');
});