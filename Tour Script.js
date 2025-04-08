const locations = {
  "Entrance Gate": "scene1",
  Facade: "scene2",
  "Left Facade": "scene3",
  "Right Facade": "scene4",
  "Scene 5": "scene5",
  //dito sa part nato ilalagay mo yung mga scene na nagawa mo, yung name ng scene tapos yung mismong scene
};

// Function to create a custom ground hotspot (Google Street View style)
function groundHotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("ground-hotspot"); // Apply CSS class
  hotSpotDiv.style.backgroundImage = "url('images/ARROW UP icon.png')"; // Use an arrow icon
  hotSpotDiv.style.width = "10px"; // Adjust width
  hotSpotDiv.style.height = "10px"; // Adjust height
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Pannellum Viewer with Two Scenes
  const viewer = pannellum.viewer("panorama", {
    default: {
      firstScene: "scene1",
      sceneFadeDuration: 1000,
      hfov: 100, // Default zoom level
      autoLoad: true, // ✅ Auto-load panorama on page load
      showFullscreenCtrl: false, // ✅ Hide fullscreen button
      showZoomCtrl: false, // ❌ This hides the zoom controls
    },
    scenes: {
      scene1: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME1.1.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -35, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "scene2",
          },
        ],
      },
      scene2: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME2.jpg",
        hfov: 200,
        pitch: -5,
        yaw: 3,
        hotSpots: [
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene1",
          },
          {
            pitch: -30,
            yaw: 3,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene2.1",
          },
          {
            pitch: -30,
            yaw: -70, // Left side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Left to Facade Left",
            sceneId: "scene3",
          },
          {
            pitch: -30,
            yaw: 96, // Right side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Right to Facade Right",
            sceneId: "scene4",
          },
        ],
      },
      "scene2.1": {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME2.1.jpg",
        hfov: 200,
        pitch: -5,
        yaw: -5,
        hotSpots: [
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene2",
          },
          {
            pitch: -30,
            yaw: -55, // Left side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Left to Facade Left",
            sceneId: "scene3",
          },
          {
            pitch: -30,
            yaw: 54, // Right side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Right to Facade Right",
            sceneId: "scene4",
          },
        ],
      },
      scene3: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME3.jpg",
        hfov: 200,
        yaw: 180, // kung gusto mong iposition kung san yung center ng panorama
        hotSpots: [
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene100",
          },
          {
            pitch: -135,
            yaw: 110, // Right side
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Right to Facade Right",
            sceneId: "scene112", // hall kila sir ali wala pang naka scene
          },
        ],
      },
      scene4: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME4.jpg",
        hfov: 200,
        yaw: 100, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20,
            yaw: -83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2",
          },
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "leftoffice1",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4.1",
          },
        ],
      },
      scene4Back: {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME4.jpg",
        hfov: 200,
        yaw: -90, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20,
            yaw: -83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2",
          },
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "leftoffice1",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4.1",
          },
        ],
      },
      "scene4.1": {
        type: "equirectangular",
        panorama: "1 Main Entrance/ME4.1.jpg",
        hfov: 200,
        pitch: 20,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20,
            yaw: -83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2.1",
          },
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene2",
          },
          {
            pitch: -10,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene5",
          },
          {
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4",
          },
        ],
      },
      leftoffice1: {
        type: "equirectangular",
        panorama: "left-office/1.jpg",
        hfov: 200,
        yaw: 5,
        hotSpots: [
          {
            pitch: -135,
            yaw: -170,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice2",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene4Back",
          },
        ],
      },
      leftoffice1Back: {//back scene
        type: "equirectangular",
        panorama: "left-office/1.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -135,
            yaw: -190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice2",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene4Back",
          },
        ],
      },
      
      leftoffice2: {
        type: "equirectangular",
        panorama: "left-office/2.jpg",
        hfov: 200,
        yaw: 10,
        hotSpots: [
          {
            pitch: -135,
            yaw: -170,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice3",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice1Back",
          }
        
        ],
      },
      leftoffice2Back: {
        type: "equirectangular",
        panorama: "left-office/2.jpg",
        hfov: 200,
        yaw: 190,
        hotSpots: [
          {
            pitch: -135,
            yaw: -190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice3",
          },
          {
            pitch: -45,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice1Back",
          }
        
        ],
      },
      leftoffice3: {
        type: "equirectangular",
        panorama: "left-office/3.jpg",
        hfov: 200,
        yaw: -2,
        hotSpots: [
          {
            pitch: -135,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice4",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice2Back",
          }
        
        ],
      },
      leftoffice3Back: {
        type: "equirectangular",
        panorama: "left-office/3.jpg",
        hfov: 200,
        yaw: -180,
        hotSpots: [
          {
            pitch: -135,
            yaw: -190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice4",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice2Back",
          }
        
        ],
      },
      leftoffice4: {
        type: "equirectangular",
        panorama: "left-office/4.jpg",
        hfov: 200,
        yaw: 0,
        hotSpots: [
          {
            pitch: -135,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice5",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice3Back",
          }
        
        ],
      },
      leftoffice4Back: {
        type: "equirectangular",
        panorama: "left-office/4.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -135,
            yaw: -190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "leftoffice5",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice3Back",
          }
        
        ],
      },
      leftoffice5: {
        type: "equirectangular",
        panorama: "left-office/5.jpg",
        hfov: 200,
        yaw: 0,
        hotSpots: [
          {
            pitch: -135,
            yaw: -190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: " wala pa",
          },
          {
            pitch: -45,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "leftoffice4Back",
          }
        
        ],
      },
      scene5: {
        type: "equirectangular",
        panorama: "3 main entrance/3.jpg",
        hfov: 200,
        yaw: 85, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene7",
          },
          {
            pitch: -30,
            yaw: -100,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene4.1",
          },
          {
            pitch: -35,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go to Registrar",
            sceneId: "reg1",
          },
          
        ],
      },
      
      scene6: {
        type: "equirectangular",
        panorama: "3 main entrance/2ME1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -30,
            yaw: 100,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene4",
          },
          {
            pitch: -30,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene7",
          },
        ],
      },
      
      scene7: {
        type: "equirectangular",
        panorama: "3 main entrance/2ME1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene7_1",
          },
        ],
      },
      
      scene7_1: {
        type: "equirectangular",
        panorama: "3 main entrance/2ME2.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0) 
        hotSpots: [
          {
            pitch: -20,
            yaw: -90,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene8",
          },
        ],
      },
      
      scene8: {
        type: "equirectangular",
        panorama: "3 main entrance/3.3.1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -1,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene9",
          },
        ],
      },

      scene9: {
        type: "equirectangular",
        panorama: "3 main entrance/3.3.2.jpg",
        hfov: 200,
        yaw: -30, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -30,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "quad1",
          },
        ],
      },
      scene9Back: {
        type: "equirectangular",
        panorama: "3 main entrance/3.3.2.jpg",
        hfov: 200,
        pitch: -3,
        yaw: 150,
        hotSpots: [
          {
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "",
          },
        ],
      },
      quad1: {
        type: "equirectangular",
        panorama: "quadrangle/QD1.jpg",
        hfov: 200,
        pitch: 5,
        yaw: 3,
        hotSpots: [
          {
            pitch: -20,
            yaw: 3,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad2",
          },
        ],
      },
      quad1Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD1.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 190,
        hotSpots: [
          {
            pitch: -20,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene9Back",
          },
        ],
      },
      quad2: {
        type: "equirectangular",
        panorama: "quadrangle/QD2.jpg",
        hfov: 200,
        pitch: 5,
        yaw: -2,
        hotSpots: [
          {
            pitch: -20,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad4",
          },
        ],
      },
      quad2Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD2.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 175,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad1Back",
          },
        ],
      },

      quad4: {
        type: "equirectangular",
        panorama: "quadrangle/QD4.jpg",
        hfov: 200,
        pitch: 5,
        yaw: -10,
        hotSpots: [
          {
            pitch: -20,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad5",
          },
        ],
      },
      quad4Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD4.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 175,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad2Back",
          },
        ],
      },
      quad5: {
        type: "equirectangular",
        panorama: "quadrangle/QD5.jpg",
        hfov: 200,
        pitch: 5,
        yaw: -10,
        hotSpots: [
          {
            pitch: -20,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad6",
          },
        ],
      },
      quad5Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD5.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 175,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad4Back",
          },
        ],
      },
      quad6: {
        type: "equirectangular",
        panorama: "quadrangle/QD6.jpg",
        hfov: 200,
        pitch: 7,
        yaw: -10,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad6Back",
          },
          {
            pitch: -10,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go To",
            sceneId: "quad7",
          }
        ],
      },
      quad6Back: {
        type: "equirectangular",
        panorama: "quadrangle/QD6.jpg",
        hfov: 200,
        pitch: 3,
        yaw: 172,
        hotSpots: [
          {
            pitch: -20,
            yaw: 172,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad5Back",
          },
        ],
      },
      quad7: {
        type: "equirectangular",
        panorama: "quadrangle/QD7.jpg",
        hfov: 200,
        pitch: 15,
        yaw: 90,
        hotSpots: [
          {
            pitch: -12,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go To",
            sceneId: "GSTOCR",
          },
          {
            pitch: -20,
            yaw: -87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "quad6Back",
          },
        ],
      },
      
      //GEN SIMEON BLDG.
      GSTOCR: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS1TOCR.jpg",
  hfov: 300,
  pitch: -10,
  yaw: -5,
  hotSpots: [
    {
      pitch: 1,
      yaw: -5,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go 2ND Floor",
      sceneId: "GS8",
    },
    {
      pitch: -30,
      yaw: 45,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSCR",
    },
    {
      pitch: -30,
      yaw: 85,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS6",
    },
    {
      pitch: -10,
      yaw: 180,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "quad7",
    },
    {
      pitch: -30,
      yaw: -90,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "insert to clinic",
    },
  ],
},

