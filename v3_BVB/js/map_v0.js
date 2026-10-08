// js/map.js

let currentBlock = "bvb";
let currentFloor = "bvb-floor-3"; // Our default floor
let selectedRoomId = null;

// 1. Define the default state as a constant
const DEFAULT_ROOM_DATA = {
  "bvb": {
    "bvb-floor-2": {
      
    "room-272-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-271-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-270-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-269-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-268-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-267-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-266-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-265-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-264-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-263-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-201-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-202-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-203-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-204-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-205-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-206-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-207-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-208-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-209-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-210-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-251-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-250-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-249-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-248-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-247-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-246-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-245-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-244-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-243-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-242-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-241-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-240-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-239-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-238-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-237-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-222-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-223-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-224-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-225-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-226-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-227-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-228-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-229-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-230-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-231-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-232-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-233-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-234-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-235-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-236-c2": {
      "capacity": 2,
      "occupants": []
    },
    "room-262-c1": {
      "capacity": 1,
      "occupants": []
    },
    "room-261-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-260-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-259-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-258-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-257-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-256-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-255-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-254-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-253-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-252-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-221-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-220-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-219-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-218-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-217-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-216-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-215-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-214-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-213-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-212-c3": {
      "capacity": 3,
      "occupants": []
    },
    "room-211-c3": {
      "capacity": 3,
      "occupants": []
    }

  },
    "bvb-floor-3": {
      "room-372-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-371-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-370-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-369-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-368-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-367-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-366-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-365-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-364-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-363-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-301-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-302-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-303-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-304-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-305-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-306-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-307-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-308-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-309-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-310-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-351-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-350-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-349-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-348-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-347-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-346-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-345-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-344-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-343-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-342-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-341-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-340-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-339-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-338-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-337-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-322-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-323-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-324-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-325-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-326-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-327-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-328-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-329-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-330-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-331-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-332-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-333-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-334-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-335-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-336-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-373-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-374-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-375-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-376-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-377-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-378-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-379-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-380-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-381-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-382-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-383-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-384-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-385-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-386-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-387-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-399-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-398-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-397-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-396-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-395-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-394-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-393-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-392-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-391-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-390-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-389-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-388-c2": {
        "capacity": 2,
        "occupants": []
      },
      "room-362-c1": {
        "capacity": 1,
        "occupants": []
      },
      "room-361-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-360-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-359-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-358-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-357-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-356-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-355-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-354-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-353-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-352-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-321-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-320-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-319-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-318-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-317-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-316-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-315-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-314-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-313-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-312-c3": {
        "capacity": 3,
        "occupants": []
      },
      "room-311-c3": {
        "capacity": 3,
        "occupants": []
      }

    }
  }
};

// --- 3. LOAD THE DATABASE ---
let allHostelData = loadData();


// =================================================================
// ==  CORE DATA & MEMORY FUNCTIONS
// =================================================================

/**
 * Loads data from localStorage or uses the default data.
 */
function loadData() {
    const savedData = localStorage.getItem('allHostelData');
    if (savedData) {
        console.log("Loading saved data from localStorage...");
        return JSON.parse(savedData);
    } else {
        console.log("No saved data found, using default data.");
        // structuredClone makes a deep copy so we don't modify the original
        return structuredClone(DEFAULT_ROOM_DATA);
    }
}

/**
 * Saves the entire database to localStorage.
 */
function saveData() {
    localStorage.setItem('allHostelData', JSON.stringify(allHostelData)); // Fix: Was saving 'roomDatabase'
    console.log("Data saved to localStorage.");
}


// =================================================================
// ==  APPLICATION STARTUP & INITIALIZATION
// =================================================================

// 1. Starting gun for the entire application.
document.addEventListener('DOMContentLoaded', initializeApplication);

/**
 * Runs ONCE on page load. Sets up all "permanent" event listeners
 * for the page shell (modal, floor buttons, reset button).
 * This function is "paranoid" and safe, it will not crash if an element is missing.
 */
