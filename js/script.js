$(document).ready(function () {
    $("#design-image").click(function () {
        $("#design-image").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function () {
        $("#design").slideUp('2000');
        $("#design-image").slideDown('2000');
    });
    $("#development-image").click(function () {
        $("#development-image").slideDown('2000').hide('1500');
        $("#development").show('2000');
    });
    $("#development").click(function () {
        $("#development").slideUp('2000');
        $("#development-image").slideDown('2000');
    });
    $("#product-image").click(function () {
        $("#product-image").slideDown('2000').hide('1500');
        $("#product").show('2000');
    });
    $("#product").click(function () {
        $("#product").slideUp('2000');
        $("#product-image").slideDown('2000');
    });
});
$(document).ready(function () {
    $("#project1").mouseover(function () {
        $("#p1").show();
    }).mouseout(function () {
        $("#p1").hide();
    });

    $("#project2").mouseover(function () {
        $("#hover2").show();
    }).mouseout(function () {
        $("#hover2").hide();
    });

    $("#project3").mouseover(function () {
        $("#hover3").show();
    }).mouseout(function () {
        $("#hover3").hide();
    });

    $("#project4").mouseover(function () {
        $("#hover4").show();
    }).mouseout(function () {
        $("#hover4").hide();
    });

    $("#project5").mouseover(function () {
        $("#hover5").show();
    }).mouseout(function () {
        $("#hover5").hide();
    });

    $("#project6").mouseover(function () {
        $("#hover6").show();
    }).mouseout(function () {
        $("#hover6").hide();
    });

    $("#project7").mouseover(function () {
        $("#hover7").show();
    }).mouseout(function () {
        $("#hover7").hide();
    });

    $("#project8").mouseover(function () {
        $("#hover8").show();
    }).mouseout(function () {
        $("#hover8").hide();
    });

});
