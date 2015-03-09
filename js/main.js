$( document ).ready(function() {

/****************\
 * NAVBAR       *
\****************/
    $(".goToCalendars").click(function() {
        $("#page-challenger,#page-challenger-modal,#page-charts").addClass("hide");
        $("#page-todo,#page-events,#page-filters").removeClass("hide");
    });

    $(".goToChallenger").click(function() {
        $("#page-challenger-modal,#page-todo,#page-events,#page-filters,#page-charts").addClass("hide");
        $("#page-challenger").removeClass("hide");
    });

    $(".goToChallengerModal").click(function() {
        $("#page-challenger,#page-todo,#page-events,#page-filters,#page-charts").addClass("hide");
        $("#page-challenger-modal").removeClass("hide");
    });




/****************\
 * CHALLENGER   *
\****************/
    // initialize masonry (done)
//    $('#page-challenger-masonry-container').masonry({
//      columnWidth: 200,
//      itemSelector: '.vcomponent-item'
//    });

    // initialize Isotope
    var $containerChallenger = $('#page-challenger-masonry-container').isotope({
      itemSelector: '#page-challenger-masonry-container .vcomponent-item',
      // initialize Masonry
      masonry: {
          columnWidth: 200
      }
    });

    // bind filter button click
    /*$('#page-challenger-tags-filter').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      if(filterValue == 'filterTag') {
          // filter function
          window.tag = $( this ).attr('data-filter-tag');
          filterValue = function(tag) {
              var tags = $(this).find('.p-category').data('tags').split(";"); //or .attr('data-tags');
              for (var i = 0, len = tags.length; i < len; i++) {
                  if(window.tag == tags[i]) {
                      return true;
                  }
              }
              return false;
          };
      } else {
          window.tag = false;
      }
      $container.isotope({ filter: filterValue });
  });*/
    $("#challenger-toolbar").on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        if(filterValue == 'filterTag') {
            // filter function
            window.tag = $( this ).attr('data-filter-tag');
            filterValue = function(tag) {
                if( $("#challenger-toolbar button.active").length === 0 ) {
                    return true;
                } else if( $(this).find('.p-category').length > 0 ) {
                    var tags = $(this).find('.p-category').data('tags').split(";"); //or .attr('data-tags');
                    for (var i = 0, len = tags.length; i < len; i++) {
                        if(window.tag == tags[i]) {
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            };
        } else {
            window.tag = false;
        }
        $containerChallenger.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
//  $('.button-group').each( function( i, buttonGroup ) {
//      var $buttonGroup = $( buttonGroup );
//      $buttonGroup.on( 'click', 'button', function() {
//          $buttonGroup.find('.is-checked').removeClass('is-checked');
//          $( this ).addClass('is-checked');
//      });
//  });

    $("#challenger-toolbar #challenger-toolbar-btn-mind").click(function() {
        if($("#challenger-toolbar-mind").hasClass("hide")) {
            $("#challenger-toolbar #challenger-toolbar-btn-body").removeClass("active");
            $("#challenger-toolbar-body").addClass("hide");

        }
        $(this).toggleClass("active");
        $("#challenger-toolbar-mind").toggleClass("hide");
    });
    $("#challenger-toolbar #challenger-toolbar-btn-body").click(function() {
        if($("#challenger-toolbar-body").hasClass("hide")) {
            $("#challenger-toolbar #challenger-toolbar-btn-mind").removeClass("active");
            $("#challenger-toolbar-mind").addClass("hide");
        }
        $(this).toggleClass("active");
        $("#challenger-toolbar-body").toggleClass("hide");
    });

/*    $("#challenger-toolbar #challenger-toolbar-btn-pleasure").click(function() {
        $("#challenger-toolbar #challenger-toolbar-pleasure").toggleClass("hide");
    });
    $("#challenger-toolbar #challenger-toolbar-btn-support").click(function() {
        $("#challenger-toolbar #challenger-toolbar-support").toggleClass("hide");
    });*/




/**********************\
 * CHALLENGER MODAL   *
page-challenger-modal
    page-challenger-modal-periodicity
        challenger-modal-periodicity-btn-annual
        challenger-modal-periodicity-btn-monthly
        challenger-modal-periodicity-btn-weekly
        //challenger-modal-periodicity-btn-daily

    page-challenger-modal-periodicity-annual
        challenger-modal-periodicity-annual-btn-one
        challenger-modal-periodicity-annual-btn-nine
        challenger-modal-periodicity-annual-btn-six
        challenger-modal-periodicity-annual-btn-three

    page-challenger-modal-periodicity-monthly
        challenger-modal-periodicity-monthly-btn-one
        challenger-modal-periodicity-monthly-btn-three
        challenger-modal-periodicity-monthly-btn-two
        challenger-modal-periodicity-monthly-btn-four

    page-challenger-modal-periodicity-weekly
        challenger-modal-periodicity-weekly-btn-monday
        challenger-modal-periodicity-weekly-btn-tuesday
        challenger-modal-periodicity-weekly-btn-wednesday
        challenger-modal-periodicity-weekly-btn-thursday
        challenger-modal-periodicity-weekly-btn-friday
        challenger-modal-periodicity-weekly-btn-saturday
        challenger-modal-periodicity-weekly-btn-sunday
\**********************/

    $("#challenger-modal-periodicity-btn-annual").click(function() {
        $("#page-challenger-modal-periodicity button").removeClass("active");
        $(this).addClass("active");
        $("#page-challenger-modal-periodicity-monthly,#page-challenger-modal-periodicity-weekly").addClass("hide");
        $("#page-challenger-modal-periodicity-annual").removeClass("hide");
    });

    $("#challenger-modal-periodicity-btn-monthly").click(function() {
        $("#page-challenger-modal-periodicity button").removeClass("active");
        $(this).addClass("active");
        $("#page-challenger-modal-periodicity-annual,#page-challenger-modal-periodicity-weekly").addClass("hide");
        $("#page-challenger-modal-periodicity-monthly").removeClass("hide");
    });

    $("#challenger-modal-periodicity-btn-weekly").click(function() {
        $("#page-challenger-modal-periodicity button").removeClass("active");
        $(this).addClass("active");
        $("#page-challenger-modal-periodicity-annual,#page-challenger-modal-periodicity-monthly").addClass("hide");
        $("#page-challenger-modal-periodicity-weekly").removeClass("hide");
    });



/****************\
 * CALENDAR     *
\****************/
    var $container = $('#page-todo-packery-container').packery({
        itemSelector: "#page-todo-packery-container .vcomponent-item",
        columnWidth: 80,
        rowHeight: 80
    });

    $container.find('.vcomponent-item').each( function( i, itemElem ) {
        // make element draggable with Draggabilly
        var draggie = new Draggabilly( itemElem, {
            containment: '#page-todo-packery-container',
            handle: '.glyphicon-move'
        } );
        // bind Draggabilly events to Packery
        $container.packery( 'bindDraggabillyEvents', draggie );
    });

    $("#page-events .diary-button").click(function() {
        $("#page-events-diary").toggleClass("hide");
        $(this).toggleClass("active");
    });
});
