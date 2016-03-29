angular.module('core').directive('resizer', function(){
    return {
        restrict: 'A',
        link: function($scope, $elem, $attrs){

            var x = 0, y = 0;

            function mouseUp(e) {
                angular.element(document).unbind('mousemove', mouseMove);
            }

            function mouseDown(e) {
                e.stopPropagation();
                x = e.clientX;
                y = e.clientY;
                angular.element(document).bind('mousemove', mouseMove);
            }

            function mouseMove(e) {
                e.stopPropagation();
                if ($($attrs.resizerBefore).length > 0) {
                    var dx = e.clientX - x;
                    var dy = e.clientY - y;
                    if ($attrs.resizerDirection == 'horizontal') {
                        var h = $($attrs.resizerBefore).height() + dy;
                        $($attrs.resizerBefore).css('height', h+'px');
                        if ($($attrs.resizerAfter).length > 0) {
                            var ah = $($attrs.resizerAfter).height() - dy;
                            $($attrs.resizerAfter).css('height', ah+'px');
                        }
                    } else if ($attrs.resizerDirection == 'vertical') {
                        var w = ($($attrs.resizerBefore).width() + dx) / ($( window ).width() - 66) * 100;
                        $($attrs.resizerBefore).css('width', w+'%');
                        skinnify($($attrs.resizerBefore), w);
                        if ($($attrs.resizerAfter).length > 0) {
                            var aw = ($($attrs.resizerAfter).width() - dx) / ($( window ).width() - 66) * 100;
                            $($attrs.resizerAfter).css('width', aw+'%');
                            skinnify($($attrs.resizerAfter), aw);
                        }
                    }
                    x = e.clientX;
                    y = e.clientY;
                }
            }

            function skinnify($el, w) {
                if (w < 25) {
                    $el.addClass('skinny');
                } else {
                    $el.removeClass('skinny');
                }
            }

            angular.element(document).bind('mouseup', mouseUp);

            $elem.bind('mousedown', mouseDown);
        }
    }
});