function initializeApplication() {
    // A helper function to safely add listeners
    function safeAddListener(selector, event, handler) {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener(event, handler);
        } else {
            console.warn(`Could not find element to attach listener: ${selector}`);
        }
    }

    // --- 1. Find Navigation Buttons ---
    const floorButtons = document.querySelectorAll('.floor-btn');
    floorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const floorName = button.dataset.floor; 
            if (floorName === currentFloor) return; 
            
            currentFloor = floorName;
            
            floorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            fetchHostelMap(); 
        });
    });

    // --- 2. Modal & Control Button Listeners (Permanent & TRULY SAFE) ---
    
    // Modal Listeners
    safeAddListener('#allocation-modal .modal-close-button', 'click', closeAllocationModal);
    safeAddListener('#allocation-modal .modal-cancel-btn', 'click', closeAllocationModal);
    safeAddListener('#allocation-form', 'submit', handleFormSubmit);

    // Control Button Listeners
    safeAddListener('#reset-button', 'click', () => {
        if (confirm("Are you sure you want to reset ALL room allocations?")) {
            localStorage.removeItem('allHostelData');
            location.reload(); 
        }
    });
    safeAddListener('#download-csv-btn', 'click', exportToCSV);
    safeAddListener('#backup-data-btn', 'click', backupHostelData);

    // Info Panel Listener (for "Remove Student" buttons)
    const infoPanel = document.getElementById('room-info-panel');
    if (infoPanel) {
        infoPanel.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-student-btn')) {
                const roomId = e.target.dataset.roomId;
                const studentId = e.target.dataset.studentId;
                if (confirm(`Are you sure you want to remove student (ID: ${studentId}) from this room?`)) {
                    removeStudent(roomId, studentId);
                }
            }
        });
    }

    // Window Listener (for closing modal on outside click)
    window.addEventListener('click', (e) => {
        if (e.target == document.getElementById('allocation-modal')) {
            closeAllocationModal();
        }
    });

    // --- 3. Load the initial map ---
    // This will now run because nothing above it will crash
    fetchHostelMap();
}

/**
 * Fetches the correct SVG file based on global state and injects it.
 */
