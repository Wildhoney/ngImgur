(function($angular) {

    // Our lovely directive!
    $angular.module('imgurApp').directive('drop', ['imgur', function DropDirective(imgur) {

        return {

            /**
             * @property restrict
             * @type {String}
             * @default "C"
             */
            restrict: 'C',

            /**
             * @property scope
             * @type {Boolean}
             */
            scope: true,

            /**
             * @method link
             * @param scope {Object}
             * @return {void}
             */
            link: function link(scope) {

                /**
                 * @property link
                 * @type {String}
                 */
                scope.link = '';

            }

        };

    }]);

})(window.angular);