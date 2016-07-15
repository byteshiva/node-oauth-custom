var socks     = require('socksv5'),
    constants = require('./constants');

exports.Tunnel = TunnelingAgent;

function TunnelingAgent(options) {
  var proxyHost,
      proxyPort,
      credentials = {};

  options = options || {};

  proxyHost = options.proxyHost;
  proxyPort = options.proxyPort || constants.DEFAULT_SOCKS_PORT;
  credentials[constants.CUSTOM_USERID] = options[constants.USERID] || constants.DEFAULT_USERID;
  credentials[constants.CUSTOM_PASSID] = options[constants.PASSID] || constants.DEFAULT_PASSID;

  var socksConfig = {
    proxyHost: proxyHost,
    proxyPort: proxyPort,
    auths: [socks.auth.Custom(JSON.stringify(credentials), constants.USERID)]
  };

  var agent = new socks.HttpAgent(socksConfig);

  return agent;
};
