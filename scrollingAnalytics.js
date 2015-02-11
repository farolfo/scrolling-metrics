//     Scrolling Analytics 0.0.1

//     (c) 2015 Franco Arolfo
//     Scrolling Analytics may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://farolfo.github.io/scrolling-analytics

(function() {
      setInterval(dispatchSample, 1000);

      function dispatchSample() {
          var timeStamp = (new Date()).getTime(),
              scrollPosition = calculatePosition(),
              url = ;

          // send via web socket the collected sample
      }

      function calculatePosition() {
          
      }
})();
