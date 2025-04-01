const locations = {
    "Entrance Gate": "scene1",
    "Facade": "scene2",
    "Left Facade": "scene3",
    "Right Facade": "scene4",
    "Scene 5": "scene5"
    //dito sa part nato ilalagay mo yung mga scene na nagawa mo, yung name ng scene tapos yung mismong scene
};

document.querySelector(".search-bar").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let searchQuery = document.querySelector(".search-bar input").value.trim();
    
    if (locations[searchQuery]) {
        viewer.loadScene(locations[searchQuery]); // Load the scene if found
    } else {
        alert("Location not found!");
    }
});


// Function to create a custom ground hotspot (Google Street View style)
function groundHotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add("ground-hotspot"); // Apply CSS class
    hotSpotDiv.style.backgroundImage = "url('images/arrow-icon2.png')"; // Use an arrow icon
    hotSpotDiv.style.width = "10px"; // Adjust width
    hotSpotDiv.style.height = "10px"; // Adjust height
}

// Initialize Pannellum Viewer with Two Scenes
pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene1",
        "sceneFadeDuration": 1000,
        "hfov": 50,  // Default zoom level
        "autoLoad": true,  // ✅ Auto-load panorama on page load
        "showFullscreenCtrl": false  // ✅ Hide fullscreen button
    },
    "scenes": {
        "scene1": {
            "type": "equirectangular",
            "panorama": "images/entrance-gate.jpg",
            "hfov": 200,  
            "hotSpots": [
                {
                    "pitch": -43,  //pitch yung alignment ng hotspot vertical
                    "yaw": -3,     //yaw alignment ng hotspot horizontal
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "scene2"
                }
            ]
        },
        "scene2": {
    "type": "equirectangular",
    "panorama": "images/facade.jpg",
    "hfov": 110,  
    "hotSpots": [
        {
            "pitch": -30,  
            "yaw": 180,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "scene1"
        },
        {
            "pitch": -30,  
            "yaw": -55,  // Left side
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Left to Facade Left",
            "sceneId": "scene3"
        },
        {
            "pitch": -30,  
            "yaw": 54,  // Right side
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Right to Facade Right",
            "sceneId": "scene4"
        }
    ]
}
,
        "scene3": {
            "type": "equirectangular",
            "panorama": "images/facade-left.jpg",
            "hfov": 150,  
            "yaw": -90,  // kung gusto mong iposition kung san yung center ng panorama  
            "hotSpots": [
                {
                    "pitch": -45,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene100"
                },
                {
                    "pitch": -135,  
                    "yaw": 110,  // Right side
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Right to Facade Right",
                    "sceneId": "scene109"// hall kila sir ali wala pang naka scene
                }
            ]
        },
        "scene4": {
            "type": "equirectangular",
            "panorama": "3 main entrance/2.jpg",
            "hfov": 110,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 83,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene5"
                }
            ]
        },

        "scene5": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.jpg",
            "hfov": 110,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 83,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene2"
                },
                {"pitch": -20,  
                "yaw": 160,    
                "type": "info",
"text": "<b>Registrar Office</b><br>Student Enrollment & Registration<br>Academic Records Management<br>Issuance of Documents – Provides essential documents such as:<br><ul><li>Transcript of Records (TOR)</li><li>Certificate of Enrollment</li><li>Diplomas and Graduation Records</li><li>Good Moral Certificate</li><li>Processing of Requests</li><li>Graduation & Clearance</li></ul>"
                }
]
        },
        "scene100": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
            "hfov": 200,  
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene101"// vice president office of hs
                },{//back
                    "pitch": -30,  
                    "yaw": 170,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene3"// entrance
                }
            ]
        }
        ,
        "scene101": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.3.jpg",
            "hfov": 200,  
            "yaw": 20,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene102"// department heads office
                },{//back
                    "pitch": -30,  
                    "yaw": 190,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene101.1"
                }
            ]
        },
        "scene101.1": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
            "hfov": 200,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 20,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene101"// department heads office
                },
                {//back
                    "pitch": -30,  
                    "yaw": 190,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene100"
                }
            ]
        },
        "scene102": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.4.jpg",
            "hfov": 110,  
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene103"//teachers room
                }
            ]
        }
        ,
        "scene103": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.5.jpg",
            "hfov": 110,  
            "yaw": 1,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene104" // stairs hotspot not indicated yet fire exit
                }
            ]
        }
        ,
        "scene104": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.6.jpg",
            "hfov": 110,  
            "yaw": 1,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene105" // beside the stairs
                }
            ]
        }
        ,
        "scene105": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.7.jpg",
            "hfov": 110,  
            "yaw": 1,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw":5,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene106" // HR and Admin office
                }
            ]
        }
        ,
        "scene106": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.8.jpg",
            "hfov": 110,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene107" //new hallway hotspot at indicated 200
                }, {
                    "pitch": -35,  // U/D
                    "yaw": 85,    // -L/+R
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene200" 
                }
            ]
        }
          ,
        "scene107": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.9.jpg",
            "hfov": 110,  
            "yaw": 1,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 3,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene108" // guidance office hs
                }
            ]
        }
          ,
        "scene108": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.10.jpg",
            "hfov": 110,  
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene108.1" //behaviour management 
                }
            ]
        } ,
        "scene108.1": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/last view.jpg",
            "hfov": 110,  
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene3" // cr sa highschool dept
                }, {
                    "pitch": -30,  
                    "yaw": 60,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene108.2" // cr sa highschool dept
                }
            ]
        }
        ,
        "scene108.2": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.10.jpg",
            "hfov": 110,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene108.3" //behaviour management 
                }
            ]
        }, 
        "scene108.3": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.9.jpg",
            "hfov": 110,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 3,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene108.4" // guidance office hs
                }
            ]
        }
          , // hall kila sir ali
        "scene109": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/1.jpg",
            "hfov": 110,  
            "yaw": 1,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": -16,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene110" 
                },
                { // back
                    "pitch": -50,  
                    "yaw": -200,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene3" 
                }
            ]
       }, // hall kila sir ali
        "scene109.1": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/1.jpg",
            "hfov": 110,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": -16,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene109" 
                }
            ]
        }
        ,
        "scene110": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/2.jpg",
            "hfov": 110,  
            "yaw": 1,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": -16,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene111" 
                },
                {"pitch": -15,  
                "yaw": 44,    
                "type": "info",
                "text": "Office of the President"
                }
                ,
                { // back
                    "pitch": -50,  
                    "yaw": -200,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene109" 
                }
            ]
        }
        ,
        "scene110.1": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/2.jpg",
            "hfov": 110,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": -16,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene111" 
                },
                {"pitch": -15,  
                "yaw": 44,    
                "type": "info",
                "text": "Office of the President"
                }
                ,
                { // back
                    "pitch": -50,  
                    "yaw": -200,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene110" 
                }
            ]
        }
        ,
        "scene111": { 
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.jpg",// eto ung folder/ file name ng images
            "hfov": 110, 
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -50, 
                    "yaw": -55,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene203" // dapat 202sya 
                
                },
                { // right side-
                    "pitch": -50,  
                    "yaw": 25,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene112" 
                },
                { // back
                    "pitch": -50,  
                    "yaw": -190,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene110.1" 
                }
            ]
        } ,
        "scene112": { 
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.1.1.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 300,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene113" 
                
                },
            ]
        },
        "scene113": { 
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.0.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene114" 
                
                },
            ]
        },
        "scene112": { 
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.1.1.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 300,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene113" 
                
                },
            ]
        },
        "scene113": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.0.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene114" 
                
                }
            ]
        },
        "scene114": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.1.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene115" 
                
                }
            ]
        },
        "scene115": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.2.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene116" 
                
                }
            ]
        },
        "scene116": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.3.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene117" 
                
                }
            ]
        },
        "scene117": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.4.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene118" 
                
                }
            ]
        },
        "scene118": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.5.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene119" 
                
                }
            ]
        },
        "scene119": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.6.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene120" 
                
                }
            ]
        },
        "scene120": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.7.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene121" 
                
                }
            ]
        },
        "scene121": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.8.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene122" 
                
                }
            ]
        },
        "scene122": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.8.1.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene123" 
                
                }
            ]
        },
        "scene123": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.9.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene124" 
                
                }
            ]
        },
        "scene124": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.10.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene125" 
                
                }
            ]
        },
        "scene125": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.11.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene126" 
                
                }
            ]
        },
        "scene126": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.12.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene128" 
                
                }
            ]
        }, "scene128": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.13.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene129" 
                
                }
            ]
        },
        "scene129": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.14.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene130" 
                
                }
            ]
        },
        "scene130": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.15.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene131" 
                
                }
            ]
        },
        "scene131": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.15.1.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene132" 
                
                }
            ]
        },
        "scene132": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.15.1.2.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene132" 
                
                }
            ]
        },
        "scene132": { //5 paz mendez hall second floor
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/second floor/1.1.15.1.3.jpg",
            "hfov":200, 
            "yaw": 100,  // Adjust this value (default is 0) 
            "pitch": -10,
            "hotSpots": [ 
                {
                    // left side
                    "pitch": -120, 
                    "yaw": 290,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene133" 
                
                }
            ]
        },

