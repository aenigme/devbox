var Navflow = {};
var FiveSecondTest = {};
var stack_bottomright = { "dir1": "up", "dir2": "left", "firstpos1": 15, "firstpos2": 15 };

function ShowPreview(viewCode) {
    var preview = window.open("/test/" + viewCode + "?preview=true", "preview");
    preview.focus();
}
   
function ManageTestFunction(functionName, adminCode, hash) {
    action = functionName;
    if (action == "public") {
        action = "private";
    }
    if (action == "delete") {
        if (!confirm("Are you sure you want to delete this test? This operation cannot be undone")) {
            return false;
        }
    }
    $.ajax({
        type: 'POST',
        url: "/manage/" + action + "/" + adminCode,
        dataType: 'json',
        data: { "__RequestVerificationToken": $('input[name=__RequestVerificationToken]').val() },
        success: function(data, textStatus, XMLHttpRequest) {
            //TODO:growl notification
            var message = "";

            switch (functionName) {
                case "private":
                    isPublic = false;
                    ShowGrowl("The test is now private");
                    break;
                case "public":
                    isPublic = true;
                    ShowGrowl("The test is now public");
                    break;
                case "enable":
                    isActive = true;
                    ShowGrowl("The test is now active");
                    break;
                case "disable":
                    isActive = false;
                    ShowGrowl("The test is now disabled",true);
                    break;
                case "delete":
                    window.location = "/manage";
                    return false;
                    break;
            }
            showManageElements();

        }
    });
}

function primeCheckboxes() {
    var checkboxes = $('.responseInput').find('input:checkbox');

    checkboxes.each(function() {
        var label = $(this).parent('.responseInput').find('strong');
        var input = $(this);
        verifyCheckboxes(input, label);
        $(this).change(function() {
            verifyCheckboxes(input, label);
        });
    });
}

function verifyCheckboxes(input, label) {
    if (input.value() == 'true') {
        label.text('yes');
    }
    else {
        label.text('no');
    }
}

function ShowGrowl(message, error) {
 
    if (error) {
        $.pnotify({
            pnotify_text: message,
            pnotify_history: false,
            pnotify_type: "error",
            pnotify_addclass: "stack-bottomright", //growl is using jquery-ui styles.
            pnotify_stack: stack_bottomright
        });
    }
    else
    {
        $.pnotify({
            pnotify_text: message,
            pnotify_history: false,
            pnotify_addclass: "stack-bottomright", //growl is using jquery-ui styles.
            pnotify_stack: stack_bottomright
        });
    }
    
}

