const locations = {
    "Entrance Gate": "scene1",
    "Facade": "scene2",
    "Left Facade": "scene3",
    "Right Facade": "scene4",
    "Scene 5": "scene5"
    //dito sa part nato ilalagay mo yung mga scene na nagawa mo, yung name ng scene tapos yung mismong scene
};

// Function to create a custom ground hotspot (Google Street View style)
function groundHotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add("ground-hotspot"); // Apply CSS class
    hotSpotDiv.style.backgroundImage = "url('images/ARROW UP icon.png')"; // Use an arrow icon
    hotSpotDiv.style.width = "10px"; // Adjust width
    hotSpotDiv.style.height = "10px"; // Adjust height
}

// Initialize Pannellum Viewer with Two Scenes
pannellum.viewer('panorama', {
    "default": {
        "firstScene": "scene1",
        "sceneFadeDuration": 1000,
        "hfov": 100,  // Default zoom level
        "autoLoad": true,  // ✅ Auto-load panorama on page load
        "showFullscreenCtrl": false,  // ✅ Hide fullscreen button
        "showZoomCtrl": false  // ❌ This hides the zoom controls
    },
    "scenes": {
        "scene1": {
            "type": "equirectangular",
            "panorama": "images/entrance-gate.jpg",
            "hfov": 300, 
            "yaw":3,  
            "pitch":-10,// Adjust this value (default is 0)
            "hotSpots": [
                {
                    "pitch": -35,  //pitch yung alignment ng hotspot vertical
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
            "pitch":-10,
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
            "hfov": 200,
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
                    "sceneId": "scene112"// hall kila sir ali wala pang naka scene
                }
            ]
        },
        "scene4": {
            "type": "equirectangular",
            "panorama": "3 main entrance/2.jpg",
            "hfov": 200,
            "yaw": 150,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 83,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene5"
                },
                {
                    "pitch": -30,
                    "yaw": -40,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene2"
                }
                
            ]
        },

        "scene5": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.jpg",
            "hfov": 200,
            "yaw": 85,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 83,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene7"
                },
                {
                    "pitch": -30,
                    "yaw": -100,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Back",
                    "sceneId": "scene4"
                },
                {
                    "pitch": -35,
                    "yaw": 160,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Back",
                    "sceneId": "reg1"
                },
                {
                    "pitch": -20,
                    "yaw": 160,
                    "type": "info",
                    "text": "<b>Registrar Office</b><br>Student Enrollment & Registration<br>Academic Records Management<br>Issuance of Documents – Provides essential documents such as:<br><ul><li>Transcript of Records (TOR)</li><li>Certificate of Enrollment</li><li>Diplomas and Graduation Records</li><li>Good Moral Certificate</li><li>Processing of Requests</li><li>Graduation & Clearance</li></ul>"
                }
            ]
        },
        "scene6": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.1.jpg",
            "hfov": 200,
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 100,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene4"
                },
                {
                    "pitch": -30,
                    "yaw": -10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Back",
                    "sceneId": "scene7"
                }
            ]
        },
        "scene7": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.2.jpg",
            "hfov": 200,
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": -50,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene8"
                }
            ]
        },
        "scene8": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.3.1.jpg",
            "hfov": 200,
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": -1,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Back",
                    "sceneId": "scene9"
                }
            ]
        },

        "scene9": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.3.2.jpg",
            "hfov": 200,
            "yaw": -30,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": -30,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Back",
                    "sceneId": "quad1"
                }
            ]
        },
        "scene9Back": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.3.2.jpg",
            "hfov": 200,
            "pitch":-3,
            "yaw":150,   
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 150,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": ""
                }
            ]
        },
        "quad1": {
            "type": "equirectangular",
            "panorama": "quadrangle/1.jpg",
            "hfov": 200,
            "pitch":5,
            "yaw": 3, 
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 3,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad2"
                }
            ]
        },
        "quad1Back": {
            "type": "equirectangular",
            "panorama": "quadrangle/1.jpg",
            "hfov": 200,
            "pitch":3,
            "yaw":190,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 190,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene9Back"
                }
            ]
        },
        "quad2": {
            "type": "equirectangular",
            "panorama": "quadrangle/2.jpg",
            "hfov": 200,
            "pitch":5,
            "yaw": -2,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 0,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad4"
                }
            ]
        },
        "quad2Back": {
            "type": "equirectangular",
            "panorama": "quadrangle/2.jpg",
            "hfov": 200,
            "pitch":3,
            "yaw":175,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 172,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad1Back"
                }
            ]
        },
        
        "quad4": {
            "type": "equirectangular",
            "panorama": "quadrangle/4.jpg",
            "hfov": 200,
            "pitch":5,
            "yaw": -10,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": -10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad5"
                }
            ]
        },
        "quad4Back": {
            "type": "equirectangular",
            "panorama": "quadrangle/4.jpg",
            "hfov": 200,
            "pitch":3,
            "yaw":175,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 172,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad2Back"
                }
            ]
        },
        "quad5": {
            "type": "equirectangular",
            "panorama": "quadrangle/5.jpg",
            "hfov": 200,
            "pitch":5,
            "yaw": -10,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": -10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad6"
                }
            ]
        },
        "quad5Back": {
            "type": "equirectangular",
            "panorama": "quadrangle/5.jpg",
            "hfov": 200,
            "pitch":3,
            "yaw":175,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 172,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad4Back"
                }
            ]
        },
        "quad6": {
            "type": "equirectangular",
            "panorama": "quadrangle/6.jpg",
            "hfov": 200,
            "pitch":7,
            "yaw": -10,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": -10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad6Back"
                }
            ]
        },
        "quad6Back": {
            "type": "equirectangular",
            "panorama": "quadrangle/6.jpg",
            "hfov": 200,
            "pitch":3,
            "yaw":172,   
            "hotSpots": [
                {
                    "pitch": -20,
                    "yaw": 172,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "quad5Back"
                }
            ]
        },
        //REGISTRAR
        "reg1": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/1.jpg",
            "hfov": 200,
            "yaw": 10,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg2"
                },
                {
                    "pitch": -30,
                    "yaw": 190,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg1Backscene5"
                }
                
            ]
        },
        "reg1Back": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/1.jpg",
            "hfov": 200,
            "yaw": -180,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 0,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg2"
                },
                {
                    "pitch": -30,
                    "yaw": 190,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg1Backscene5"
                }
                
            ]
        },
        
        "reg1Backscene5": {
            "type": "equirectangular",
            "panorama": "3 main entrance/3.jpg",
            "hfov": 200,
            "yaw": -12,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 83,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene7"
                },
                {
                    "pitch": -30,
                    "yaw": -100,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Back",
                    "sceneId": "scene4"
                },
                {
                    "pitch": -35,
                    "yaw": 160,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Back",
                    "sceneId": "reg1"
                },
                {
                    "pitch": -20,
                    "yaw": 160,
                    "type": "info",
                    "text": "<b>Registrar Office</b><br>Student Enrollment & Registration<br>Academic Records Management<br>Issuance of Documents – Provides essential documents such as:<br><ul><li>Transcript of Records (TOR)</li><li>Certificate of Enrollment</li><li>Diplomas and Graduation Records</li><li>Good Moral Certificate</li><li>Processing of Requests</li><li>Graduation & Clearance</li></ul>"
                }
            ]
        },
        
        "reg2": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/2.jpg",
            "hfov": 200,
            "yaw": 2,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 2,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg3"
                },
                {
                    "pitch": -30,
                    "yaw": -180,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg1Back"
                }
            ]
        },
        "reg2Back": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/2.jpg",
            "hfov": 200,
            "yaw": 180,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 0,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg3"
                },
                {
                    "pitch": -30,
                    "yaw": 190,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg1Back"
                },
               
            ]
        },
        "reg3": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/3.jpg",
            "hfov": 200,
            "yaw": 9,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 9,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg4"
                }, 
                {
                    "pitch": -30,
                    "yaw": -180,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg2Back"
                }
            ]
        },
        "reg3Back": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/2.jpg",
            "hfov": 200,
            "yaw": 180,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 0,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg3"
                },
                {
                    "pitch": -30,
                    "yaw": 0,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg2Back"
                },
                
            ]
        },
        "reg4": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/4.jpg",
            "hfov": 200,
            "yaw": 12,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 12,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg5"
                },
                {
                    "pitch": -30,
                    "yaw": -180,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg3Back"
                }
                
                
            ]

        },
        "reg4Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/4.jpg",
    "hfov": 200,
    "yaw": 180,
    "hotSpots": [
        {
            "pitch": -30,
            "yaw": 0,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg5"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg3Back"
        }
    ]
},
"reg5Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/5.jpg",
    "hfov": 200,
    "yaw": 180,
    "hotSpots": [
        {
            "pitch": -30,
            "yaw": 0,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg6"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg4Back"
        }
    ]
},
"reg6Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/6.jpg",
    "hfov": 200,
    "yaw": 180,
    "hotSpots": [
        {
            "pitch": -30,
            "yaw": 0,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg7"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg5Back"
        }
    ]
},
"reg7Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/7.jpg",
    "hfov": 200,
    "yaw": 180,
    "hotSpots": [
        {
            "pitch": -30,
            "yaw": 0,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg8"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg6Back"
        }
    ]
},
"reg8Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/8.jpg",
    "hfov": 200,
    "yaw": 180,
    "hotSpots": [
        {
            "pitch": -30,
            "yaw": 0,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg9"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg7Back"
        }
    ]
},
"reg9Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/9.jpg",
    "hfov": 200,
    "yaw": 180,
    "hotSpots": [
        {
            "pitch": -30,
            "yaw": 90,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg10"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg8Back"
        }
    ]
},
"reg10Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/10.jpg",
    "hfov": 200,
    "yaw": 180,
    "hotSpots": [
        {
            "pitch": -30,
            "yaw": 130,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg1"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg9Back"
        }
    ]
},

        "reg5": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/5.jpg",
            "hfov": 200,
            "yaw": 10,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg6"
                },
                {
                    "pitch": -30,
                    "yaw": -180,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg4Back"
                }
                
            ]
        },
        "reg6": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/6.jpg",
            "hfov": 200,
            "yaw": 3,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 3,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg7"
                },
                {
                    "pitch": -30,
                    "yaw": -180,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg5Back"
                }
                
            ]
        },
        "reg7": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/7.jpg",
            "hfov": 200,
            "yaw": 190,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 190,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg8"
                },
                {
                    "pitch": -30,
                    "yaw": 10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg6Back"
                }
                
            ]
        },
        "reg8": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/8.jpg",
            "hfov": 200,
            "yaw": 190,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 190,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg9"
                },
                {
                    "pitch": -30,
                    "yaw": 10,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg7Back"
                }
                
            ]
        },
        "reg9": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/9.jpg",
            "hfov": 200,
            "pitch": -27,
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 90,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg10"
                },{
                    "pitch": -30,
                    "yaw": -180,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg8Back"
                }
                
            ]
        },
        "reg9Back": {
    "type": "equirectangular",
    "panorama": "8teofiloabellobldg1/1st floor/9.jpg",
    "hfov": 200,
    "pitch": -10,
    "yaw": -90,
    "hotSpots": [
        {
            "pitch": 5,
            "yaw": 10,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Forward",
            "sceneId": "reg10"
        },
        {
            "pitch": -30,
            "yaw": 190,
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Go Back",
            "sceneId": "reg8Back"
        }
    ]
},
        "reg10": {
            "type": "equirectangular",
            "panorama": "8teofiloabellobldg1/1st floor/10.jpg",
            "hfov": 200,
            "yaw": -83,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,
                    "yaw": 130,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Forward",
                    "sceneId": "reg1"
                },
                {
                    "pitch": -45,
                    "yaw": 70,
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "reg9Back"
                }
                
            ]
        },
        

        /**********************************************code ni Pat**********************/
        "scene100": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
            "hfov": 110,  
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 5,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene101"// vice president office of hs
                },{//back
                    "pitch": -30,  
                    "yaw": 170,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene3"// entrance
                }
            ]
        }
        ,"scene100.1": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
            "hfov": 110,  
            "yaw": 180,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 5,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene101"// vice president office of hs
                },{//back
                    "pitch": -30,  
                    "yaw": 170,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene3"// entrance
                }
            ]
        }
        ,
        "scene101": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.3.jpg",
            "hfov": 110,  
            "yaw": 0,  // Adjust this value (default is 0) 
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": 10,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene102"// department heads office
                },{//back
                    "pitch": -30,  
                    "yaw": 190,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene100.1"// vice president office of h
                }
            ]
        }, "scene100": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
            "hfov": 300,  
            "yaw": 5,  // Adjust this value (default is 0) 
            "pitch":-8,
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
                    "yaw": 175,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene3"// entrance
                }
            ]
        },
        "scene101": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.2.jpg",
            "hfov": 300,  
            "yaw": 15,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 9,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene102"// tchrs room
                },{//back
                    "pitch": -30,  
                    "yaw": 175,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back101"// back to vp room
                }
            ]
        },
        "back101": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene101"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene3"// iback ung scene03 hindi naka direct na harap sa mendezhall
                }
            ]
        },
        "scene102": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.3.jpg",
            "hfov": 300,  
            "yaw": 30,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 25,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene103"// office of the department heads
                },{//back
                    "pitch": -30,  
                    "yaw": 175,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back102"// tchr room
                }
            ]
        },
        "back102": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.2.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene103"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back101"
                }
            ]
        },
        "scene103": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.4.jpg",
            "hfov": 300,  
            "yaw":30,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 25,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene104"// teachers room2
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back103"// dept head office 
                }
            ]
        },
        "back103": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.3.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene104"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back102"
                }
            ]
        },
        "scene104": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.5.jpg",
            "hfov": 300,  
            "yaw": 30,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 25,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene105"// fire exit
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back103"// dept head
                }
            ]
        },
        "back104": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.4.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene105"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back103"
                }
            ]
        },
        "scene105": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.6.jpg",
            "hfov": 300,  
            "yaw": 30,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 25,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene106"// fire exit
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back104"// dept head
                }
            ]
        },
        "back105": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.5.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene105"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back104"
                }
            ]
        },
        "scene106": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.7.jpg",
            "hfov": 300,  
            "yaw": 5,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene107"// fire exit
                },{//back
                    "pitch": -30,  
                    "yaw": 175,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back106"// dept head
                }
            ]
        },
        "back106": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.6.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene106"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back105"
                }
            ]
        },
        "scene107": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.8.jpg",
            "hfov": 300,  
            "yaw": 5,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene108"// fire exit
                },{//right side
                    "pitch": -35,  
                    "yaw": 85,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene200"// hallway 
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back107"// dept head
                }
            ]
        },
        "back107": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.7.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene107"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back106"
                }
            ]
        },
        "scene108": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.9.jpg",
            "hfov": 300,  
            "yaw": 5,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene109"// fire exit
                },{//back
                    "pitch": -30,  
                    "yaw": 175,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back108"// dept head
                }
            ]
        },
        "back108": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.8.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene108"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back107"
                }
            ]
        },
        "scene109": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.10.jpg",
            "hfov": 300,  
            "yaw": 5,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene110"// fire exit
                },{//back
                    "pitch": -30,  
                    "yaw": 175,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back109"// dept head
                }
            ]
        },
        "back109": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.9.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene109"
                },{//back
                    "pitch": -30,  
                    "yaw": 180,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back108"
                }
            ]
        },
        "scene110": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.11.jpg",
            "hfov": 300,  
            "yaw": 5,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": 0,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene111"// fire exit
                },{//back
                    "pitch": -30,  
                    "yaw": 175,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back109"// dept head
                }
            ]
        },
        "back110": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.11.jpg",
            "hfov": 300,  
            "yaw": 180,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene110"
                },{//back
                    "pitch": -30,  
                    "yaw": 150,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back109"
                }
            ]
        },
        "scene111": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/last view of both.jpg",
            "hfov": 300,  
            "yaw": 5,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw":0,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene"// not indicated
                },{//back
                    "pitch": -40,  
                    "yaw": 70,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back110"
                }
            ]
        },
        "back111": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/left and center option/1st floor/1.10.jpg",
            "hfov": 300,  
            "yaw": 190,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw": -5,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "back110"
                },{//back
                    "pitch": -30,  
                    "yaw": 150,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back110"
                }
            ]
        }, "scene112": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/1.jpg",
            "hfov": 300,  
            "yaw": -20,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw":-15,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene113"// not indicated
                },{//back
                    "pitch": -40,  
                    "yaw": 160,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene3"
                }
            ]
        },
        "back112": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/1.jpg",
            "hfov": 300,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -30,  
                    "yaw": -15,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene114"
                },{//back
                    "pitch": -30,  
                    "yaw": 150,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "scene3"
                }
            ]
        },
        "scene113": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/2.jpg",
            "hfov": 300,  
            "yaw": -20,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -25,  
                    "yaw":-15,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene114"// not indicated
                },{//back
                    "pitch": -40,  
                    "yaw": 160,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back113"
                }
            ]
        },
        "back113": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/2.jpg",
            "hfov": 300,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {//left
                    "pitch": -30,  
                    "yaw": -15,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene114"
                },{//back
                    "pitch": -30,  
                    "yaw": 150,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back112"
                }
            ]
        }, 
        "scene114": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.jpg",
            "hfov": 300,  
            "yaw": -20,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -50,  
                    "yaw":-55,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene202"// not indicated side ng kay fiona
                },{//right
                    "pitch": -55,  
                    "yaw": 25,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene115"
                }
                ,{//back
                    "pitch": -40,  
                    "yaw": 160,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back113"
                }
            ]
        },
        "back114": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.jpg",
            "hfov": 300,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {
                    "pitch": -55,  
                    "yaw": -55,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene114"
                },{//right
                    "pitch": -55,  
                    "yaw": 25,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene115"
                }
                ,{//back
                    "pitch": -30,  
                    "yaw": 150,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back113"
                }
            ]
        },
        "scene115": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.1.1.jpg",
            "hfov": 300,  
            "yaw": 120,  // Adjust this value (default is 0) 
            "pitch":-15,
            "hotSpots": [
                {
                    "pitch": -140,  
                    "yaw":300,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene116"// not indicated
                },{//back
                    "pitch": -40,  
                    "yaw": 300,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back115"
                }
            ]
        },
        "back115": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.jpg",
            "hfov": 300,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {//left
                    "pitch": -50,  
                    "yaw": -55,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene"
                },
                {//back
                    "pitch": -30,  
                    "yaw": 150,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back112"
                }
            ]
        },
        "scene116": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.1.2.jpg",
            "hfov": 300,  
            "yaw": -20,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {//right
                    "pitch": -55,  
                    "yaw": 25,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene115"
                }
                ,{//back
                    "pitch": -40,  
                    "yaw": 160,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back113"
                }
            ]
        },
        "back116": {
            "type": "equirectangular",
            "panorama": "5pazmendezhall1/right option/first floor/3.1.1.jpg",
            "hfov": 300,  
            "yaw": 150,  // Adjust this value (default is 0) 
            "pitch":-8,
            "hotSpots": [
                {//left
                    "pitch": -50,  
                    "yaw": -55,  
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Move Forward",
                    "sceneId": "scene"
                },
                {//back
                    "pitch": -30,  
                    "yaw": 150,    
                    "type": "custom",
                    "createTooltipFunc": groundHotspot,
                    "text": "Go Back",
                    "sceneId": "back112"
                }
            ]
        },


        
         

