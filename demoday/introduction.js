var collegeShots = {
    pause: false,
    start:1,
    screenFrame: 0,
    frameCount: 4,

    change: function(to) {
    
        if (to > this.start) {
            if (this.screenFrame == this.frameCount -1) {
                this.pause = false;
                $('#college-imgs').animate({top: 0, height:700}, 500, 'swing');
                return;
            }
            this.screenFrame++;
        }
        else {
            this.pause = false;
            this.screenFrame = 0;
            $('#college-imgs').animate({top: 0, height:700}, 500, 'swing');
            return;
        }

        this.pause = true;        
        switch (this.screenFrame) {
            case 1:
                console.log("next -> nnext");
                $('#college-imgs').animate({top: -700, height:1400}, 500, 'swing');
                break;
            case 2:
                console.log("nnext -> nnnext");
                $('#college-imgs').animate({top: -1400, height:2100}, 500, 'swing');
                break;
            case 3:
                $('#college-imgs').animate({top: -2100, height:2800}, 500, 'swing');
                break;
        }
    }
}

var learning = {
    pause: false,
    start:2,
    screenFrame: 0,
    frameCount: 2,

    change: function(to) {
        if (to > this.start) {
            console.debug("y");
            if (this.screenFrame == this.frameCount -1) {
                this.pause = false;
                $('#procrastinator').fadeOut(0);
                this.screenFrame = 0;
                return;
            }
            console.debug("yo");
            this.screenFrame++;
            this.pause = true;
            $('#procrastinator').fadeIn(500);
        }
        else {
            if (this.screenFrame == 0) {
                this.pause = false;
                $('#procrastinator').fadeOut(0);
                return;
            }
            this.screenFrame--;
        }
    }
}

var screens = {
    pause: false,
    demoSlide:4,
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
        $('#iphone_screen').animate({"left": -254 * this.screenFrame + "px"}, 500);
        $('#iphone_control').css({"left": -254 * this.screenFrame + "px"});
    }
}

var conversion = {
    pause: false,
    start:3,
    conversionFrame: 0,

    change: function(to) {
        console.log('00');

        if (to > this.start) {

            console.log('01');
            if (this.conversionFrame == 3) {
                this.pause = false;
                return;
            }
            else this.conversionFrame++;

            console.log('02');
        }
        else {
            this.pause = false;
            this.conversionFrame = 0;
            $('#books').css({height:700, top: 0, left: 0});
            $('#books').fadeIn(200);
            $('#ray').fadeOut(200);
            $('#cookies').fadeOut(200);
            return;
        }

        this.pause = true;
        var newClass = "conversion-state-" + this.conversionFrame;
        
        console.log(this.conversionFrame);
        
        switch (this.conversionFrame) {
            case 0:
                break;
            case 1:
                $('#books').animate({height:276, top: 413, left: 80}, 300, 'linear', function() {
                    $('#ray').fadeIn(300);
                });
                break;
            case 2:
                $('body').animate({backgroundColor:'white'}, 50, 'linear', function() {
                    $('#cookies').animate({height: 285, top: 401, left: 70}, 0, 'linear', function() {
                        $('#cookies').fadeIn(200);
                        $('body').animate({backgroundColor:'#218DD2'}, 200);
                    });
                });
                $('#books').fadeOut(150);
                break;
            case 3:
                $('#ray').fadeOut(150);
                $('#cookies').animate({height:700, top: 10, left: 0}, 300, 'linear', function() {});
                break;
        }
    }
}

$(function() {
	// Deck initialization
	$.deck('.slide');

    /* inject screen change events */
    $(document).bind('deck.change', function(event, from, to) {

        console.log(from);

        /* forward in learning... */
        if (from == learning.start) learning.change(to);

        /* forward in collegeShots */
        else if (from == collegeShots.start) collegeShots.change(to);

        /* forward in conversion */
        else if (from == conversion.start) conversion.change(to);

        /* forward to demoSlide */
        else if (from == screens.demoSlide) screens.change(to);

    });

});
