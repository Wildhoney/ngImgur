beforeEach(module('ngImgur'));

describe('Imgur', function() {

    it('Should be able able to upload a picture to Imgur.com;', inject(function($window, imgur, imgurOptions) {

        expect(typeof imgur.upload).toBe('function');

        // Test parameters.
        imgurOptions.API_KEY = 'imgurAPIKey123';
        var imageData = 'myImageData',
            mimeType  = 'image/png,123456abcdef',
            imgurLink = 'http://imgur.com/juXaxoV';

        // Mock the FileReader constructor.
        $window.FileReader = function FileReaderMock() {

        };

        $window.FileReader.prototype = {

            onload: function onLoad() {},

            readAsDataURL: function(data) {

                // Ensure the image data passed is valid.
                expect(data).toEqual(imageData);

                // Mock the event for the `onLoad` event.
                this.onload({ target: { result: mimeType }});

            }
        };

        // Attempt to mock the uploading of the image to Imgur.com.
        imgur.upload(imageData).then(function then(response) {
            expect(response.link).toEqual(imgurLink);
        });

        inject(function($http, $httpBackend) {

            // Mock the HTTP response.
            var responseMock = {
                data: { link: imgurLink }
            };

            // Mock the HTTP request.
            $httpBackend.when(imgurOptions.UPLOAD_METHOD, imgurOptions.UPLOAD_URL).respond(200, responseMock);
            $httpBackend.expect(imgurOptions.UPLOAD_METHOD, imgurOptions.UPLOAD_URL);
            $httpBackend.flush();

        });

    }));

});