/********************************* KAY FIONA *************************************************************** */
// Gate malapit sa OSA
// Gate malapit sa OSA
"scene200": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.1.jpg",
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
    "yaw": -100,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama": "5pazmendezhall1/left and center option/1st floor/3.2.1.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjusted to match the hallway direction
    "pitch": -5,  // Slight downward tilt to match the perspective
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene203",
        
        }
    ]
}
    ,
"scene203": { 
    "type": "equirectangular",
    "panorama": "5pazmendezhall1/left and center option/1st floor/3.2.2.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjusted to match the hallway direction
    "pitch": -5,  // Slight downward tilt to match the perspective
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene204",
        }
    ]
}

, 
"scene204": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.3.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.4.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.5.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.7.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.8.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.9.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.10.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
"scene211": {// may hotspot paakyat sa 2nd floor ng odulio
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.11.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene212" 
        },
        {//other hotspot
            "pitch": -60,  
            "yaw": 350,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene220" 
        }
    ]
}
, 
"scene212": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.12.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
"scene213": { // hotspot papuntang 1st floor ng odulio  connected sa scene 222
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.13.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -40,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene214" 
        },
        {//other hotspot
            "pitch": -40,  
            "yaw": 335,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene222" 
        }
    ]
}
, 
"scene214": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.1.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 295,    
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.2.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 295,    
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.3.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.14.4.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 280,    
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
    "panorama":"5pazmendezhall1/left and center option/1st floor/3.2.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 280,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene219" 
        }
    ]
}
, 
"scene219": {
    "type": "equirectangular",
    "panorama":"5pazmendezhall1/left and center option/1st floor/last view of both 1.1 and 2.1.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -35,  
            "yaw": 280,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene220" 

             }
       ]
   }
   , 
