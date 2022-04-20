'use strict';

(function() {
    console.log("printdropdown");
    generateDropdown();
})();

// this function generate the dropdown
function generateDropdown() {
    console.log("printdropdown");
    var dropdown = ['Select Type of Portal Frame', 'Portal Frame1', 'Portal Frame2']
    var select = document.getElementById("dropdown");
    for (var i = 0; i < dropdown.length; i++) {
        var optn = dropdown[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
    document.getElementById("procedure-message").innerHTML = "Select type of Portal Frame from the dropdown menu";
}

function onSelection() {
    var selectedDropdown = document.getElementById("dropdown");
    console.log(selectedDropdown);
    var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
    if (selectedDropdownval === "Portal Frame1") {
        document.getElementById("procedure-message").innerHTML = "<li>Select the load type </li>" + "<li> click on Start button</li>";
           // document.getElementById("main-beam1").style.display="block";   


    } else if (selectedDropdownval === "Portal Frame2") {
        console.log("testboya");
        document.getElementById("firststeel").style.display = "none";
        document.getElementById("secondsteel").style.display = "block";
        document.getElementById("procedure-message").innerHTML = "<li>Select the load type" + "click on Start button</li>" ;
        // previousClickedMainBeam.push("main-beam1");
        document.getElementById("main-beam1").style.display = "none";
        document.getElementById("main-beam2").style.display = "block";
    } 
}


//this function shows the animations in the observations section 
function showObservations(ele1, ele2) {
    var path1 = document.getElementsByClassName(ele1)[0].getElementsByTagName("path")[0];
    var path1Val = path1.getAttribute("d")
    var path2 = document.getElementsByClassName(ele2)[0].getElementsByTagName("path")[0];
    var path2Val = path2.getAttribute("d")
    animateObserve(ele1, path1Val);
    console.log(path1Val);
    // animateObserve(ele2, path2Val);
    console.log(path2Val);
}

var previousClickedEle = [];
var previousClickedBeam = [];
var previousClickedMainBeam = []; 
var mainBeamDisplay = [];
var previousClickedLoadtype = [];

// function play() {
//     moveArrowDown("arrow", 110);
//     const myTimeout = setTimeout(playSimulation, 2000);
//     // setTimeout(playSimulation, 3000);
//     // playSimulation();
// }

function playSimulation() {
    console.log("printplay");
    var radios = document.getElementsByTagName('input');
    var value;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;
            var selectedDropdown = document.getElementById("dropdown");
            console.log(selectedDropdown);
            var selectedDropdownval = selectedDropdown.options[selectedDropdown.selectedIndex].text;
            // var lengthval = document.getElementById("length").value
            // console.log(lengthval);
            // var depthval = document.getElementById("depth").value
            // console.log(depthval);
          
            if (previousClickedEle.length > 0) {
                for (var i = 0; i < previousClickedEle.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedEle[i]).style.display = "none";
                }
            }

            if (previousClickedBeam.length > 0) {
                for (var i = 0; i < previousClickedBeam.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedBeam[i]).style.display = "none";
                }
            }
            if (previousClickedMainBeam.length > 0) {
                for (var i = 0; i < previousClickedMainBeam.length; i++) {
                    console.log("test");
                    document.getElementById(previousClickedMainBeam[i]).style.display = "none";
                }
            }
            if (mainBeamDisplay.length > 0) {
                for (var i = 0; i < mainBeamDisplay.length; i++) {
                    console.log("test");
                    document.getElementById(mainBeamDisplay[i]).style.display = "none";
                }
            }
         
            if (value === "Bridge 1" && selectedDropdownval === "Portal Frame1") {
                // console.log("test");
                moveArrowDown("arrow", 120);
                const myTimeout = setTimeout(function() {
                    // previousClickedEle.push("set1");
                    // document.getElementById("set1").style.display = "block";
                    document.getElementById("procedure-message").innerHTML = "Select Cantilever from the dropdown menu";
                    // document.getElementById("mes1").innerHTML = "Shear force is constant throughout the beam";
                    // document.getElementById("mes2").innerHTML = "Maiximum bending movement occurs at the initial fixed end";
                    cantiPlBeam("#canti-pl-main-beam", "#canti-beam-pl");
                    // previousClickedBeam.push("beam1");
                    // document.getElementById("beam1").style.display = "none";
                    // console.log("beam1");
                    previousClickedMainBeam.push("main-beam1");
                    document.getElementById("main-beam1").style.display = "block";
                    mainBeamDisplay.push("main-beam1");
                    document.getElementById("main-beam1").style.display = "block";
                    //showObservations('svg-sfd','svg-bmd');
                    // animateObserve('.canti-pl-sfd path', 'M 100 300 L 350 300 L 350 350 L 100 350 L 100 300');
                    // animateObserve('.canti-pl-bmd path', 'M 100 300 L 450 300 L 100 400 L 100 300 L 100 300');
                }, 1500);
            }
            if (value === "Bridge 2" && selectedDropdownval === "Portal Frame1") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set1");
                document.getElementById("set1").style.display = "block";
                moveArrowDown("set1", 73);
                const myTimeout = setTimeout(function() {
                    // moveArrowDown("set1",110);
                    // document.getElementById("mes3").innerHTML = "Maximum shear force occurs at the fixed end";
                    // document.getElementById("mes4").innerHTML = "text message bm";
                    // console.log("test");
                    cantiUdlBeam("#canti-pl-main-beam", "#canti-beam-udl");
                    // previousClickedBeam.push("beam1");
                    // document.getElementById("beam1").style.display = "none";
                    // console.log("beam1");
                    previousClickedMainBeam.push("main-beam1");
                    document.getElementById("main-beam1").style.display = "block";
                    // mainBeamDisplay.push("main-beam1");
                    // document.getElementById("main-beam1").style.display = "block";
                    // animateObserve('.canti-udl-sfd path', 'M 100 300 L 450 300 L 100 400 L 100 300 L 100 300');
                    // animateObserve('.canti-udl-bmd path', 'M 100 300 Q 250 300 500 300 C 350 300 150 350 100 400 Q 100 400 100 300');
                }, 1000);
            }
            if (value === "Bridge 3" && selectedDropdownval === "Portal Frame1") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set1");
                document.getElementById("set1").style.display = "block";
                document.getElementById("set1").style.textAlign = "left";

                moveArrowDown("set1", 73);
                const myTimeout = setTimeout(function() {
                    // document.getElementById("mes5").innerHTML = "Shear force is constant throughout the beam";
                    // document.getElementById("mes6").innerHTML = "Maximum Positive B.M at center and negative B.M at fixed end";
                    fixedPlBeam("#canti-pl-main-beam", "#fixed-beam-pl");
                    // previousClickedBeam.push("beam1");
                    // document.getElementById("beam1").style.display = "none";
                    previousClickedMainBeam.push("main-beam1");
                    document.getElementById("main-beam1").style.display = "block";
                    // animateObserve('.fix-pl-sfd path', 'M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                    // animateObserve('.fix-pl-bmd path', 'M 150 150 L 450 150 L 450 250 L 150 250 L 150 150 L 150 250 L 300 50 L 450 250');
                }, 1000);
            }
            if (value === "Bridge 4" && selectedDropdownval === "Portal Frame1") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set2");
                document.getElementById("set2").style.display = "block";
                moveArrowDown("set2", 20);
                const myTimeout = setTimeout(function() {
                    // document.getElementById("mes7").innerHTML = "text message of sf";
                    // document.getElementById("mes8").innerHTML = "text message of bm";
                    fixedUdlBeam("#canti-pl-main-beam", "#fixed-beam-udl");
                    // previousClickedBeam.push("beam1");
                    // document.getElementById("beam1").style.display = "none";
                    previousClickedMainBeam.push("main-beam1");
                    document.getElementById("main-beam1").style.display = "block";
                    // animateObserve('.fix-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                    // animateObserve('.fix-udl-bmd path', 'M 150 200 L 450 200 L 450 250 L 150 250 L 150 200 L 150 250 Q 300 0 450 250');
                 }, 1000);
            }
            if (value === "Bridge 5" && selectedDropdownval === "Portal Frame1") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set3");
                document.getElementById("set3").style.display = "block";
                // document.getElementById("set3").style.textAlign = "center";
                moveArrowLeft("set3", 75    );
                const myTimeout = setTimeout(function() {
                    // document.getElementById("mes9").innerHTML = "Shear force varies linearly, maximum SF occurs at initial fixed ends";
                    // document.getElementById("mes10").innerHTML = "Maximum B.M occurs at fixed end";
                    onessPlBeam("#canti-pl-main-beam", "#oness-beam-pl");
                    // previousClickedBeam.push("beam1");
                    // document.getElementById("beam1").style.display = "none";
                    previousClickedMainBeam.push("main-beam1");
                    document.getElementById("main-beam1").style.display = "block";
                    // animateObserve('.oness-pl-sfd path', 'M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                    // animateObserve('.oness-pl-bmd path', 'M 100 200 L 100 200 L 400 200 L 400 250 L 300 150 L 100 200');
                }, 1000);
            }
            if (value === "Bridge 6" && selectedDropdownval === "Portal Frame1") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set5");
                document.getElementById("set5").style.display = "block";
                document.getElementById("set5").style.textAlign = "center";
                moveArrowRight("set5", 75);
                const myTimeout = setTimeout(function() {
                    // document.getElementById("mes11").innerHTML = "text message of sf";
                    // document.getElementById("mes12").innerHTML = "text message of bm";
                    onessUdlBeam("#canti-pl-main-beam", "#oness-beam-udl");
                    // previousClickedBeam.push("beam1");
                    // document.getElementById("beam1").style.display = "none";
                    previousClickedElepreviousClickedMainBeam.push("main-beam1");
                    document.getElementById("main-beam1").style.display = "block";
                    // animateObserve('.oness-udl-sfd path', 'M 100 200 L 100 200 L 500 200 L 450 300 L 100 150 Q 100 200 100 200');
                    // animateObserve('.oness-udl-bmd path', 'M 100 200 L 100 200 L 500 200 L 500 250 Q 250 50 100 200');
                }, 1000);
            }
            if (value === "Frame 1" && selectedDropdownval === "Portal Frame2") {
                moveArrowDown("arrow", 122);
                const myTimeout = setTimeout(function() {
                    // previousClickedEle.push("set7");
                    // document.getElementById("set7").style.display = "block";
                    // document.getElementById("mes13").innerHTML = "Shear force varies linearly, maximum SF occurs at fixed ends";
                    // document.getElementById("mes14").innerHTML = "Maximum Positive B.M at center and negative B.M at fixed end";
                    steelBeamOne("#canti-udl-main-beam", "#steel-beam-1");
                    // previousClickedBeam.push("beam7");
                    // document.getElementById("beam7").style.display = "block ";
                    // console.log("beam1");
                    previousClickedMainBeam.push("main-beam2");
                    document.getElementById("main-beam2").style.display = "block";
                    // animateObserve('.twoss-pl-sfd path', 'M 150 150 L 450 150 L 450 200 L 300 200 L 300 100 L 150 100 L 150 150');
                    // animateObserve('.twoss-pl-bmd path', 'M 100 300 L 300 300 L 200 250 L 100 300');
                }, 1000);
            }
            if (value === "Frame 2" && selectedDropdownval === "Portal Frame2") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set1");
                document.getElementById("set1").style.display = "block";
                moveArrowDown("set1", 78);
                const myTimeout = setTimeout(function() {
                    // previousClickedEle.push("set8");
                    // document.getElementById("set8").style.display = "block";
                    // document.getElementById("mes15").innerHTML = "text message of sf";
                    // document.getElementById("mes16").innerHTML = "text message of bm";
                    steelBeamTwo("#canti-udl-main-beam", "#steel-beam-2");
                    // previousClickedBeam.push("beam2");
                    // document.getElementById("beam2").style.display = "none";
                    previousClickedMainBeam.push("main-beam2");
                    document.getElementById("main-beam2").style.display = "block";
                    // animateObserve('.twoss-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                    // animateObserve('.twoss-udl-bmd path', 'M 100 300 L 400 300 Q 250 150 100 300');
                }, 1000);
            }
            if (value === "Frame 3" && selectedDropdownval === "Portal Frame2") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set1");
                document.getElementById("set1").style.display = "block";
                document.getElementById("set1").style.textAlign = "left";
                moveArrowDown("set1", 78);
                const myTimeout = setTimeout(function() {
                    // previousClickedEle.push("set2");
                    // document.getElementById("set2").style.display = "block";
                    // document.getElementById("mes15").innerHTML = "text message of sf";
                    // document.getElementById("mes16").innerHTML = "text message of bm";
                    steelBeamThree("#canti-udl-main-beam", "#steel-beam-3");
                    // previousClickedBeam.push("beam2");
                    // document.getElementById("beam2").style.display = "none";
                    previousClickedMainBeam.push("main-beam2");
                    document.getElementById("main-beam2").style.display = "block";
                    // animateObserve('.twoss-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                    // animateObserve('.twoss-udl-bmd path', 'M 100 300 L 400 300 Q 250 150 100 300');
                }, 1000);
            }
            if (value === "Frame 4" && selectedDropdownval === "Portal Frame2") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set2");
                document.getElementById("set2").style.display = "block";
                moveArrowDown("set2", 23);
                const myTimeout = setTimeout(function() {
                    // previousClickedEle.push("set2");
                    // document.getElementById("set2").style.display = "block";
                    // document.getElementById("mes15").innerHTML = "text message of sf";
                    // document.getElementById("mes16").innerHTML = "text message of bm";
                    
                    // previousClickedBeam.push("beam2");
                    // document.getElementById("beam2").style.display = "none";
                    previousClickedMainBeam.push("main-beam2");
                    document.getElementById("main-beam2").style.display = "block";
                    steelBeamFour("#canti-udl-main-beam", "#steel-beam-4");
                    // animateObserve('.twoss-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                    // animateObserve('.twoss-udl-bmd path', 'M 100 300 L 400 300 Q 250 150 100 300');
                }, 1000);
            }
            if (value === "Frame 5" && selectedDropdownval === "Portal Frame2") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                document.getElementById("set5").style.textAlign = "left";
                previousClickedEle.push("set3");
                document.getElementById("set3").style.display = "block";

                moveArrowLeft("set3", 78);
                const myTimeout = setTimeout(function() {
                    // previousClickedEle.push("set8");
                    // document.getElementById("set8").style.display = "block";
                    // document.getElementById("mes15").innerHTML = "text message of sf";
                    // document.getElementById("mes16").innerHTML = "text message of bm";
                    steelBeamFive("#canti-udl-main-beam", "#steel-beam-5");
                    // previousClickedBeam.push("beam8");
                    // document.getElementById("beam8").style.display = "none";
                    previousClickedMainBeam.push("main-beam2");
                    document.getElementById("main-beam2").style.display = "block";
                    // animateObserve('.twoss-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                    // animateObserve('.twoss-udl-bmd path', 'M 100 300 L 400 300 Q 250 150 100 300');
                }, 1000);
            }
            if (value === "Frame 6" && selectedDropdownval === "Portal Frame2") {
                previousClickedEle.push("arrow");
                document.getElementById("arrow").style.display = "none";
                previousClickedEle.push("set5");
                document.getElementById("set5").style.display = "block";
                document.getElementById("set5").style.textAlign = "left";                
                moveArrowRight("set5", 100);
                const myTimeout = setTimeout(function() {
                    // previousClickedEle.push("set8");
                    // document.getElementById("set8").style.display = "block";
                    // document.getElementById("mes15").innerHTML = "text message of sf";
                    // document.getElementById("mes16").innerHTML = "text message of bm";
                    steelBeamSix("#canti-udl-main-beam", "#beam12");
                    // previousClickedBeam.push("beam12");
                    // document.getElementById("beam12").style.display = "block";
                    previousClickedMainBeam.push("main-beam2");
                    document.getElementById("main-beam2").style.display = "block";
                    // animateObserve('.twoss-udl-sfd path', 'M 150 150 L 450 150 L 450 250 L 150 50 L 150 150');
                    // animateObserve('.twoss-udl-bmd path', 'M 100 300 L 400 300 Q 250 150 100 300');
                }, 1000);
            }
        }
    }
}