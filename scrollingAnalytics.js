//     Scrolling Analytics 0.0.1

//     (c) 2015 Franco Arolfo
//     Scrolling Analytics may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://farolfo.github.io/scrolling-analytics

(function() {
    setInterval(dispatchSample, 1000);

    function dispatchSample() {
        var sample = {
            url: getUrl(),
            timestamp: (new Date()).getTime(),
            sample: collectSample()
        };

        // send via web socket the collected sample
        alert(JSON.stringify(sample));
    }

    function collectSample() {
        return {
            clientWindowHeight: window.innerHeight,    // window client height
            offsetMax: document.body.scrollHeight,     // how much can we scroll  
            heightOffsetTop: document.body.scrollTop   // height offset at the top
        };
    }

    function getUrl() {
        return document.url;
    }

})();