function showManageElements() {
    $(".alertMsg").hide();
    if (isActive && isPublic && !hasResults) {
        $("#activeAlert").show();
    }
    if (isActive && !isPublic && !hasResults) {
        $("#privateAlert").show();
    }
    if (!isActive) {
        $("#inactiveAlert").show();
    }
    if (isActive) {
        $("#enabledisableOption").attr("value","disable").html("disable test");
    }
    else {
        $("#enabledisableOption").attr("value", "enable").html("enable test");
    }
    if (isPublic) {
        $("#publicprivateOption").attr("value", "private").html("make test private");      
    }
    else {
        $("#publicprivateOption").attr("value", "public").html("make test public");
    }
}
function FiveSecondTestTest() {
   
    //initialise layout
    var testHead = $('#test_head');
    var pageHead = $('#header');
    var instruction = $('#task');
    var testContent = $('#content');

    instruction.css('margin-top', -(instruction.height()));
    testContent.css('padding-top', testHead.height() + 30);

    $("#skip").hide();
    $(window).resize(function() {
        testContent.css('padding-top', testHead.height() + 30);
    });

    $(".imgHolder").hide();
    $("#intro").show();

    if (getParameterByName("preview") == "true") {
        $.pnotify({
            pnotify_title: "This is a preview only",
            pnotify_text: "The test is not yet active",
            pnotify_history: false,
            pnotify_type: "error",
            pnotify_hide: false,
            pnotify_addclass: "stack-bottomright", //growl is using jquery-ui styles.
            pnotify_stack: stack_bottomright
        });
    }
    //set up link to instructions
    $(".pleaseExplain").click(function() {
        $(".imgHolder").hide();
        $("#testInstructions").show();
        return false;
    });

    //set up actions when image loads
    //start test button is disabled until this point
    //use one to ensure we only do it once.
    $.prettyLoader.show();
    $("img.hidden:first").one('load', function() {
        $.prettyLoader.hide();
        $(this).css('display', 'none');
        $(this).css('position', 'static');
        $(this).css('visibility', 'visible');
        if ($(this).width() != 0) {
            $(this).parent().width($(this).width());
            $(this).parent().height($(this).height());
        }

        $(this).parent().css("background", "#eeeeee");

        //set up the start test event now that the test is ready
        $(".startTest").attr("disabled", false).html("<b>start test</b>").click(function() {

            //show test header
            pageHead.animate({ marginTop: -(pageHead.height()) }, 1000);
            instruction.animate({ marginTop: '5px' }, 1000);
            testContent.animate({ paddingTop: (testHead.height() - pageHead.height() + instruction.height() + 40) }, 1000);
            $(".imgHolder").hide();
            $("#testStart").fadeIn();
            return false;
        });

    }).each(function() {
        //if the image is cached, we need to run the load event.
        if (this.complete) {
            $(this).load();
        }
    });

    //run the test
    $("#begin").click(function () {
        $("#skip").fadeIn();
        $.ajax({
            type: 'POST',
            url: "/data/logstart/",
            data: { "id": viewCode }
        });

        $(this).hide();
        instruction.find(".section").hide();
        testContent.animate({ paddingTop: (testHead.height() + 10) }, 1, function () { $("#step1").show(); });
        //start a timer

        $(".imgHolder>img").fadeIn("fast", function () {
            var img = $(this);
            window.setTimeout(function () {
                img.parent().fadeOut("fast", function () { $("#question1").fadeIn("fast"); });
                $(".nextQuestion, .pass").click(function (e) {
                    //show new image or the outro if there is none left
                    var nextElement = $(this).parents(".textHolder").next();
                    $(this).parents(".textHolder").fadeOut("fast", function () { nextElement.fadeIn("fast") });
                    if ($(this).hasClass("pass")) { $(this).parents(".textHolder").find("input").val(""); }
                    if (nextElement.attr("id") == "outro") {
                        pageHead.animate({ marginTop: 0 }, 1000);
                        instruction.animate({ marginTop: -(instruction.height()) }, 1000);
                        $.ajax({
                            type: 'POST',
                            url: "/data/logfinish/",
                            data: { "id": viewCode,
                                "answer1": $("#answer1").val(),
                                "answer2": $("#answer2").val(),
                                "answer3": $("#answer3").val(),
                                "answer4": $("#answer4").val(),
                                "answer5": $("#answer5").val()
                            }
                        });
                    }
                    e.preventDefault && e.preventDefault();
                });
                pageHead.animate({ marginTop: 0 }, 1000);
                instruction.animate({ marginTop: testHead.height() * -1 }, 1000);
                testContent.animate({ paddingTop: 75 }, 1)
            }, 6000);

        });
        //set up all images to capture clicks       
        return false;
    });
}

