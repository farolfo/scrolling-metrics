//     Scrolling Metrics 0.0.1

//     (c) 2015 Franco Arolfo
//     Scrolling Metrics may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://farolfo.github.io/scrolling-metrics

(function() {

    var config = {

        /* URL of the Scrolling Metrics' server
         */
        serverUrl: 'ws://localhost:8001',

        /* how often do we send a sample to the server
         */
        interval: 1000
    };

    setInterval(dispatchSample, config.interval);

    this.serverSocket = new WebSocket(config.serverUrl);

    this.clientId = generateId();
    this.clientUrl = getUrl();

    /**
     * Dispatches a sample of the current scrolling settings
     */
    function dispatchSample() {
        var sample = {
            clientId: this.clientId,
            clientUrl: this.clientUrl,
            timestamp: (new Date()).getTime(),
            sample: collectSample()
        };

        // send via web socket the collected sample
        serverSocket.send(JSON.stringify(sample));
    }

    /**
     * Returns a sample of the current scrolling settings
     */
    function collectSample() {
        return {
            pageHeight: document.body.scrollHeight,   // full page height in px
            windowHeight: window.innerHeight,         // window's height in px
            heightOffsetTop: document.body.scrollTop  // height offset from the top in px
        };
    }

    /**
     * Returns the current URL
     */
    function getUrl() {
        return document.url;
    }

    /**
     * UUID generator to identify the current client
     */
    function generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

})();
