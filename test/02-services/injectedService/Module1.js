
module.exports = {
  simple_service: function() {
    return "Module1";
  },
  another_service: function() {
    return module.exports.simple_service_svc.sequence();
  }
};
module.exports.__scattered = {
  properties: {simple_service_svc: 'svc!simple_service'},
  provides: {
    simple_service: {},
    another_service: {}
  }
};