const phantom = require('phantom');

function phantomReport(param,callback) {


    phantom.create().then(function (ph) {
        ph.createPage().then(function (page) {


            page.property('onNavigationRequested', function (url, type, willNavigate, main) {
                console.log('= onNavigationRequested');
                console.log('  destination_url: ' + url);
                console.log('  type (cause): ' + type);
                console.log('  will navigate: ' + willNavigate);
                console.log('  from page\'s main frame: ' + main);
            });

            page.property('onResourceReceived', function (response) {
                console.log('= onResourceReceived()');
                //     console.log('  id: ' + response.id + ', stage: "' + response.stage + '", response: ' + JSON.stringify(response));
            });


            page.property('onResourceRequested', function (request) {
                console.log('= onResourceRequested()');
                console.log('  request: ' + JSON.stringify(request, undefined, 4));
            });

            page.open(param.BASE_URL + param.REPORT_URL).then(function (status) {
                console.log(status);
                try {
                    page.evaluate(function () {
                        setTimeout(function () {

                            document.getElementById("j_username").value = "admin";
                            document.getElementById("j_password").value = "district";
                            document.getElementById("submit").click();
                        }, 100)

                    })


                } catch (ex) {
                    var fullMessage = "\nJAVASCRIPT EXCEPTION";
                    fullMessage += "\nMESSAGE: " + ex.toString();
                    for (var p in ex) {
                        fullMessage += "\n" + p.toUpperCase() + ": " + ex[p];
                    }
                    console.log(fullMessage);
                }
            });


            try {
                /*var count = 0;
                var counterIncrement = 1000;
*/
                var counter = setInterval(timer, 5000);
                var yyyy = 2016, mm = 12;

                var startDate = (new Date(yyyy, mm - 1, 2));
                var endDate = (new Date(yyyy, mm, 1));
                var start1 = JSON.stringify(startDate), end1 = JSON.stringify(endDate),
                    start2 = JSON.parse(start1), end2 = JSON.parse(end1),
                    start3 = start2.split("T"), end3 = end2.split("T"),
                    newStartDate = start3[0], newendDate = end3[0];
                console.log("startDate new :", newStartDate);
                console.log("endDate new :", newendDate);
                function timer() {


                    page.evaluate(function (data) {


                        document.getElementById("start").value = "2017-01-01";
                        document.getElementById("end").value = "2017-01-31";
                        /*document.getElementById("off").value = data.count;
                        document.getElementById("off1").value = data.count + 1000;
                        */
                        document.getElementById("Import").click();


                    }/*, {count: count, startDate: newStartDate, endDate: newendDate}*/);
                    /*console.log("count :", count);
                    count = count + counterIncrement;
*/

                }


               /* page.property('onCallback', function (data) {

                    if (data.type === "exit") {

                        /!*count = 0;
                        counter = setInterval(timer, 10000);
                        *!/
                        try{
                            console.log("data.type new  :", data.type);
                            clearInterval(counter);



                        } catch (ex) {
                            var fullMessage = "\nJAVASCRIPT EXCEPTION";
                            fullMessage += "\nMESSAGE: " + ex.toString();
                            for (var p in ex) {
                                fullMessage += "\n" + p.toUpperCase() + ": " + ex[p];
                            }
                            console.log(fullMessage);
                        }

                    }
                });*/




            } catch (ex) {
                var fullMessage = "\nJAVASCRIPT EXCEPTION";
                fullMessage += "\nMESSAGE: " + ex.toString();
                for (var p in ex) {
                    fullMessage += "\n" + p.toUpperCase() + ": " + ex[p];
                }
                console.log(fullMessage);
            }


            /*var data= page.property('onCallback', function(data){
                if (data.type === "exit") {

                }
             });


                 console.log("data.type :",data);*/


        });


    });
}

//http://localhost:8090/dhis/dhis-web-reporting/generateHtmlReport.action?uid=FDeK5VDy6FG&
const BASE_URL = "http://192.168.0.35:8090/dhis";
const REPORT_URL = "/dhis-web-reporting/generateHtmlReport.action?uid=FDeK5VDy6FG&";
const DEST_PATH_BASE = "";


setTimeout(function () {
    new phantomReport({
        BASE_URL: BASE_URL,
        REPORT_URL: REPORT_URL
    }, function (response) {
        console.log("asdfadad")
    })
}, 100);
/*

function gotpage(page,param){

    page.property('onNavigationRequested', function(url, type, willNavigate, main) {
        console.log('= onNavigationRequested');
        console.log('  type (cause): ' + type);
        console.log('  will navigate: ' + willNavigate);
        console.log('  from page\'s main frame: ' + main);
        console.log('  destination_url: ' + url);

    });

   /!* page.property('onResourceReceived', function(response) {
       console.log('= onResourceReceived()' );
         //console.log('  id: ' + response.id + ', stage: "' + response.stage /!*+ '", response: ' + JSON.stringify(response)*!/);
    });*!/

/!*
  page.property('onResourceRequested', function (request,url) {
        console.log('= onResourceRequested()',url);
        //console.log('  request: ' + JSON.stringify(request, undefined, 4));
    });*!/

    var reportPathAndName = param.REPORT_URL;


    var status1="";
    page.property('onLoadFinished', function(status) {
        console.log('==== onLoadFinished()');
        function foo() {




        }





        var fii = foo(this);
        setTimeout(fii,10000)
    });


    console.log("callme :",status1);


    /!*if(callback=="success")
    {
       //getelement(page);

    }
*!/
    //  page.render('image.png');
    page.property('viewportSize', {width: 1280, height: 1024});



    //http://192.168.0.35:8090/dhis/dhis-web-commons/security/login.action
}

*/
