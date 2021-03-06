/**
 * @author   Eric Christenson
 * @version  2.0
 * @license  MIT License (http://opensource.org/licenses/MIT)
 */
!function(i){i.fn.visibilityFadeIn=function(s,t){var e=s||400;switch(e){case"fast":e=200;break;case"slow":e=600;break;default:e=parseInt(s)}i(this).each(function(s){"hidden"===i(this).css("visibility")&&i(this).delay(100*s).css({opacity:0,visibility:"visible"}).fadeTo(e,1)}),i(this).promise().done(function(){t()})}}(jQuery);
!function(i){i.fn.visibilityFadeOut=function(t,s){var e=t||400;switch(e){case"fast":e=200;break;case"slow":e=600;break;default:e=parseInt(t)}i(this).each(function(t){i(this).delay(100*t).fadeTo(e,0,function(){i(this).css({visibility:"hidden",opacity:1})})}),i(this).promise().done(function(){s()})}}(jQuery);
!function(i){i.fn.visibilityFadeToggle=function(s,t){var e=s||400;switch(e){case"fast":e=200;break;case"slow":e=600;break;default:e=parseInt(s)}i(this).each(function(s){"hidden"===i(this).css("visibility")?i(this).delay(100*s).css({opacity:0,visibility:"visible"}).fadeTo(e,1):i(this).delay(100*s).fadeTo(e,0,function(){i(this).css({visibility:"hidden",opacity:1})})}),i(this).promise().done(function(){t()})}}(jQuery);
