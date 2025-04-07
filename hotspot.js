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
                    "sceneId": "scene115"
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
                    "sceneId": "scene115"// not indicated side ng kay fiona
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
                    "sceneId": "scene112"// not indicated
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
        }
        
    }
});
