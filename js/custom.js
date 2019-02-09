
    var startDate, endDate, startInstance, endInstance;
    var fillInputs = function () {
        startInstance.$elem.val(startDate ? startDate.locale(startInstance.config.format).format(startInstance.config.format) : "");
        endInstance.$elem.val(endDate ? endDate.locale(endInstance.config.format).format(endInstance.config.format) : "");
    };

    var startDate, endDate, startInstance, endInstance;
    var fillInputs = function () {
        startInstance.$elem.val(startDate ? startDate.locale(startInstance.config.format).format(startInstance.config.format) : "");
        endInstance.$elem.val(endDate ? endDate.locale(endInstance.config.format).format(endInstance.config.format) : "");
    };


    $("#hotelsStart").caleran({
        startEmpty: $("#hotelsStart").val() === "",
        startDate: $("#hotelsStart").val(),
        endDate: $("#hotelsEnd").val(),
        enableKeyboard: false,
        oninit: function (instance) {
            startInstance = instance;
            if (!instance.config.startEmpty && instance.config.startDate) {
                instance.$elem.val(instance.config.startDate.locale(instance.config.format).format(instance.config.format));
                startDate = instance.config.startDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onfirstselect: function (instance, start) {
            startDate = start.clone();
            startInstance.globals.startSelected = false;
            startInstance.hideDropdown();
            endInstance.showDropdown();
            endInstance.config.minDate = startDate.clone();
            endInstance.config.startDate = startDate.clone();
            endInstance.config.endDate = null;
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
            endInstance.globals.firstValueSelected = true;
            endInstance.setDisplayDate(start);
            if (endDate && startDate.isAfter(endDate)) {
                endInstance.globals.endDate = endDate.clone();
            }
            endInstance.updateHeader();
            endInstance.reDrawCells();
            fillInputs();
        }
    });
    $("#hotelsEnd").caleran({
        startEmpty: $("#hotelsEnd").val() === "",
        startDate: $("#hotelsStart").val(),
        endDate: $("#hotelsEnd").val(),
        enableKeyboard: false,
        autoCloseOnSelect: true,
        oninit: function (instance) {
            endInstance = instance;
            if (!instance.config.startEmpty && instance.config.endDate) {
                instance.$elem.val(instance.config.endDate.locale(instance.config.format).format(instance.config.format));
                endDate = instance.config.endDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onafterselect: function (instance, start, end) {
            startDate = start.clone();
            endDate = end.clone();
            endInstance.hideDropdown();
            startInstance.config.endDate = endDate.clone();
            startInstance.globals.firstValueSelected = true;
            fillInputs();
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
        }
    });




    $("#flightStart").caleran({
        startEmpty: $("#flightStart").val() === "",
        startDate: $("#flightStart").val(),
        endDate: $("#flightEnd").val(),
        showHeader: false,
        enableKeyboard: false,
        oninit: function (instance) {
            startInstance = instance;
            if (!instance.config.startEmpty && instance.config.startDate) {
                instance.$elem.val(instance.config.startDate.locale(instance.config.format).format(instance.config.format));
                startDate = instance.config.startDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onfirstselect: function (instance, start) {
            startDate = start.clone();
            startInstance.globals.startSelected = false;
            startInstance.hideDropdown();
            endInstance.showDropdown();
            endInstance.config.minDate = startDate.clone();
            endInstance.config.startDate = startDate.clone();
            endInstance.config.endDate = null;
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
            endInstance.globals.firstValueSelected = true;
            endInstance.setDisplayDate(start);
            if (endDate && startDate.isAfter(endDate)) {
                endInstance.globals.endDate = endDate.clone();
            }
            endInstance.updateHeader();
            endInstance.reDrawCells();
            fillInputs();
        }
    });


    $("#flightEnd").caleran({
        startEmpty: $("#flightEnd").val() === "",
        startDate: $("#flightStart").val(),
        endDate: $("#flightEnd").val(),
        enableKeyboard: false,
        showHeader: false,
        autoCloseOnSelect: true,
        oninit: function (instance) {
            endInstance = instance;
            if (!instance.config.startEmpty && instance.config.endDate) {
                instance.$elem.val(instance.config.endDate.locale(instance.config.format).format(instance.config.format));
                endDate = instance.config.endDate.clone();
            }
        },
        onbeforeshow: function (instance) {
            if (startDate) {
                startInstance.config.startDate = startDate;
                endInstance.config.startDate = startDate;
            }
            if (endDate) {
                startInstance.config.endDate = endDate.clone();
                endInstance.config.endDate = endDate.clone();
            }
            fillInputs();
            instance.updateHeader();
            instance.reDrawCells();
        },
        onafterselect: function (instance, start, end) {
            startDate = start.clone();
            endDate = end.clone();
            endInstance.hideDropdown();
            startInstance.config.endDate = endDate.clone();
            startInstance.globals.firstValueSelected = true;
            fillInputs();
            endInstance.globals.startSelected = true;
            endInstance.globals.endSelected = false;
        }
    });





// tabs active     
$(".search-step").click(function(){
    $('.search-step.active').removeClass('active');
    $(this).addClass('active');
});
$(".tripsTab ul li").click(function(){
    $('.tripsTab ul li.active').removeClass('active');
    $(this).addClass('active');
});

// hide the calendar
$('#oneTrip').on('click', function(){
    $('#twoWay').hide();
    // $('#oneWay input').removeClass('caleran-ex-6-5-start');
    // $('#oneWay input').addClass('caleran-ex-6-2');
    // $(".caleran-ex-6-2").caleran({
    //     singleDate: true,
    //     calendarCount: 1,
    //     showHeader: false,
    //     showFooter: false,
    //     autoCloseOnSelect: true
    //   });  
});
$('#roundTrip').on('click', function(){
    $('#twoWay').show();
    // $('#oneWay input').removeClass('caleran-ex-6-2');
    // $('#oneWay input').addClass('caleran-ex-6-5-start');
});

$('.dropdown-menu li').on('click', function() {
  var getValue = $(this).text();
  $('.dropdown-select').text(getValue);
});
