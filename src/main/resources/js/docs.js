/**
 * This function generates the “unrolling” of the secction by adding
 * some classes to the element and applying a jQuery slide action
 *
 * @param el The DOM element on which to perform the action
 * @param speed The desired speed to slide up/down the section
 */
function activate (el, speed) {
    if (!el.parent().hasClass('active')) {
        $('.sidebar-nav li ul').slideUp(speed);
        el.next().slideToggle(speed);
        $('.sidebar-nav li').removeClass('active');
        el.parent().addClass('active');
    }
    else {
        el.next().slideToggle(speed);
        $('.sidebar-nav li').removeClass('active');
    }
}
//
// On click slide down or up the links section
$('.drop-nested').click(function(e) {
    e.preventDefault();
    activate($(this), 300);
});

// This detects the path to activate the current link accordingly
var current = location.pathname;
$('.sidebar-nav > li > ul a').each(function() {
    var $this = $(this);
    console.log('In');
    console.log('this',$this);
    console.log('this attr href',$this.attr('href'));

    // If the current path is like this link, make it active
    if ($this.attr('href') === current){
        $this.addClass('active');
        activate($this.closest('.sidebar-nav > li').children('a'), 0);
    }
})

$('.sidebar-nav > li > a').each(function() {
    var $this = $(this);
    console.log('In');
    console.log('this',$this);
    console.log('this attr href',$this.attr('href'));

    // If the current path is like this link, make it active
    if ($this.attr('href') === current){
        $this.addClass('active');
        activate($this.closest('.sidebar-nav > li').children('a'), 0);
    }
})