GSTOCRBack: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS1TOCR.jpg",
  hfov: 300,
  pitch: 10,
  yaw: -170,
  hotSpots: [
    {
      pitch: 1,
      yaw: -5,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "2ND FLOOR GS",
    },
    {
      pitch: -30,
      yaw: 45,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSCR",
    },
    {
      pitch: -30,
      yaw: 85,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS6",
    },
    {
      pitch: -10,
      yaw: 180,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "quad7",
    },
    {
      pitch: -30,
      yaw: -90,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "insert to clinic",
    },
  ],
},

GSCR: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS2CR.jpg",
  hfov: 400,
  pitch: -20,
  yaw: -20,
  hotSpots: [
    {
      pitch: -30,
      yaw: 90,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSTOCRBack",
    },
  ],
},
GS1: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS1.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS2",
    },
  ],
},
GSCANTEEN: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GSCANTEEN.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS2",
    },
  ],
},
GS2: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS2.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS1",
    },
    {
      pitch: -30,
      yaw: 100,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GSCANTEEN",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS4",
    },
  ],
},
GS3: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS3.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS2",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS4",
    },
  ],
},
GS4: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS4.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS3",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS5",
    },
  ],
},
GS5: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS5.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS4",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GS6",
    },
  ],
},
GS6: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS6.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -200,
  hotSpots: [
    {
      pitch: -30,
      yaw: -200,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Forward",
      sceneId: "GS5",
    },
    {
      pitch: -40,
      yaw: -20,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "GSTOCRBack",
    },
  ],
},

