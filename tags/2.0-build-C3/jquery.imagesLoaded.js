$.fn.imagesLoaded=function(c){var b=this.filter("img"),a=b.length,d="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";b.one("load",function(){if(--a<=0&&this.src!==d){c.call(b,this)}}).each(function(){if(this.complete||this.complete===undefined){var e=this.src;this.src=d;this.src=e}});return this};