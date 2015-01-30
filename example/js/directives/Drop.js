(function($angular) {

    // Our lovely directive!
    $angular.module('imgurApp').directive('drop', ['$timeout', 'imgur', function DropDirective($timeout, imgur) {

        return {

            /**
             * @property restrict
             * @type {String}
             * @default "EAC"
             */
            restrict: 'EAC',

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
                 * @property message
                 * @type {String}
                 */
                scope.message = 'Drop Image...';

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
                    scope.message = 'Uploading Image...';

                    imgur.upload(image).then(function then(model) {

                        scope.link = model.link;
                        scope.message = 'Uploaded Image!';

                        $timeout(function timeout() {
                            scope.message = 'Drop Image...';
                        }, 2500);

                    });

                });

                // Prevent the default behaviour on certain events.
                element.on('dragover dragend dragleave', scope.preventDefaultBehaviour);

            }

        };

    }]);

})(window.angular);