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
             * @method link
             * @param scope {Object}
             * @return {void}
             */
            link: function link(scope, element) {



            }

        };

    }]);

})(window.angular);