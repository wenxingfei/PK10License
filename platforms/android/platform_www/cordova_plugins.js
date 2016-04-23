cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests"
    },
    {
        "file": "plugins/com.saatcioglu.phonegap.ClipboardManagerPlugin/www/clipboard.js",
        "id": "com.saatcioglu.phonegap.ClipboardManagerPlugin.ClipboardManagerPlugin",
        "clobbers": [
            "clipboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-x-toast": "2.5.0",
    "com.saatcioglu.phonegap.ClipboardManagerPlugin": "1.0"
};
// BOTTOM OF METADATA
});