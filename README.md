jQuery-on-event-binding-polyfill
=================================

jQuery .on() method support for older (pre v1.7) versions of jQuery.

Monkeypatches jQuery with a new jQuery.fn.on method if it is not already present.

Include a tag for this script just after your jquery tag to provide .on() event binding syntax in older versions of jQuery.

Why? If you're stuck using an older version of jQuery on your project, this little plugin provides the syntactic sugar of the .on() method found in v1.7+
