/* global define, zed */
define(function(require, exports, module) {
    return {
        listFiles: function() {
            return zed.getService("configfs").listFiles();
        },
        readFile: function(path) {
            return zed.getService("configfs").readFile(path);
        },
        writeFile: function(path, content) {
            return zed.getService("configfs").writeFile(path, content);
        },
        deleteFile: function(path) {
            return zed.getService("configfs").deleteFile(path);
        }
    };
});