GS8: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS8.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -120,
  hotSpots: [
    {
      pitch: -10,
      yaw: -60,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
    {
      pitch: -40,
      yaw: 220,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
  ],
},

GS8Back: {
  type: "equirectangular",
  panorama: "Gen Simeon/1st floor/1GS8.jpg",
  hfov: 400,
  pitch: -10,
  yaw: -120,
  hotSpots: [
    {
      pitch: -10,
      yaw: -60,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
    {
      pitch: -40,
      yaw: 220,
      type: "custom",
      createTooltipFunc: groundHotspot,
      text: "Go Back",
      sceneId: "INSERT GO TO 2GS",
    },
  ],
},

      //REGISTRAR
      reg1: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/1.jpg",
        hfov: 200,
        yaw: -12, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -12,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Backscene5",
          },

          {
            pitch: -10,
            yaw: 25,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -5,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },
          
        ],
      },
      reg1Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/1.jpg",
        hfov: 200,
        yaw: -180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Backscene5",
          },
          {
            pitch: -10,
            yaw: 25,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -5,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },
        ],
      },

      reg1Backscene5: {
        type: "equirectangular",
        panorama: "3 main entrance/3.jpg",
        hfov: 200,
        yaw: -12, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 83,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene7",
          },
          {
            pitch: -30,
            yaw: -100,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "scene4",
          },
          {
            pitch: -35,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Back",
            sceneId: "reg1",
          },
          
        ],
      },
      reg2: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/2.jpg",
        hfov: 200,
        yaw: -12, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -12,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg3",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Back",
          },

          {
            pitch: -10,
            yaw: 30,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 3</b><br><br>\
             BSHM | BSIT | BSED/BSED/BSAIS/BSIA III\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             <b>OTHERS:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Tutorial Request</li>\
                 <li>Dropping/Adding Form</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch: -7,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 4</b><br><br>\
             ALL HIGH SCHOOL | COLLEGE STUDENTS\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certification, Authentication, Verification (C.A.V.)</li>\
                 <li>ESC Scholarship</li>\
                 <li>T.E.S. Scholarship</li>\
                 <li>CHED STUFAP’s Scholarship</li>\
             </ul>\
             <b>Certifications (Scholarship):</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certifications related to Scholarships</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch:-8,
            yaw: 137,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -10,
            yaw: 120,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },

          
        ],
      },
      reg2Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/2.jpg",
        hfov: 200,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg3",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg1Back",
          },
          {
            pitch: -10,
            yaw: 30,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 3</b><br><br>\
             BSHM | BSIT | BSED/BSED/BSAIS/BSIA III\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             <b>OTHERS:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Tutorial Request</li>\
                 <li>Dropping/Adding Form</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch: -7,
            yaw: 10,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 4</b><br><br>\
             ALL HIGH SCHOOL | COLLEGE STUDENTS\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certification, Authentication, Verification (C.A.V.)</li>\
                 <li>ESC Scholarship</li>\
                 <li>T.E.S. Scholarship</li>\
                 <li>CHED STUFAP’s Scholarship</li>\
             </ul>\
             <b>Certifications (Scholarship):</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Certifications related to Scholarships</li>\
             </ul>\
             </div>\
             </div>",
          },
          {
            pitch:-8,
            yaw: 137,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                    <div style='text-align: center; font-size: 12px;'>\
                    <b>REGISTRAR’S OFFICE</b><br>\
                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                    <b>WINDOW 1</b><br><br>\
                    Pre-Elem | Elementary<br>\
                    Junior & Senior High School\
                    </div>\
                    <div style='text-align: justify;'>\
                    <b>Documents & Certifications:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Transcript of Records / Form 137</li>\
                        <li>Certified True Copy (C.T.C.)</li>\
                        <li>Diploma</li>\
                        <li>C.A.V.</li>\
                    </ul>\
                    <b>Certification:</b><br>\
                    <ul style='margin-left: 0; padding-left: 15px;'>\
                        <li>Enrolment/Registration (C.O.R.)</li>\
                        <li>Grades (C.O.G.)</li>\
                        <li>Candidacy for Graduation</li>\
                        <li>Academic Scholar</li>\
                        <li>Ranking</li>\
                        <li>G.W.A.</li>\
                    </ul>\
                    </div>\
                    </div>",
          },
          {
            pitch: -10,
            yaw: 120,
            type: "info",
            text: "<div style='font-size: 10px;'>\
             <div style='text-align: center; font-size: 12px;'>\
             <b>REGISTRAR’S OFFICE</b><br>\
             <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
             <b>WINDOW 2</b><br><br>\
             BSBA | BSIA IV | BSMA\
             </div>\
             <div style='text-align: justify;'>\
             <b>Documents & Certifications:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Transcript of Records (T.O.R.)</li>\
                 <li>Certified True Copy (C.T.C.)</li>\
                 <li>Diploma</li>\
             </ul>\
             <b>Certification:</b><br>\
             <ul style='margin-left: 0; padding-left: 15px;'>\
                 <li>Enrolment/Registration (C.O.R.)</li>\
                 <li>Grades (C.O.G.)</li>\
                 <li>Honorable dismissal</li>\
                 <li>Clearance</li>\
                 <li>G.W.A.</li>\
             </ul>\
             </div>\
             </div>",
          },

        ],
      },
      reg3: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/3.jpg",
        hfov: 200,
        yaw: -17, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: -17,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg4",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg2Back",
          },
          {
            pitch: -14,
            yaw: 35,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                <div style='text-align: center; font-size: 12px;'>\
                <b>FINANCE DEPARTMENT</b><br>\
                <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                <b>WINDOW 5</b><br><br>\
                Examination Permit<br>\
                Other signatory requirements\
                </div>\
                <div style='text-align: justify;'>\
                <b>Documents & Certifications:</b><br>\
                <ul style='margin-left: 0; padding-left: 15px;'>\
                    <li>Examination Permit</li>\
                    <li>Other signatory requirements</li>\
                </ul>\
                </div>\
            </div>",
          },
          {
            pitch: -10,
            yaw: 2,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>FINANCE DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOWS 6 and 7</b><br><br>\
                                    Payment for Tuition Fee and other payments (fabrics for school uniform, P.E. uniform, I.D. and I.D. lace, etc.)<br>\
                                    Other signatory requirements\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Payment for Tuition Fee</li>\
                                        <li>Payment for school uniform, P.E. uniform, I.D. and I.D. lace, etc.</li>\
                                        <li>Other signatory requirements</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
          
        ],
      },
      reg3Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/2.jpg",
        hfov: 200,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg3",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg2Back",
          },
          {
            pitch: -14,
            yaw: 35,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                <div style='text-align: center; font-size: 12px;'>\
                <b>FINANCE DEPARTMENT</b><br>\
                <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                <b>WINDOW 5</b><br><br>\
                Examination Permit<br>\
                Other signatory requirements\
                </div>\
                <div style='text-align: justify;'>\
                <b>Documents & Certifications:</b><br>\
                <ul style='margin-left: 0; padding-left: 15px;'>\
                    <li>Examination Permit</li>\
                    <li>Other signatory requirements</li>\
                </ul>\
                </div>\
            </div>",
          },
          {
            pitch: -10,
            yaw: 2,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>FINANCE DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOWS 6 and 7</b><br><br>\
                                    Payment for Tuition Fee and other payments (fabrics for school uniform, P.E. uniform, I.D. and I.D. lace, etc.)<br>\
                                    Other signatory requirements\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Payment for Tuition Fee</li>\
                                        <li>Payment for school uniform, P.E. uniform, I.D. and I.D. lace, etc.</li>\
                                        <li>Other signatory requirements</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
        ],
      },
      reg4: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/4.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg5",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg3Back",
          },
          {
            pitch: -10,
            yaw: 80,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>FINANCE DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOWS 6 and 7</b><br><br>\
                                    Payment for Tuition Fee and other payments (fabrics for school uniform, P.E. uniform, I.D. and I.D. lace, etc.)<br>\
                                    Other signatory requirements\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Payment for Tuition Fee</li>\
                                        <li>Payment for school uniform, P.E. uniform, I.D. and I.D. lace, etc.</li>\
                                        <li>Other signatory requirements</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
          
        ],
      },
      reg4Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/4.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg5",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg3Back",
          },
        ],
      },
      reg5: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/5.jpg",
        hfov: 200,
        yaw: -10,
        hotSpots: [
          {
            pitch: -30,
            yaw: -10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg6",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg4Back",
          },
        ],
      },
      reg5Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/5.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg6",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg4Back",
          },
        ],
      },
      reg6: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/6.jpg",
        hfov: 200,
        yaw: 3, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 3,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg7",
          },
          {
            pitch: -30,
            yaw: -180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg5Back",
          },
        ],
      },
      
      reg6Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/6.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg7",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg5Back",
          },
          {
            pitch: -15,
            yaw: 150,
            type: "info",
            text: "<div style='font-size: 10px;'>\
                                <div style='text-align: center; font-size: 12px;'>\
                                    <b>ACCOUNTING DEPARTMENT</b><br>\
                                    <hr style='border: 1px solid #000; width: 80%; margin: 5px auto;'>\
                                    <b>WINDOW 10</b><br><br>\
                                    Signatory requirements from the Dean of the College of Information Technology\
                                </div>\
                                <div style='text-align: justify;'>\
                                    <b>Documents & Certifications:</b><br>\
                                    <ul style='margin-left: 0; padding-left: 15px;'>\
                                        <li>Signatory requirements from the Dean of the College of Information Technology</li>\
                                    </ul>\
                                </div>\
                            </div>",
          },
        ],
      },
      reg7: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/7.jpg",
        hfov: 200,
        yaw: 20, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg8",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg6Back",
          },
        ],
      },
      reg7Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/7.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg8",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg6Back",
          },
        ],
      },
      reg8: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/8.jpg",
        hfov: 200,
        yaw: 5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg7Back",
          },
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go To",
            sceneId: "reg9",
          },
        ],
      },
      reg8Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/8.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg9",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg7Back",
          },
        ],
      },
      reg9: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/9.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob1",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },
      reg9Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/9.jpg",
        hfov: 200,
        yaw: 180,
        hotSpots: [
          {
            pitch: -30,
            yaw: 90,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "reg10",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },

      //ROBOTICS
      rob1: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob1.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },
      rob1Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob1.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "reg8Back",
          },
        ],
      },
      rob2: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob2.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "TA3",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob1Back",
          },
        ],
      },
      rob2Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/rob2.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "rob2",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob1Back",
          },
        ],
      },
      TA3: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/TA3.jpg",
        hfov: 200,
        pitch: 0,
        yaw: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "WALA MUNA",
          },
          {
            pitch: 2,
            yaw: 77,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob2Back",
          },
        ],
      },
      // 2ND FLORR TEOFILO A BLDG
      STA: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/TA3.1.jpg",
        hfov: 200,
        yaw: 170, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "STABack",
          },
          {
            pitch: -5,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go to 2nd Floor",
            sceneId: "STA1",
          },
        ],
      },
      STABack: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/1st floor/TA3.jpg",
        hfov: 200,
        pitch: -20,
        yaw: -90, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "WALA MUNA",
          },
          {
            pitch: 2,
            yaw: 77,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "rob2Back",
          },
        ],
      },

      // 2nd FLOOR TEOFILO
      STA1: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/2nd floor/2TA1.jpg",
        hfov: 200,
        yaw: 170, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA2",
          },
        ],
      },
      STA1Back: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/2nd floor/2TA1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "STA",
          },
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA2",
          },
        ],
      },
      STA2: {
        type: "equirectangular",
        panorama: "8teofiloabellobldg1/2nd floor/2TA2.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -40,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "",
          },
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: " right",
          },
          {
            pitch: -30,
            yaw: -190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "STA1Back",
          }
        ],
      },

      //COLLEGE LIBRARY Section
      colLib1: {
        type: "equirectangular",
        panorama: "COLLEGE LIB/col-lib1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "colLib2",
          },
        ],
      },
      colLib2: {
        type: "equirectangular",
        panorama: "COLLEGE LIB/col-lib2.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "EXIT",
            sceneId: "EXIT",
          },
        ],
      },

      //CLINIC
      clinic: {
        type: "equirectangular",
        panorama: "CLINIC/1RO4.jpg",
        hfov: 200,
        yaw: -30, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: -68,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "clinicInside",
          },
        ],
      },
      clinicInside: {
        type: "equirectangular",
        panorama: "CLINIC/1RO4.1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "clinic",
          },
        ],
      },
      //COMFORT ROOM 
      MCR: {
        type: "equirectangular",
        panorama: "CR/2AVR-CR.jpg",
        hfov: 200,
        yaw: -90, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "colLib2",
          },
        ],
      },
      CR: {
        type: "equirectangular",
        panorama: "COLLEGE LIB/col-lib1.jpg",
        hfov: 200,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          
          {
            pitch: -30,
            yaw: 87,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Forward",
            sceneId: "colLib2",
          },
        ],
      },
      /**********************************************code ni Pat**********************/
      scene100: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
        hfov: 110,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene101", // vice president office of hs
          },
          {
            //back
            pitch: -30,
            yaw: 170,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene3", // entrance
          },
        ],
      },
      "scene100.1": {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
        hfov: 110,
        yaw: 180, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene101", // vice president office of hs
          },
          {
            //back
            pitch: -30,
            yaw: 170,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene3", // entrance
          },
        ],
      },
      scene101: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.3.jpg",
        hfov: 110,
        yaw: 0, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -30,
            yaw: 10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene102", // department heads office
          },
          {
            //back
            pitch: -30,
            yaw: 190,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene100.1", // vice president office of h
          },
        ],
      },
      scene100: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
        hfov: 300,
        yaw: 5, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene101", // vice president office of hs
          },
          {
            //back
            pitch: -30,
            yaw: 175,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene3", // entrance
          },
        ],
      },
      scene101: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.2.jpg",
        hfov: 300,
        yaw: 15, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 9,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene102", // tchrs room
          },
          {
            //back
            pitch: -30,
            yaw: 175,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back101", // back to vp room
          },
        ],
      },
      back101: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.1.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene101",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene3", // iback ung scene03 hindi naka direct na harap sa mendezhall
          },
        ],
      },
      scene102: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.3.jpg",
        hfov: 300,
        yaw: 30, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene103", // office of the department heads
          },
          {
            //back
            pitch: -30,
            yaw: 175,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back102", // tchr room
          },
        ],
      },
      back102: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.2.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene103",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back101",
          },
        ],
      },
      scene103: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.4.jpg",
        hfov: 300,
        yaw: 30, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene104", // teachers room2
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back103", // dept head office
          },
        ],
      },
      back103: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.3.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene104",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back102",
          },
        ],
      },
      scene104: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.5.jpg",
        hfov: 300,
        yaw: 30, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene105", // fire exit
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back103", // dept head
          },
        ],
      },
      back104: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.4.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene105",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back103",
          },
        ],
      },
      scene105: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.6.jpg",
        hfov: 300,
        yaw: 30, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene106", // fire exit
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back104", // dept head
          },
        ],
      },
      back105: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.5.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene105",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back104",
          },
        ],
      },
      scene106: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.7.jpg",
        hfov: 300,
        yaw: 5, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene107", // fire exit
          },
          {
            //back
            pitch: -30,
            yaw: 175,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back106", // dept head
          },
        ],
      },
      back106: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.6.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene106",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back105",
          },
        ],
      },
      scene107: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.8.jpg",
        hfov: 300,
        yaw: 5, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene108", // fire exit
          },
          {
            //right side
            pitch: -35,
            yaw: 85,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene200", // hallway
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back107", // dept head
          },
        ],
      },
      back107: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.7.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene107",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back106",
          },
        ],
      },
      scene108: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.9.jpg",
        hfov: 300,
        yaw: 5, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene109", // fire exit
          },
          {
            //back
            pitch: -30,
            yaw: 175,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back108", // dept head
          },
        ],
      },
      back108: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.8.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene108",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back107",
          },
        ],
      },
      scene109: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.10.jpg",
        hfov: 300,
        yaw: 5, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene110", // fire exit
          },
          {
            //back
            pitch: -30,
            yaw: 175,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back109", // dept head
          },
        ],
      },
      back109: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.9.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene109",
          },
          {
            //back
            pitch: -30,
            yaw: 180,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back108",
          },
        ],
      },
      scene110: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.11.jpg",
        hfov: 300,
        yaw: 5, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene111", // fire exit
          },
          {
            //back
            pitch: -30,
            yaw: 175,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back109", // dept head
          },
        ],
      },
      back110: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.11.jpg",
        hfov: 300,
        yaw: 180, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene110",
          },
          {
            //back
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back109",
          },
        ],
      },
      scene111: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/last view of both.jpg",
        hfov: 300,
        yaw: 5, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: 0,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene", // not indicated
          },
          {
            //back
            pitch: -40,
            yaw: 70,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back110",
          },
        ],
      },
      back111: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/1.10.jpg",
        hfov: 300,
        yaw: 190, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -5,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "back110",
          },
          {
            //back
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back110",
          },
        ],
      },
      scene112: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/1.jpg",
        hfov: 300,
        yaw: -20, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -15,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene113", // not indicated
          },
          {
            //back
            pitch: -40,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene3",
          },
        ],
      },
      back112: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/1.jpg",
        hfov: 300,
        yaw: 150, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -30,
            yaw: -15,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene114",
          },
          {
            //back
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "scene3",
          },
        ],
      },
      scene113: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/2.jpg",
        hfov: 300,
        yaw: -20, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -25,
            yaw: -15,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene114", // not indicated
          },
          {
            //back
            pitch: -40,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back113",
          },
        ],
      },
      back113: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/2.jpg",
        hfov: 300,
        yaw: 150, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            //left
            pitch: -30,
            yaw: -15,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene114",
          },
          {
            //back
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back112",
          },
        ],
      },
      scene114: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/3.jpg",
        hfov: 300,
        yaw: -20, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -50,
            yaw: -55,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene202", // not indicated side ng kay fiona
          },
          {
            //right
            pitch: -55,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene115",
          },
          {
            //back
            pitch: -40,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back113",
          },
        ],
      },
      back114: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/3.jpg",
        hfov: 300,
        yaw: 150, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            pitch: -55,
            yaw: -55,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene114",
          },
          {
            //right
            pitch: -55,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene115",
          },
          {
            //back
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back113",
          },
        ],
      },
      scene115: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/3.1.1.jpg",
        hfov: 300,
        yaw: 120, // Adjust this value (default is 0)
        pitch: -15,
        hotSpots: [
          {
            pitch: -140,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene116", // not indicated
          },
          {
            //back
            pitch: -40,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back115",
          },
        ],
      },
      back115: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/3.jpg",
        hfov: 300,
        yaw: 150, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            //left
            pitch: -50,
            yaw: -55,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene",
          },
          {
            //back
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back112",
          },
        ],
      },
      scene116: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/3.1.2.jpg",
        hfov: 300,
        yaw: -20, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            //right
            pitch: -55,
            yaw: 25,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene115",
          },
          {
            //back
            pitch: -40,
            yaw: 160,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back113",
          },
        ],
      },
      back116: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/first floor/3.1.1.jpg",
        hfov: 300,
        yaw: 150, // Adjust this value (default is 0)
        pitch: -8,
        hotSpots: [
          {
            //left
            pitch: -50,
            yaw: -55,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene",
          },
          {
            //back
            pitch: -30,
            yaw: 150,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Go Back",
            sceneId: "back112",
          },
        ],
      },

      /********************************* KAY FIONA *************************************************************** */
      // Gate malapit sa OSA
      // Gate malapit sa OSA
      scene200: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.1.jpg",
        hfov: 110,
        yaw: -180, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -30,
            yaw: +10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene201",
          },
        ],
      }, // back not indicated, sa second gate
      scene201: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.jpg",
        hfov: 110,
        yaw: -100, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -30,
            yaw: 10,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene200",
          },
          {
            pitch: -35, // U/D
            yaw: 85, // -L/+R
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene3", // ung my tricycle
          },
        ],
      }, // left side of board all the way to the new hall
      scene202: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.1.jpg",
        hfov: 200,
        yaw: 300, // Adjusted to match the hallway direction
        pitch: -5, // Slight downward tilt to match the perspective
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene203",
          },
        ],
      },
      scene203: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.2.jpg",
        hfov: 200,
        yaw: 300, // Adjusted to match the hallway direction
        pitch: -5, // Slight downward tilt to match the perspective
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene204",
          },
        ],
      },

      scene204: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.3.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene205",
          },
        ],
      },
      scene205: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.4.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene206",
          },
        ],
      },
      scene206: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.5.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene207",
          },
        ],
      },
      scene207: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.7.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene208",
          },
        ],
      },
      scene208: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.8.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene209",
          },
        ],
      },
      scene209: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.9.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene210",
          },
        ],
      },
      scene210: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.10.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene211",
          },
        ],
      },
      scene211: {
        // may hotspot paakyat sa 2nd floor ng odulio
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.11.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene212",
          },
          {
            //other hotspot
            pitch: -60,
            yaw: 350,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene220",
          },
        ],
      },
      scene212: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.12.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene213",
          },
        ],
      },
      scene213: {
        // hotspot papuntang 1st floor ng odulio  connected sa scene 222
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.13.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -40,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene214",
          },
          {
            //other hotspot
            pitch: -40,
            yaw: 335,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene222",
          },
        ],
      },
      scene214: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.1.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 295,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene215",
          },
        ],
      },
      scene215: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.2.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 295,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene216",
          },
        ],
      },
      scene216: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.3.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 200,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene217",
          },
        ],
      },
      scene217: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/3.2.14.4.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 280,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene218",
          },
        ],
      },
      scene218: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/left and center option/1st floor/3.2.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 280,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene219",
          },
        ],
      },
      scene219: {
        type: "equirectangular",
        panorama:
          "5pazmendezhall1/left and center option/1st floor/last view of both 1.1 and 2.1.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -35,
            yaw: 280,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene220",
          },
        ],
      },
      scene220: {
        // 2nd floor Ricardo Odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/2.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -50,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene211",
          },
          {
            //other hotspot
            pitch: -30,
            yaw: 360,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene221",
          },
        ],
      },
      scene221: {
        // 1st floor Ricardo Odulio  connect sa 213
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/1.0.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -50,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene222",
          },
          {
            //other hotspot
            pitch: -30,
            yaw: 360,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene211",
          },
        ],
      },
      scene222: {
        // 1st floor Ricardo Odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/1.jpg",
        hfov: 200,
        yaw: 300, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -50,
            yaw: 300,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene212",
          },
          {
            //other hotspot
            pitch: -30,
            yaw: 360,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene223",
          },
        ],
      },
      scene223: {
        //1st floor ng ricardo odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/4.jpg",
        hfov: 200,
        pitch: 0,
        yaw: 110, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -25,
            yaw: -270,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene224",
          },
        ],
      },
      scene224: {
        //1st floor ng ricardo odulio
        type: "equirectangular",
        panorama:
          "Ricardo Odulio Bldg-20250401T035416Z-001/Ricardo Odulio Bldg/Edited/1st floor/5.jpg",
        hfov: 0,
        pitch: 0,
        yaw: 110, // Adjust this value (default is 0)  position ng view camera
        hotSpots: [
          {
            pitch: -25,
            yaw: -275,
            type: "custom",
            createTooltipFunc: groundHotspot,
            text: "Move Forward",
            sceneId: "scene225",
          },
        ],
      },
      //   COMPUTER LAB
      comp1: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/second floor/1.1.2.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -5, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            // text: "Go Forward",
            // sceneId: "scene2",
          },
        ],
      },
      //   GYMNASIUM
      gym1: {
        type: "equirectangular",
        panorama: "gymnasium/5 - back.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -5, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            // text: "Go Forward",
            // sceneId: "scene2",
          },
        ],
      },
      //   LIBRARY
      lib1: {
        type: "equirectangular",
        panorama: "5pazmendezhall1/right option/third floor/3.jpg",
        hfov: 300,
        yaw: -5,
        pitch: -5, // Adjust this value (default is 0)
        hotSpots: [
          {
            pitch: -20, //pitch yung alignment ng hotspot vertical
            yaw: -5, //yaw alignment ng hotspot horizontal
            type: "custom",
            createTooltipFunc: groundHotspot,
            // text: "Go Forward",
            // sceneId: "scene2",
          },
        ],
      },
    },
  });

  // Attach event listeners to all links
  document.querySelectorAll("#locationDropdown a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Stop default link behavior

      // If link has `data-scene`, switch panorama scene
      if (this.hasAttribute("data-scene")) {
        const sceneId = this.getAttribute("data-scene");
        viewer.loadScene(sceneId); // Switch to the specified scene (e.g., reg1)
      }
      // For other links (Building 1, Library, etc.), navigate normally
      else {
        window.location.href = this.getAttribute("href");
      }
    });
  });
});
