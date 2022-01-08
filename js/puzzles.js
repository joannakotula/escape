const PuzzleType = Object.freeze({dragAndDrop: 'dragandrop', button: 'button'});


(function ($) {
  function addAnswer(map, key, value) {
      if (!map) {
          map = new Map();
      }
      if(!map.has(key)) {
          map.set(key, []);
      }
      var list = map.get(key);
      list.push(value);
      return map;
  }

  function isValidSoFar(expected, actual, ordered) {
    return actual.every(function (element, index) {
      if (ordered) {
        return element === expected[index];
      } else {
        return expected.indexOf(element) !== -1;
      }
    });
  }
  
  $.fn.puzzle = function (options) {

    // This is the easiest way to have default options.
    var settings = $.extend({
      puzzleType: "dragandrop",
      elementsSelector: ".puzzle_element",
      answerSelector: ".puzzle_answer",
      solution: new Map(),
      orderedSolution: true,
      onSolved: function () { },
      shuffle: false,
      verbose: false,
    }, options);

    var elements = $(this).find(settings.elementsSelector);
    var answer = $(this).find(settings.answerSelector);
    var puzzle = $(this);
    puzzle.data("wasError", false);

    function move(id, groupId) {
      console.log(`move: ${id} -> ${groupId}`)
      if (puzzle.data("wasError")) {
        return false;
      }
      var answer = addAnswer(puzzle.data('answer'), groupId, id);
      
      puzzle.data('answer', answer);

      var answerGroup = answer.get(groupId);
      var solutionGroup = settings.solution.get(groupId);

      if (!solutionGroup || answerGroup.length > solutionGroup.length) {
        puzzle.data("wasError", true);
        return false;
      }
      var validSoFar = isValidSoFar(solutionGroup, answerGroup, settings.orderedSolution);
      if (!validSoFar) {
        puzzle.data("wasError", true);
        return false;
      }
      if (validSoFar && solutionGroup.length == answerGroup.length) {
          for (const [key, expected] of settings.solution.entries()) {
            var actual = answer.get(key);
            // isValidSoFar shouldn't be necessary - if it wasn't true wasError would be true
            if (!actual || expected.length != actual.length || !isValidSoFar(expected, actual, settings.orderedSolution)) {
              return true;
            }
          }
          // puzzle is solved
          settings.onSolved();

      }
      return true;
    }

    function extractId(element){
      if (element) {
        return $(element).attr('id');
      }
      return '';
    }

    function handleAnswer(element, droptarget) {
      var valid = move($(element).attr('id'), extractId(droptarget));
      if (settings.verbose) {
        answer.removeClass(valid ? "wrong" : "valid");
        answer.addClass(valid ? "valid" : "wrong");
      }
    }

    if (settings.puzzleType == PuzzleType.dragAndDrop) {
      elements.draggable({
        revert: true,
        placeholder: true,
        droptarget: settings.answerSelector,
        drop: function (evt, droptarget) {
          handleAnswer(this, droptarget);
          $(this).appendTo(droptarget).draggable('destroy');
        }
      });
    } else if (settings.puzzleType == PuzzleType.button) {
      var addHandler = function(eventName) {
        elements.on(eventName, function() {
          handleAnswer(this);
          $(this).addClass("selected");
          $(this).unbind(eventName);
        });
      }
      addHandler("tap");
      addHandler("click");
    }

  };

}(jQuery));