function NavflowTest() {
    var startTime;
    //initialise layout
    var testHead = $('#test_head');
    var pageHead = $('#header');
    var instruction = $('#task');
    var testContent = $('#content');

    instruction.css('margin-top', -(instruction.height()));
    testContent.css('padding-top', testHead.height() + 30);

    $("#skip").hide();
    $(window).resize(function() {
        testContent.css('padding-top', testHead.height() + 30);
    });

    $(".imgHolder").hide();
    $("#intro").show();
    
    if (getParameterByName("preview") == "true") {
        $.pnotify({
            pnotify_title:"This is a preview only",
            pnotify_text: "The test is not yet active",
            pnotify_history: false,
            pnotify_type: "error",
            pnotify_hide: false,
            pnotify_addclass: "stack-bottomright", //growl is using jquery-ui styles.
            pnotify_stack: stack_bottomright
        });
    }
    //set up link to instructions
    $(".pleaseExplain").click(function(e) {
        $(".imgHolder").hide();
        $("#testInstructions").show();
        e.preventDefault && e.preventDefault();
    });

    //set up actions when image loads
    //start test button is disabled until this point
    //use one to ensure we only do it once.
    $.prettyLoader.show();
    $("img.hidden:first").one('load', function() {
        $.prettyLoader.hide();
        $(this).css('display', 'none');
        $(this).css('position', 'static');
        $(this).css('visibility', 'visible');
        if ($(this).width() != 0) {
            $(this).parent().width($(this).width());
            $(this).parent().height($(this).height());
        }
       
        $(this).parent().css("background", "#eeeeee");

        //set up the start test event now that the test is ready
        $(".startTest").attr("disabled", false).html("<b>start test</b>").click(function() {
             
            //show test header
            pageHead.animate({ marginTop: -(pageHead.height()) }, 1000);
            instruction.animate({ marginTop: '5px' }, 1000);
            testContent.animate({ paddingTop: (testHead.height() - pageHead.height() + instruction.height() + 40) }, 1000);
            $(".imgHolder").hide();
            $("#testStart").fadeIn();

            return false;
        });

    }).each(function() {
        //if the image is cached, we need to run the load event.
        if (this.complete) {
            $(this).load();
        }
    });

    //run the test
    $("#begin").click(function () {
        $("#skip").fadeIn();
        $.ajax({
            type: 'POST',
            url: "/data/logstart/",
            data: { "id": viewCode }
        });

        $(this).hide();
        testContent.animate({ paddingTop: (testHead.height() + 30) }, 1, function () { $("#step1").show(); });
        //start a timer
        startTime = new Date();
        //set up all images to capture clicks
        $(".imgHolder>img").one('click', function (e) {

            var timeTaken = new Date() - startTime;
            var imageId = $(this).attr("data-imageid")
            //get location
            var xPos;
            var yPos;
            if (e.pageX || e.pageY) {
                xPos = e.pageX - $(this).offset().left,
                 yPos = e.pageY - $(this).offset().top;
            }
            else if (e.clientX || e.clientY) {
                xPos = e.clientX + document.body.scrollLeft - $("#this").offset().left,
                    yPos = e.clientY + document.body.scrollTop - $("#this").offset().top


            }

            if ($(this).attr("data-hitzone") != "") {
                var data = JSON.parse($(this).attr("data-hitzone"));

                //loop through hit zones for match
                for (var i in data.zones) {
                    var zone = data.zones[i];
                    if (xPos > zone.points[0].x && xPos < zone.points[1].x
                    && yPos > zone.points[0].y && yPos < zone.points[1].y) {

                        //zone was hit
                        if (getParameterByName("preview") == "true") {
                            ShowGrowl("Click Success\n(this alert is not shown to users)", false);
                        }
                        else {
                            //record hit and time taken
                            $.ajax({
                                type: 'POST',
                                url: "/data/imageclick/" + imageId,
                                dataType: 'json',
                                data: { "time": timeTaken, "x": xPos, "y": yPos, "hit": true }
                            });
                        }
                        //show new image or the outro if there is none left
                        var nextElement = $(this).parent().next();
                        nextElement.find('.hidden').css('display', 'block');
                        nextElement.find('.hidden').css('position', 'static');
                        nextElement.find('.hidden').css('visibility', 'visible');
                        $(this).parent().fadeOut("slow", function () { nextElement.fadeIn() });

                        if (nextElement.attr("id") == "outro") {
                            pageHead.animate({ marginTop: 0 }, 1000);
                            instruction.animate({ marginTop: -(instruction.height()) }, 1000);
                            $.ajax({
                                type: 'POST',
                                url: "/data/logfinish/",
                                data: { "id": viewCode }
                            });
                        }
                        //restart timer
                        startTime = new Date();
                        return false;
                    }
                }
            }
            //record hit and time taken
            if (getParameterByName("preview") == "true") {
                ShowGrowl("Click Missed\n(this alert is not shown to users)", true);
            }
            else {
                $.ajax({
                    type: 'POST',
                    url: "/data/imageclick/" + imageId,
                    dataType: 'json',
                    data: { "time": timeTaken, "x": xPos, "y": yPos, "hit": false }
                });
            }
            //if no match, go to thanks page.
            $(this).parent().fadeOut("slow", function () { $("#outro").fadeIn(); });
            pageHead.animate({ marginTop: 0 }, 1000);
            instruction.animate({ marginTop: -(instruction.height()) }, 1000);
            $.ajax({
                type: 'POST',
                url: "/data/logfinish/",
                data: { "id": viewCode }
            });
        }).fadeIn("slow");
        return false;
    });
}
var uploader;
FiveSecondTest.CreateTestUploader = function() {
    var step = 0;
     uploader = new plupload.Uploader({
        runtimes: 'gears,flash,silverlight,browserplus,html5',
        browse_button: 'pick_files',
        multi_selection: false,
        max_file_size: '1mb',
        unique_names: true,
        url: '/manage/upload',
        flash_swf_url: '/plupload/js/plupload.flash.swf',
        silverlight_xap_url: '/plupload/js/plupload.silverlight.xap',
        filters: [
          { title: "Image files", extensions: "jpg,gif,png,JPG,GIF,PNG" }
      ]
    });
    uploader.bind('UploadFile', function(up, file) {
        up.settings.url = '/manage/upload?originalName=' + file.name
    });

    uploader.bind('Error', function(uploader, error) {
    if (error.code == plupload.FILE_SIZE_ERROR) {
        alert("Your file is larger than the maximum size limit of 1mb.");
    }
    });

    uploader.bind('QueueChanged', function(up) {
        if (uploader.state != 2 & up.files.length > 0) {
            $('#uploadIcon').html('<img src="/Images/throbber.gif" />');
            uploader.start();
        }
    });

    uploader.bind('FileUploaded', function(up, file, response) {
        var data = JSON.parse(response.response);
        $('.imgHolder').html('<a href="#" class="delLink"></a><img src="/mocks/' + data["image"] + '_thumb' + data["ext"] + '" style="width: 65px; height: 65px;" data-index="1" data-admincode="undefined" >').parent().show().css("background", "none").next().hide();
        $('#imageCode').val(data["image"] + data["ext"]);
        $(".delLink").click(function(e) {
            $(this).parent().parent().next().show();
            $(this).parent().parent().hide();
            uploader.refresh();
            e.preventDefault && e.preventDefault();
        });
    });

    uploader.bind('UploadProgress', function(up, file) {
        $('#' + file.id).find('.title').html(file.percent + '%');

    });

    uploader.init();

};
var uploader;
Navflow.CreateTestUploader = function () {
    var step = 0;
    uploader = new plupload.Uploader({
        runtimes: 'gears,flash,silverlight,browserplus,html5',
        browse_button: 'pick_files',
        max_file_size: '1mb',
        chunk_size: '100kb',
        unique_names: true,
        url: '/manage/upload',
        flash_swf_url: '/plupload/js/plupload.flash.swf',
        silverlight_xap_url: '/plupload/js/plupload.silverlight.xap',
        filters: [
          { title: "Image files", extensions: "jpg,gif,png,JPG,GIF,PNG" }
      ]
    });

    uploader.bind('UploadFile', function (up, file) {
        up.settings.url = '/manage/upload?originalName=' + file.name
    });

    uploader.bind('Error', function (uploader, error) {
        if (error.code == plupload.FILE_SIZE_ERROR) {
            var id = error.file.id;
            $("#" + id).remove();
            alert("One of your images was larger than the allowed 1Mb and has not been added.");
        }
    });
    uploader.bind('FilesAdded', function (up, files) {

        for (var i = 0; i < files.length; i++) {

            $('#thumbnails').before('<li class="temp" id="' + files[i].id + '"><div class="stepPreview"><div class="imgHolder"></div><strong class="title">Waiting..</strong></div></li>');

        }
    });
    uploader.bind('UploadProgress', function (up, file) {

        $('#' + file.id).find('.title').html(file.percent + '%');

    });
    uploader.bind('QueueChanged', function (up) {
        window.setTimeout(StartUpload, 100); //delay for image size error
    });
    uploader.bind('FileUploaded', function (up, file, response) {

        var data = JSON.parse(response.response);
        step++;
        AddImage(data["image"], data["ext"], file.id, step);
        if (data["width"] > 1000) {
            $("#tooBig").fadeIn();
        }
        if (data["width"] < 200) {
            $("#tooSmall").fadeIn();
        }
        $('#' + file.id).remove();
          BindSort()
    });

    uploader.init();

};

