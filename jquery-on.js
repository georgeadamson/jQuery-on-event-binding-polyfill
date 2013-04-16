
// https://github.com/georgeadamson/jQuery-on-event-binding-polyfill

if( !$.fn.on ){
  
  // Monkeypatch older versions of jQuery to support event binding & delegation using the more convenient .on() method:
  // Can be minimised down to ~160 bytes if you don't need the AMD Module wrapper. :)

  /* jshint laxcomma:true, asi:true, debug:true, curly:false, camelcase:true, browser:true */
  /* global define, h3g, console, GClientGeocoder, google */

  // New syntax: (See http://api.jquery.com/on)
  //   .on( events [, selector ] [, data ], handler(eventObject) )
  // Old syntax:
  //   .bind( events [, data ], handler(eventObject) )
  //   .live( events [, data ], handler(eventObject) )
  //   .delegate( selector, events [, data], handler(eventObject) )    


  /* 
   * Tip: If you need AMD Module support, wrap this script inside the following syntax:
   * ;(function (factory) {
   *   // Register as an anonymous AMD module if relevant, otherwise assume oldskool browser globals:
   *   if (typeof define === "function" && define.amd)
   *     define(["jquery"], factory);
   *   else
   *     factory(jQuery);
   * })(function( $ ) {
   *
   *  ...script goes here...
   *
   * });
   */


  $.fn.on = function( events, selector, data, handler ){

    var self = this
      , args = arguments.length

    // .on( events, selector, data, handler )
    if( args > 3 )
      return self.delegate( selector, events, data, handler )

    else if( args > 2 ){
    
      // .on( events, selector, handler )
      if(typeof selector === 'string')
        // handler = data
        return self.delegate( selector, events, data )

      // .on( events, data, handler )
      else
        // handler = data
        // data    = selector
        return self.bind( events, selector, data )
    }

    // .on( events, handler )
    else
      // handler = selector
      return self.bind( events, selector )

  }

}