/********************************* KAY FIONA *************************************************************** */
// Gate malapit sa OSA
"scene200": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.1 (hallway option from 2.6 and 2.7).jpg",
    "hfov": 110,  
    "yaw": -180,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {  
            "pitch": -30,  
            "yaw": +10,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene201" 
        }
    ]
}
, // back not indicated, sa second gate
"scene201": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.jpg",
    "hfov": 110,  
    "yaw": -180,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {
            "pitch": -30,  
            "yaw": 10,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene200" 
        }, {
            "pitch": -35,  // U/D
            "yaw": 85,    // -L/+R
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene3" // ung my tricycle 
        }
    ]
} 
, // left side of board all the way to the new hall
"scene202": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene203" 
        }
    ]
}
, 
"scene203": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.3 (plus option to turn to the ladder).jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene204" 
        }
    ]
}
, 
"scene204": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.4.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene205" 
        }
    ]
}
, 
"scene205": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.5.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene206" 
        }
    ]
}
, 
"scene206": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.7 (plus option to turn to the ladder).jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene207" 
        }
    ]
}
, 
"scene207": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.8.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene208" 
        }
    ]
}
, 
"scene208": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.9.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene209" 
        }
    ]
}
, 
"scene209": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.10.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene210" 
        }
    ]
}
, 
"scene210": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.11 (plus upstairs option).jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene211" 
        }
    ]
}
, 
"scene211": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.12 (plus upstairs option).jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene212" 
        }
    ]
}
, 
"scene212": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.13.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene213" 
        }
    ]
}
, 
"scene213": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.1.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene214" 
        }
    ]
}
, 
"scene214": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.2.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene215" 
        }
    ]
}
, 
"scene215": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.3.jpg",
    "hfov": 150,  
    "yaw": 295,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 200,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene216" 
        }
    ]
}
, 
"scene216": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.4.jpg",
    "hfov": 150,  
    "yaw": 280,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 200,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene217" 
        }
    ]
}
, 
"scene217": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.jpg",
    "hfov": 150,  
    "yaw": 280,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 200,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene218" 
        }
    ]
}
, 
"scene218": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/last view of both 1.1 and 2.1.jpg",
    "hfov": 150,  
    "yaw": 280,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 90,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene219" 
        }
    ]
}
        
    }
});