function StartUpload() {

    if (uploader.state != 2 & uploader.files.length > 0) {
            $('#uploadIcon').html('<img src="/Images/throbber.gif" />');
            uploader.start();
        }
}

function BindSort() {
    $("#step_list").sortable({ items: 'li:not(#thumbnails)' });
    $("#step_list").disableSelection();
    SortList();
    $("#step_list").bind('sortstop', function(event, ui) {
        SortList();
    });
    $(".delLink").click(function(e) {
        $(this).parentsUntil("ul").remove();
        e.preventDefault && e.preventDefault();
        uploader.refresh();
        SortList();
    });

}

function SortList() {
    var count = 0;
    $("#step_list").find(".title").each(function() {
        count++;
        if ($(this).html() != "Waiting..") {
            $(this).html("Step " + count);
        }
    });
}

function AddImage(image, ext, id, step, adminCode) {
    $('#' + id).before('<li><input type="hidden" id="imageCode' + step + '" name="imageCode" value="' + image + ext + '"/><div class="stepPreview"><div class="imgHolder"><a href="#" class="delLink"></a><img src="/mocks/' + image + '_thumb' + ext + '" style="width:65px;height:65px" data-index="' + step + '" data-admincode="' + adminCode + '" class="incomplete"/><div class="notifier"></div></div><strong class="title">Step ' + step + '</strong></div></li>');
    
}