function fetchHostelMap() {
    const mapContainer = document.querySelector('.map-container');
    const filename = `assets/${currentFloor}.svg`; 
    
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} for ${filename}`);
            }
            return response.text();
        })
        .then(svgData => {
            mapContainer.innerHTML = svgData;
            initializeMapLogic(); // "Wake up" the new map
        })
        .catch(error => {
            console.error('Error fetching hostel map:', error);
            mapContainer.innerHTML = `<p style="color: red;"><strong>Error:</strong> Could not load map: ${filename}</p>`;
        });
}

/**
 * Runs EVERY time a new SVG is loaded.
 * Sets up all listeners for the rooms *inside* the SVG.
 */
function initializeMapLogic() {
    const allRooms = document.querySelectorAll('#hostel-map-svg .room');
    
    // 1. Color all rooms on page load
    allRooms.forEach(room => {
        const parentGroup = room.closest('g');
        if (parentGroup && allHostelData[currentBlock][currentFloor] && allHostelData[currentBlock][currentFloor][parentGroup.id]) {
            updateRoomVisuals(parentGroup.id);
        }
    });
    clearInfoPanel(); 

    // 2. Add Event Listeners to each room
    allRooms.forEach(room => {
        const parentGroup = room.closest('g');
        if (parentGroup && allHostelData[currentBlock][currentFloor] && allHostelData[currentBlock][currentFloor][parentGroup.id]) {
            const roomId = parentGroup.id; 
            room.addEventListener('click', () => handleRoomClick(roomId));
            room.addEventListener('mouseover', () => showRoomInfo(roomId));
            room.addEventListener('mouseout', () => {
                if (selectedRoomId === null) {
                    clearInfoPanel();
                } else {
                    showRoomInfo(selectedRoomId);
                }
            });
        }
    });
}


// =================================================================
// ==  CORE LOGIC & HELPER FUNCTIONS
// =================================================================

/**
 * Gets the dynamic status of a room (available, partially-booked, booked).
 */
function getRoomStatus(roomData) {
    if (!roomData) return "error";
    if (roomData.occupants.length === 0) return "available";
    if (roomData.occupants.length < roomData.capacity) return "partially-booked";
    return "booked";
}

/**
 * Updates the visual state (CSS class) of an SVG room.
 * This version correctly finds the <rect> inside the <g> tag.
 */
function updateRoomVisuals(roomId) {
    const groupElement = document.getElementById(roomId);
    if (!groupElement) {
        console.warn(`Could not find group element for ID: ${roomId}`);
        return; 
    }
    const roomElement = groupElement.querySelector('.room');
    if (!roomElement) {
        console.warn(`Could not find a .room <rect> inside ${roomId}`);
        return;
    }

    const roomData = allHostelData[currentBlock][currentFloor][roomId];
    if (!roomData) {
        console.warn(`No data in database for ${roomId}`);
        return;
    }
    const newStatus = getRoomStatus(roomData);

    roomElement.classList.remove("available", "partially-booked", "booked");
    roomElement.classList.add(newStatus); 
}

/**
 * Handles what happens when a room is clicked: "pins" it and opens modal if needed.
 */
function handleRoomClick(roomId) {
    // If clicking the *same room* that's already pinned...
    if (selectedRoomId === roomId) {
        selectedRoomId = null; // ...deselect it.
        clearInfoPanel();      // ...and clear the panel.
        return; 
    }
    
    // This is a new room. Pin it.
    selectedRoomId = roomId;
    showRoomInfo(roomId); // Show its info immediately.
    
    // --- Allocation Logic ---
    const roomData = allHostelData[currentBlock][currentFloor][roomId];
    const currentStatus = getRoomStatus(roomData);

    if (currentStatus === "booked") {
        if (confirm(`Room ${roomId.replace('room-', '')} is full. \nDo you want to free up all spots in this room?`)) {
            deallocateRoom(roomId);
        }
    } else {
        openAllocationModal(roomId);
    }
}

/**
 * Opens the pop-up modal to allocate a specific room.
 */
function openAllocationModal(roomId) {
    const roomData = allHostelData[currentBlock][currentFloor][roomId];
    const spotsLeft = roomData.capacity - roomData.occupants.length;

    const modal = document.getElementById('allocation-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalRoomIdInput = document.getElementById('modal-room-id');

    if (modalRoomIdInput) modalRoomIdInput.value = roomId;
    if (modalTitle) modalTitle.textContent = `Allocate Room ${roomId.replace('room-', '')} (${spotsLeft} of ${roomData.capacity} spots open)`;
    if (modal) modal.classList.add('show');
}

/**
 * Closes the pop-up modal and resets the form.
 * This does NOT clear the pinned selection.
 */
function closeAllocationModal() {
    const modal = document.getElementById('allocation-modal');
    const allocationForm = document.getElementById('allocation-form');
    
    if (modal) {
        modal.classList.remove('show');
    }
    if (allocationForm) {
        allocationForm.reset(); 
    }
}

/**
 * Handles the "Allocate" button click inside the modal.
 */
function handleFormSubmit(e) {
    e.preventDefault(); 
    
    const modalRoomIdInput = document.getElementById('modal-room-id');
    const studentNameInput = document.getElementById('student-name');
    const studentIdInput = document.getElementById('student-id');

    const roomId = modalRoomIdInput.value;
    const studentName = studentNameInput.value.trim();
    const studentId = studentIdInput.value.trim();
    
    if (studentName === "" || studentId === "") {
        alert("Please fill out both Student Name and Student ID.");
        return;
    }

    const roomData = allHostelData[currentBlock][currentFloor][roomId];
    
    if (roomData.occupants.length < roomData.capacity) {
        // --- SUCCESS ---
        roomData.occupants.push({ name: studentName, id: studentId });
        saveData(); 
        updateRoomVisuals(roomId);
        showRoomInfo(roomId); 
        closeAllocationModal(); 
        
        selectedRoomId = null; // Un-pin after successful allocation
        clearInfoPanel();      
        
    } else {
        // --- FAILURE ---
        alert("Error: This room is already full.");
        updateRoomVisuals(roomId); // Still update visuals to show it's red
    }
}

/**
 * Frees up ALL spots in a booked room.
 */
function deallocateRoom(roomId) {
    allHostelData[currentBlock][currentFloor][roomId].occupants = [];
    saveData();
    
    selectedRoomId = null; // Un-pin
    updateRoomVisuals(roomId);
    clearInfoPanel();      
}

/**
 * Removes a single student from a room.
 */
function removeStudent(roomId, studentId) {
    const roomData = allHostelData[currentBlock][currentFloor][roomId];
    if (!roomData) return;

    // Find the student by their ID and remove them
    roomData.occupants = roomData.occupants.filter(student => {
        return student.id !== studentId;
    });

    saveData();
    updateRoomVisuals(roomId);
    showRoomInfo(roomId); // Refresh the info panel
}

/**
 * Displays the details of a specific room in the info panel.
 * Includes "Remove" buttons for each student.
 */
function showRoomInfo(roomId) {
    const infoPanel = document.getElementById('room-info-panel');
    const roomData = allHostelData[currentBlock][currentFloor][roomId];
    if (!roomData) {
        infoPanel.innerHTML = `<h3>Error</h3><p>No data found for room ${roomId}.</p>`;
        return;
    }

    const status = getRoomStatus(roomData);
    let occupantList = 'N/A';

    if (roomData.occupants.length > 0) {
        // Build the list of occupants, with a button for each one
        occupantList = `<ul>${roomData.occupants.map(occupant => {
            return `
                <li>
                    ${occupant.name} (ID: ${occupant.id})
                    <button 
                        class="remove-student-btn" 
                        data-room-id="${roomId}" 
                        data-student-id="${occupant.id}"
                    >&times;</button>
                </li>
            `;
        }).join('')}</ul>`;
    }

    infoPanel.innerHTML = `
        <h3>Room ${roomId.replace('room-', '')}</h3>
        <p><strong>Status:</strong> <span class="status-${status}">${status.replace('-', ' ').toUpperCase()}</span></p>
        <p><strong>Occupancy:</strong> ${roomData.occupants.length} / ${roomData.capacity}</p>
        <p><strong>Occupants:</strong></p>
        ${occupantList}
    `;
}

/**
 * Resets the info panel to its default message.
 */
function clearInfoPanel() {
    const infoPanel = document.getElementById('room-info-panel');
    if (infoPanel) {
        infoPanel.innerHTML = `
            <h3>Room Details</h3>
            <p>Hover over a room to see its details.</p>
        `;
    }
}


// =================================================================
// ==  REPORTING & BACKUP FUNCTIONS
// =================================================================

/**
 * Exports the entire hostel database to a CSV file.
 */
function exportToCSV() {
    console.log("Generating CSV...");
    let csvString = "Block,Floor,Room ID,Room Number,Capacity,Status,Occupant Name,Occupant ID\n";

    for (const blockName in allHostelData) {
        const block = allHostelData[blockName];
        for (const floorName in block) {
            const floor = block[floorName];
            for (const roomId in floor) {
                const room = floor[roomId];
                const status = getRoomStatus(room);
                const roomNumber = roomId.split('-')[1] || roomId;

                if (room.occupants.length === 0) {
                    csvString += `${blockName},${floorName},${roomId},${roomNumber},${room.capacity},${status},N/A,N/A\n`;
                } else {
                    room.occupants.forEach(student => {
                        const safeName = `"${student.name.replace(/"/g, '""')}"`;
                        csvString += `${blockName},${floorName},${roomId},${roomNumber},${room.capacity},${status},${safeName},${student.id}\n`;
                    });
                }
            }
        }
    }

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'hostel_allocation_report.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

/**
 * Saves a full JSON backup of the entire hostel database.
 */
function backupHostelData() {
    console.log("Generating JSON backup...");
    const dataString = JSON.stringify(allHostelData, null, 2);
    const blob = new Blob([dataString], { type: 'application/json' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        
        const date = new Date();
        const timestamp = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        link.setAttribute('download', `hostel_backup_${timestamp}.json`);
        
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}