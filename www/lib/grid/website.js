
/**
 * Dependencies
 */

var Icon = require('./icon');
require('./website.css');

/**
 * Logger
 *
 * @return {Function}
 */
var debug = 1 ? console.log.bind(console, '[website-icon]') : function() {};

/**
 * Exports
 */

module.exports = WebsiteIconView;

/**
 * Extends `Emitter`
 */

WebsiteIconView.prototype = Object.create(Icon.prototype);

function WebsiteIconView(data) {
  Icon.apply(this, arguments);
  this.el.className += ' grid-icon-website';
}

WebsiteIconView.prototype.render = function(data) {
  Icon.prototype.render.apply(this, arguments); // super
  var self = this;
  this.els.title.textContent = data.title;

  if (!data.icon) {
    this.el.classList.add('no-icon');
    return;
  }

  this.els.imageNode.src = data.icon;
  this.els.imageNode.addEventListener('load', function(e) {
    debug('icon loaded');
    var area = this.naturalWidth * this.naturalHeight;
    if (area < (80 * 80)) self.el.classList.add('no-icon');
  });
};