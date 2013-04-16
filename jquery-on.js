;(function (factory) {
  // Register as an anonymous AMD module if relevant, otherwise assume oldskool browser globals:
  if (typeof define === "function" && define.amd)
    define(["jquery"], factory);
  else
    factory(jQuery);
})(function( $, undefined ) {

  // Monkeypatch older versions of jQuery to support event binding & delegation using the more convenient .on() method:
  // This method minimises to less than ~150 bytes :)
  if( !$.fn.on ){

    // New syntax:
    // .on( events [, selector ] [, data ], handler(eventObject) )
    // Old syntax:
    // .bind( eventType [, data ], handler(eventObject) )
    // .live( eventType [, data ], handler(eventObject) )
    // .delegate( selector, eventType [, data], handler(eventObject) )    

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

});