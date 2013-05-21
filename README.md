jQuery-on-event-binding-polyfill
=================================

jQuery .on() method support for older (pre v1.7) versions of jQuery.

Why? If you're stuck using an older version of jQuery, this little plugin provides the syntactic sugar of the .on() method found in v1.7+

How to use it: Include a tag for this script just after your jquery tag.
Subsequent scripts can then bind events using the .on() syntax.

<pre>
    &lt;script&gt;jquery.min.js&lt;/script&gt;
    &lt;script&gt;jquery-on.min.js&lt;/script&gt;
</pre>

Note: This *won't* monkeypatch jQuery with a new jQuery.fn.on method if it is already present.
