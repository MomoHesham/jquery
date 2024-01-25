

$(document).ready(function () {
    let menuBoxWidth = $("#home .menuBox").innerWidth();
    let messageInput = $("#messageInput");
    let charLimit = 100;
    // $("#home .menuBox").css(("left", `-${menuBoxWidth}`));
    $("#home .open").on("click", function () {

        $("#home .menuBox").animate({ width: "250px" }, 500);
        $("#home .close").fadeIn(500)
    });

    $("#home .close").on("click", function () {
        $("#home .menuBox").animate({ width: `0px` }, 500);
        $("#home .close").fadeOut(500)
    });

    $("#home .menuBox .menuItem").on("click", function (e) {
        let clickedItem = $(e.target).attr("href");
        let eleTop = $(clickedItem).offset().top;
        $("html,body").animate({ scrollTop: eleTop }, 1000)
        $(e.target).addClass("active").parent().siblings().children().removeClass("active")

        console.log(eleTop);
    })

    $("#duration .accordionHeader").on("click", function (e) {
        $(this).siblings().slideToggle(1000).addClass("active");
        $(this).parent().siblings().children("div.accordionContent").slideUp(1000).removeClass("active");
    })
    messageInput.on("keyup", function () {
        let mylength = $(this).val().length;
        let amountLeft = charLimit - mylength;
        $("#remainChar").text(
            amountLeft <= 0 ? "your available character finished" : amountLeft
        )
    })
    // messageInput.on("keydown", function (e) {
    //     if ((e.keyCode >= 48 && e.keyCode <= 57) ||
    //         (e.keyCode >= 65 && e.keyCode <= 90) ||
    //         e.keyCode == 187 || e.keyCode == 189 ||
    //         e.keyCode == 8 || e.keyCode == 13 ||
    //         e.keyCode == 192 || e.keyCode == 220 ||
    //         charLimit > 0) {
    //         if (e.keyCode == 8) {

    //             if (charLimit < 100) {
    //                 charLimit++;
    //                 if (charLimit > 0) {
    //                     $("#remainChar").html(charLimit)
    //                 }
    //             }

    //         } else {
    //             if (charLimit > 1) {
    //                 charLimit--;
    //                 $("#remainChar").html(charLimit)

    //             } else {
    //                 $("#remainChar").html('your available character finished ');
    //                 charLimit--
    //                 // if (charLimit < 0) {
    //                 //     e.target.value += ''
    //                 // }
    //             }
    //         }
    //     }
    // })
    $(window).on("load", function () {
        let eventDate = new Date("25 october 2023 ");
        setInterval(() => {
            let nowDate = new Date();
            let differTime = eventDate.getTime() / 1000 - nowDate.getTime() / 1000;
            let eventDays = Math.floor(differTime / (60 * 60 * 24));
            let eventHours = Math.floor((differTime - (eventDays * (24 * 60 * 60))) / 3600)
            let eventMinutes = Math.floor((differTime - (eventDays * (24 * 60 * 60)) - (eventHours * 3600)) / 60)
            let eventSeconds = Math.floor(differTime - (eventDays * (24 * 60 * 60)) - (eventHours * (60 * 60)) - (eventMinutes * (60)))

            $(".countDays").html(`${eventDays} D`)
            $(".countHours").html(`${eventHours} H`)
            $(".countMins").html(`${eventMinutes} M`)
            $(".countSeconds").html(`${eventSeconds} S`)
        }, 1000);
    })




});





