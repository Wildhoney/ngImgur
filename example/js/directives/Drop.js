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
             * @param element {Object}
             * @return {void}
             */
            link: function link(scope, element) {

                // Define the Imgur.com API key.
                imgur.setAPIKey('Client-ID 40dbfe0cfea73a7');

                /**
                 * @property link
                 * @type {String}
                 */
                scope.link = '';

                /**
                 * @method preventDefaultBehaviour
                 * @param event {Object}
                 * @return {void}
                 */
                scope.preventDefaultBehaviour = function preventDefaultBehaviour(event) {
                    event.preventDefault();
                    event.stopPropagation();
                };

                element.on('drop', function onDrag(event) {

                    scope.preventDefaultBehaviour(event);
                    var image = event.dataTransfer.files[0];

                    imgur.upload(image).then(function then(model) {
                        scope.link = model.link;
                    });

                });

                // Prevent the default behaviour on certain events.
                element.on('dragover dragend dragleave', scope.preventDefaultBehaviour);

            }

        };

    }]);

})(window.angular);