function LoadCachedImages(sortable, editable) {  

    if (cachedImages.length > 0) {
        var images = cachedImages.split(',');
        var codes = adminCodes.split(',');
        for (var i = 0; i < images.length; i++) {
            AddImage(images[i].split(".")[0], "." + images[i].split(".")[1], "thumbnails", i + 1, codes[i]);
        }
        if (!editable) {
            $(".delLink").remove();
        }
        if (sortable) {
            BindSort();
         }
     }
 }

 Navflow.LoadData = function() {
     var codes = adminCodes.split(',');
     var images = cachedImages.split(',');

     $(".imgHolder>img").click(function(e) {
     
         var index = $(this).attr("data-index") - 1
         $.ajax({
             type: 'POST',
             url: "/data/getpoints/" + codes[index],
             dataType: 'json',
             success: function(data, textStatus, XMLHttpRequest) {
                 if (data != "") {
                     Navflow.ShowResultsImage(codes[index], images[index], data);
                 }
             }
         });
         e.preventDefault && e.preventDefault();
     });

 }

 Navflow.ShowResultsImage = function(adminCode, imageName, data) {
     var img = new Image();
     var mockLoaded = false;
     var heatMapLoaded = false;
     var heatMap = new Image();
     var mask = null;
     var circles = new Array();
     var zones = new Array();
     img.src = "/mocks/" + imageName
     heatMap.src = '/data/getheatmap/' + adminCode;
     $.prettyLoader.show();
     
     $(heatMap).load(function() {
        heatMapLoaded = true;
        if (mockLoaded) {
             $.prettyLoader.hide();
         }
     });
     
     $(img).load(function() {
         mockLoaded = true;
         if (heatMapLoaded) {
             $.prettyLoader.hide();
         }
         var box = $.fancybox('<div style="min-width:500px;width:' + img.width + 'px;"><div class="section"><h2>Click Analysis</h2><div><a href="#" id="showclickmap">show click map</a><a href="#" id="hideclickmap" style="display:none">hide click map</a> | <a href="#" id="showheatmap">show heatmap</a><a href="#" id="hideheatmap" style="display:none">hide heatmap</a></div></div><div id="canvas"><img src="' + img.src + '"/></div></div>',
    {
        'transitionIn': 'none',
        'transitionOut': 'none',
        'onComplete': function() {
            if (img.height > $('#fancybox-inner').height()) {
                //   debugger;
                var left = parseInt($('#fancybox-wrap').css("left"), 10) - 20;
                $('#fancybox-inner').width($('#fancybox-wrap').width() + 20);
                $('#fancybox-wrap').width($('#fancybox-wrap').width() + 40).css("left", left + "px");
            }
        }
    });

         $("#canvas").width(img.width);
         $("#canvas>img").remove(); //remove the image we used to load the box.
         paper = new Raphael(document.getElementById("canvas"), img.width, img.height);
         mock = paper.image($(this).attr("src").replace(/_thumb/, ""), 0, 0, img.width, img.height);
         zones = Navflow.ShowZones(paper, img);

         $("#showclickmap").click(function(e) {
             circles = Navflow.ShowConfetti(paper, imageName, data, img);
             if (mask != null) mask.remove();
             $(this).hide();
             $("#showheatmap").show();
             $("#hideheatmap").hide();
             $("#hideclickmap").show();
             e.preventDefault && e.preventDefault();
         });
         $("#showheatmap").click(function(e) {
             mask = Navflow.ShowHeatmap(paper, adminCode, img);
             for (var i in circles) {
                 circles[i].remove();
             }
             $(this).hide();
             $("#hideclickmap").hide();
             $("#showclickmap").show();
             $("#hideheatmap").show();
             e.preventDefault && e.preventDefault();
         });
         $("#hideclickmap").click(function(e) {
             for (var i in circles) {
                 circles[i].remove();
             }
             $(this).hide();
             $("#showclickmap").show();
             e.preventDefault && e.preventDefault();
         });
         $("#hideheatmap").click(function(e) {
             mask.remove();
             $(this).hide();
             $("#showheatmap").show();
             e.preventDefault && e.preventDefault();
         });


         $("#showheatmap").click();

     });
 }
 Navflow.ShowZones = function(paper, img) {
//     var rects = new Array();
//     var standardFill = "#40cd9d", standardStroke = "#3ae9ad";
//     $.ajax({
//         type: 'POST',
//         url: "/test/getZone",
//         data: "image=" + img.src,
//         dataType: 'json',
//         success: function(data, textStatus, XMLHttpRequest) {
//             if (data != "") {
//                 var inData = JSON.parse(data);
//                 for (var i in inData.zones) {
//                     var zone = inData.zones[i];
//                     var rect = paper.rect(zone.points[0].x - 1, zone.points[0].y - 1, zone.points[1].x - zone.points[0].x, zone.points[1].y - zone.points[0].y, 0).attr({ fill: standardFill, "fill-opacity": 0.4, stroke: standardStroke, "stroke-width": 2 });
//                     rects.push(rect);
//                 }
//             }
//         }
//     });
 }
 Navflow.ShowHeatmap = function(paper, adminCode, img) {

 return paper.image('/data/getheatmap/' + adminCode , 0, 0, img.width, img.height);
 }

 Navflow.ShowConfetti = function(paper, imageName, data,img) {

     var circles = new Array();
     var mask = paper.rect(0, 0, img.width, img.height).attr({ fill: "#000", "fill-opacity": 180 / 255, "stroke-width": 0 });
    circles.push(mask);
     var maxTime = 0, minTime = 100000;
     var counter = 0;

     for (var i in data) {

         if (data[i].time > maxTime) maxTime = data[i].time;
         if (data[i].time < minTime) minTime = data[i].time;
         //             for (var j in data) {
         //                 if (Math.sqrt(square(data[i].x - data[j].x) + square(data[i].y - data[j].y)) < 20 && i != j) {
         //                     data[i].neighbours++;
         //                 }
         //             }
     }
     //         for (var i in data) {
     //             if (data[i].neighbours > counter) counter = data[i].neighbours;
     //         }

     for (var i in data) {
         var val = Math.abs(((data[i].time - minTime) / (maxTime - minTime)) - 1) * 100;
         var colour = GetHSB(val);
         var c = paper.circle(data[i].x, data[i].y, 5).attr({ fill: "#96BC49", "fill-opacity": 0.4, stroke: "#96BC49", "stroke-width": 2, "stroke-opacity": 0.6 });
         circles.push(c);
     }
     return circles;
 }

 function GetHSB(percent) {
     return "hsb(" + Math.round(Math.abs(percent - 100)*2/3) + "%, 100%, " + Math.round((percent*3/4) + 25) + "%)";
 }
 Navflow.VerifyHitZones = function() {
     $(".imgHolder>img").each(function() {
         var thumbnailImage = $(this);
         thumbnailImage.parent().removeClass().addClass("hz_load imgHolder");

         var src = $(this).attr("src").replace(/_thumb/, "");
         $.ajax({
             type: 'POST',
             url: "/data/getZone",
             data: "image=" + src,
             dataType: 'json',
             success: function(data, textStatus, XMLHttpRequest) {
                 if (data != "") {
                     var inData = JSON.parse(data);
                     if (inData.zones.length > 0) {
                         thumbnailImage.parent().removeClass().addClass("hz_confirm imgHolder");
                     }
                     else {
                         thumbnailImage.parent().removeClass().addClass("hz_prompt imgHolder");

                     }
                 }
                 else {
                     thumbnailImage.parent().removeClass().addClass("hz_prompt imgHolder");                         
                     
                 }
             }
         });
     });
 }

 Navflow.ValidateTestPage = function() {
     if ($(".hz_load").length > 0 || $(".hz_prompt").length > 0 || $(".hz_fail").length > 0) {
         $("#hitZoneError").show();
         return false;
     }
     else {
         $("#hitZoneError").hide();
         return true;
     }
     return false;
 }

 Navflow.CreateRaphaelClicks = function() {
     $(".imgHolder>img").click(function() {
         var thumbnailImage = $(this);
         var paper, mock;
         var selectedFill = "#9d40cd", selectedStroke = "#ad3ae9", standardFill = "#40cd9d", standardStroke = "#3ae9ad", overFill = "#409dcd", overStroke = "#3aade9"
         var dragging = null, resizing = null, startPoint = null;
         var dir = 0;
         var selected;
         var startClick = false;
         var leftPressed = 0, upPressed = 0, downPressed = 0, rightPressed = 0;
         var img = new Image();
         $.prettyLoader.show();
         var rects = new Array();

         img.src = $(this).attr("src").replace(/_thumb/, "");
         var adminCode = $(this).attr("data-admincode");
         $(img).load(function() {

             $.prettyLoader.hide();
             var box = $.fancybox('<div class="section"><button class="button cta canvasClose" style="float:right;"><b>done</b></button><h2>Hit zone editor</h2><p>Drag boxes around areas you want to register as successful clicks. You can resize, move and delete your selections using either the keyboard or mouse.</p></div><div id="canvas"><img src="' + img.src + '"/></div>',
             {
                 'transitionIn': 'none',
                 'transitionOut': 'none',
                 'onClosed': function(e) {
                     Navflow.ValidateTestPage();
                     $(document).unbind("mousedown.zones").unbind("mouseup.zones").unbind("mousemove.zones").unbind("keypress.zones").unbind("keyup.zones");
                 }
             });
             $("#canvas>img").remove(); //remove the image we used to load the box.
             $(".canvasClose").click(function() {
               
                 var zoneData = { zones: new Array(), image: adminCode };
                 var zones = 0;
                 for (var i in rects) {
                     if (!rects[i].removed) {
                         zones++;
                         var rectangle = { points: new Array() };

                         var point1 = { x: Math.round(rects[i].attrs.x), y: Math.round(rects[i].attrs.y) };
                         rectangle.points.push(point1);

                         var point2 = { x: Math.round(rects[i].attrs.x + rects[i].attrs.width), y: Math.round(rects[i].attrs.y + rects[i].attrs.height) };
                         rectangle.points.push(point2);

                         zoneData.zones.push(rectangle);
                     }
                 }

                 var outdata = JSON.stringify(zoneData);
                 $.ajax({
                     type: 'POST',
                     url: "/data/addZone",
                     data: "jsonData=" + outdata,
                     dataType: 'json'
                 });
                 if (zones > 0) {
                     thumbnailImage.parent().removeClass().addClass("hz_confirm imgHolder");
                 }
                 else {
                     thumbnailImage.parent().removeClass().addClass("hz_prompt imgHolder");
                 }
                 $.fancybox.close();
             });
             paper = new Raphael(document.getElementById("canvas"), img.width, img.height);
             mock = paper.image($(this).attr("src").replace(/_thumb/, ""), 0, 0, img.width, img.height);

             $.ajax({
                 type: 'POST',
                 url: "/data/getZone",
                 data: "image=" + img.src,
                 dataType: 'json',
                 success: function(data, textStatus, XMLHttpRequest) {
                     if (data != "") {
                         var inData = JSON.parse(data);
                         for (var i in inData.zones) {
                             var zone = inData.zones[i];
                             var rect = paper.rect(zone.points[0].x - 1, zone.points[0].y - 1, zone.points[1].x - zone.points[0].x, zone.points[1].y - zone.points[0].y, 0).attr({ fill: standardFill, "fill-opacity": 0.4, stroke: standardStroke, "stroke-width": 2 });
                             rects.push(rect);

                             ApplyEvents(rect);
                         }
                     }
                 }
             });

             mock.mousedown(function(e) {
                 startPoint = Navflow.GetCurrentCoords(e);
                 var rect = paper.rect(startPoint.x, startPoint.y, 1, 1, 0).attr({ fill: standardFill, "fill-opacity": 0.4, stroke: standardStroke, "stroke-width": 2 });
                 rects.push(rect);
                 dir = 0;

                 ApplyEvents(rect);

                 dragging = rect;
                 e.preventDefault && e.preventDefault();

             });

             function ApplyEvents(rect) {
                 rect.mousemove(function(e) {
                     startClick = false;
                     if (dragging == null) {
                         if (selected != this) {
                             this.attr({ fill: overFill, stroke: overStroke });
                         }
                         var hover = Navflow.GetCurrentCoords(e);
                         dir = 0;
                         var cursor = "move";
                         if (hover.x > this.attrs.x + this.attrs.width - 10) {
                             dir += 1; //e
                         }
                         if (hover.x < this.attrs.x + 10) {
                             dir += 2; //w
                         }
                         if (hover.y > this.attrs.y + this.attrs.height - 10) {
                             dir += 4; //s
                         }
                         if (hover.y < this.attrs.y + 10) {
                             dir += 8; //n
                         }
                         switch (dir) {
                             case 1: cursor = "e-resize"; break;
                             case 2: cursor = "w-resize"; break;
                             case 4: cursor = "s-resize"; break;
                             case 5: cursor = "se-resize"; break;
                             case 6: cursor = "sw-resize"; break;
                             case 8: cursor = "n-resize"; break;
                             case 9: cursor = "ne-resize"; break;
                             case 10: cursor = "nw-resize"; break;
                             default: dir = 99;
                         }
                         $('body').css('cursor', cursor);
                     }
                 });

                 rect.mouseout(function(e) {
                     startClick = false;
                     if (dragging == null) {
                         if (selected != this) {
                             this.attr({ fill: standardFill, stroke: standardStroke });
                         }
                         $('body').css('cursor', 'default');
                     }


                 });

                 rect.mousedown(function(e) {
                     startClick = true;
                     //record mouse offset
                     startPoint = Navflow.GetCurrentCoords(e);
                     startPoint.x -= this.attrs.x;
                     startPoint.y -= this.attrs.y;
                     dragging = this;
                     e.preventDefault && e.preventDefault();
                 });
             }

             $(document).bind("mousedown.zones", function(e) {
                 startClick = true;
             });

             $(document).bind("mouseup.zones", function(e) {
                 if (selected != null && startClick) {
                     selected.attr({ fill: standardFill, stroke: standardStroke });
                     selected = null;
                 }
                 $('body').css('cursor', 'default');
                 if (dragging != null) {
                     if (startClick) {
                         startClick = false;
                         selected = dragging;
                         selected.attr({ fill: selectedFill, stroke: selectedStroke });

                     }
                     if (dragging.attrs.width < 10 || dragging.attrs.height < 10) {
                         dragging.remove();
                     }
                     dragging = null;
                 }
                 dir = 0;
             });


             $(document).bind("mousemove.zones", function(e) {
                 var mousePoint = Navflow.GetCurrentCoords(e);
                 if (dragging != null) {
                     if (selected != null) {
                         selected.attr({ fill: standardFill, stroke: standardStroke });
                     }
                     selected = dragging;
                     selected.attr({ fill: selectedFill, stroke: selectedStroke });
                     var x1 = dragging.attrs.x;
                     var y1 = dragging.attrs.y;
                     var x2 = dragging.attrs.x + dragging.attrs.width;
                     var y2 = dragging.attrs.y + dragging.attrs.height;
                     switch (dir) {
                         case 1: Navflow.ResizeHitZone(dragging, x1, y1, mousePoint.x, y2); break; //e
                         case 2: Navflow.ResizeHitZone(dragging, mousePoint.x, y1, x2, y2); break; //w
                         case 4: Navflow.ResizeHitZone(dragging, x1, y1, x2, mousePoint.y); break; //s
                         case 5: Navflow.ResizeHitZone(dragging, x1, y1, mousePoint.x, mousePoint.y); break; //se
                         case 6: Navflow.ResizeHitZone(dragging, mousePoint.x, y1, x2, mousePoint.y); break; //sw
                         case 8: Navflow.ResizeHitZone(dragging, x1, mousePoint.y, x2, y2); break; //n
                         case 9: Navflow.ResizeHitZone(dragging, x1, mousePoint.y, mousePoint.x, y2); break; //ne
                         case 10: Navflow.ResizeHitZone(dragging, mousePoint.x, mousePoint.y, x2, y2); break; //nw
                         case 99: Navflow.ResizeHitZone(dragging, mousePoint.x - startPoint.x, mousePoint.y - startPoint.y, dragging.attrs.width + mousePoint.x - startPoint.x, dragging.attrs.height + mousePoint.y - startPoint.y); break; //move
                         default: Navflow.ResizeHitZone(dragging, startPoint.x, startPoint.y, mousePoint.x, mousePoint.y); break;
                     }
                 }
             });

             $(document).bind("keypress.zones", function(e) {
                 if (selected != null && selected != undefined) {
                     switch (e.keyCode) {
                         case 37: //left
                             leftPressed = 1;
                             break;
                         case 38: //up
                             upPressed = 1;
                             break;
                         case 39: //right
                             rightPressed = 1;
                             break;
                         case 40: //down
                             downPressed = 1;
                             break;
                     }
                     var deltaX = leftPressed - rightPressed;
                     var deltaY = upPressed - downPressed;

                     if (e.shiftKey) {
                         deltaX = deltaX * 5;
                         deltaY = deltaY * 5;
                     }
                     if (e.ctrlKey) {
                         selected.attr({ height: selected.attrs.height - deltaY, width: selected.attrs.width - deltaX });
                     }
                     else {
                         selected.attr({ y: selected.attrs.y - deltaY, x: selected.attrs.x - deltaX });
                     }
                 }
                 e.preventDefault && e.preventDefault();
             });

             $(document).bind("keyup.zones", function(e) {
                 switch (e.keyCode) {
                     case 37: //left
                         leftPressed = 0;
                         break;
                     case 38: //up
                         upPressed = 0;
                         break;
                     case 39: //right
                         rightPressed = 0;
                         break;
                     case 40: //down
                         downPressed = 0;
                         break;
                     case 46:
                      case 8: //delete
                         if (selected != null) {
                             selected.remove();
                         }
                         break;
                 }
             });
         });
         if (img.complete) {
             $(img).load();
         }
     });
 }

 Navflow.GetCurrentCoords = function (e) {
     var coord;
     if (e.pageX || e.pageY) {
         coord = { x: e.pageX - $("#canvas").offset().left,
             y: e.pageY - $("#canvas").offset().top
         };         
     }
     else if (e.clientX || e.clientY) {
         coord = { x: e.clientX + document.body.scrollLeft - $("#canvas").offset().left,
             y: e.clientY + document.body.scrollTop  - $("#canvas").offset().top
         };

     }
     return coord;
 }

 Navflow.ResizeHitZone = function(box, x1, y1, x2, y2) {
  
     if (x2 < x1) { //we're dragging left
         //box.attr({ x: startX, y: startY, width: endX - startX, height: endY - startY });
         box.attr({ x: x2, width: x1 - x2 });
     }
     if (x2 >= x1) {
         box.attr({ x: x1, width: x2 - x1 });
     }
     if (y2 < y1) { //we're dragging left
         //box.attr({ x: startX, y: startY, width: endX - startX, height: endY - startY });
         box.attr({ y: y2, height: y1 - y2 });
     }
     if (y2 >= y1) {
         box.attr({ y: y1, height: y2 - y1 });
     }

 }

 function getParameterByName(name) {
     name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
     var regexS = "[\\?&]" + name + "=([^&#]*)";
     var regex = new RegExp(regexS);
     var results = regex.exec(window.location.href);
     if (results == null)
         return "";
     else
         return results[1];
 }