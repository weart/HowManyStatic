$( document ).ready(function() {
    // initialize masonry (done)
//    $('#page-challenger-masonry-container').masonry({
//      columnWidth: 200,
//      itemSelector: '.vcomponent-item'
//    });

    // initialize Isotope
    var $container = $('#page-challenger-masonry-container').isotope({
      itemSelector: '.vcomponent-item',
      // initialize Masonry
      masonry: {
          columnWidth: 100
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
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });

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
     $(".diary-button").click(function() {
        if($(".list-unstyled").hasClass("hide")) {
            $(".list-unstyled").removeClass("hide");
            $("form").removeClass("hide");
        }
    });
/*    $("#challenger-toolbar #challenger-toolbar-btn-pleasure").click(function() {
        $("#challenger-toolbar #challenger-toolbar-pleasure").toggleClass("hide");
    });
    $("#challenger-toolbar #challenger-toolbar-btn-support").click(function() {
        $("#challenger-toolbar #challenger-toolbar-support").toggleClass("hide");
    });*/

});
