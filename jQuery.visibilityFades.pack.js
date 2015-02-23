/**
 * @author   Eric Christenson
 * @version  1.0
 * @license  MIT License (http://opensource.org/licenses/MIT)
 */
!function(i){i.fn.visibilityFadeIn=function(s){s=s||1e3,i(this).each(function(t){"hidden"===i(this).css("visibility")&&i(this).delay(100*t).css({opacity:0,visibility:"visible"}).fadeTo(parseInt(s),1)})}}(jQuery);
!function(i){i.fn.visibilityFadeOut=function(t){t=t||1e3,i(this).each(function(n){i(this).delay(100*n).fadeTo(parseInt(t),0,function(){i(this).css({visibility:"hidden",opacity:1})})})}}(jQuery);
!function(i){i.fn.visibilityFadeToggle=function(s){s=s||1e3,i(this).each(function(t){"hidden"===i(this).css("visibility")?i(this).delay(100*t).css({opacity:0,visibility:"visible"}).fadeTo(parseInt(s),1):i(this).delay(100*t).fadeTo(parseInt(s),0,function(){i(this).css({visibility:"hidden",opacity:1})})})}}(jQuery);