"scene220": { // 2nd floor Ricardo Odulio
    "type": "equirectangular",
    "panorama":"Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/2.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -50,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene211" 
        },
        {//other hotspot
            "pitch": -30,  
            "yaw": 360,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene221" 

             }
       ]
   }
   , 
"scene221": { // 1st floor Ricardo Odulio  connect sa 213
    "type": "equirectangular",
    "panorama":"Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/1.0.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -50,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene222" 
        },
        {//other hotspot
            "pitch": -30,  
            "yaw": 360,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene211" 

             }
       ]
   },
   "scene222": { // 1st floor Ricardo Odulio
    "type": "equirectangular",
    "panorama":"Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/1.jpg",
    "hfov": 200,  
    "yaw": 300,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -50,  
            "yaw": 300,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene212" 
        },
        {//other hotspot
            "pitch": -30,  
            "yaw": 360,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene223" 

             }
       ]
   }
   , 
"scene223": {  //1st floor ng ricardo odulio
    "type": "equirectangular",
    "panorama":"Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/4.jpg",
    "hfov": 200,  
    "pitch": 0,
    "yaw": 110,  // Adjust this value (default is 0)  position ng view camera
    "hotSpots": [
        {        
            "pitch": -25,  
            "yaw": -270,    
            "type": "custom",
            "createTooltipFunc": groundHotspot,
            "text": "Move Forward",
            "sceneId": "scene224" 

             }
       ]
   }
   , 
   "scene224": {  //1st floor ng ricardo odulio
       "type": "equirectangular",
       "panorama":"Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/5.jpg",
       "hfov": 0,  
       "pitch": 0,
       "yaw": 110,  // Adjust this value (default is 0)  position ng view camera
       "hotSpots": [
           {        
               "pitch": -25,  
               "yaw": -275,    
               "type": "custom",
               "createTooltipFunc": groundHotspot,
               "text": "Move Forward",
               "sceneId": "scene225" 
   
                }
          ]
      }
      
    }
      
});
