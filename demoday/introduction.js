var screens = {
    pause: false,
    demoSlide:5,
    screenFrame: 0,
    screenWidth: 254,
    frameCount: 5,

    change: function(to) {
        if (to > this.demoSlide) {
            if (this.screenFrame == this.frameCount -1) {
                this.pause = false;
                return;
            }
            this.screenFrame++;
        }
        else {
            if (this.screenFrame == 0) {
                this.pause = false;
                return;
            }
            this.screenFrame--;
        }

        this.pause = true;
        var newClass = "iphone-screen-offset-" + this.screenFrame;
        $('#iphone_screen').animate({"left": -254 * this.screenFrame + "px"}, 500);
    }
}

$(function() {
	// Deck initialization
	$.deck('.slide');

    /* inject screen change events */
    $(document).bind('deck.change', function(event, from, to) {

        /* forward to demoSlide */
        if (from == screens.demoSlide) screens.change(to);

    });

});
