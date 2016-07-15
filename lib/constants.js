function define(name, value) {
    Object.defineProperty(exports, name, {
        value:        value,
        enumerable:   true,
        writable:     false,
        configurable: false
    });
}

// Define Custom Constants
define('USERID', 'oId');
define('PASSID', 'cId');

define('CUSTOM_USERID', 'ogId');
define('CUSTOM_PASSID', 'konectorId');

define('DEFAULT_USERID', 'test');
define('DEFAULT_PASSID', 'test');
