// js/map.js

// --- 1. Define the default state as a constant ---
// This is the database for the 6-room map
const DEFAULT_ROOM_DATA = {
    "room-101": {
        capacity: 2,
        occupants: [] 
    },
    "room-102": {
        capacity: 2,
        occupants: [
            { name: "Alex Johnson", id: "S123" }
            // This room is PARTIALLY-BOOKED
        ]
    },
    "room-103": {
        capacity: 3,
        occupants: []
    },
    "room-104": {
        capacity: 2,
        occupants: [
            { name: "Priya Sharma", id: "S125" },
            { name: "Anil Kumar", id: "S126" }
            // This room is BOOKED (full)
        ]
    },
    "room-105": {
        capacity: 3,
        occupants: []
    },
    "room-106": {
        capacity: 2,
        occupants: []
    }
};

// --- 2. Make roomDatabase a 'let' and load its data ---
let roomDatabase = loadData();

// --- 3. Function to load data from localStorage ---
function loadData() {
    const savedData = localStorage.getItem('hostelData');
    if (savedData) {
        console.log("Loading saved data from localStorage...");
        return JSON.parse(savedData);
    } else {
        console.log("No saved data found, using default data.");
        // Use structuredClone to prevent the default data from being modified
        return structuredClone(DEFAULT_ROOM_DATA);
    }
}

// --- 4. Function to save data to localStorage ---
function saveData() {
    localStorage.setItem('hostelData', JSON.stringify(roomDatabase));
    console.log("Data saved to localStorage.");
}

// 5. Wait for the basic HTML page to load
document.addEventListener('DOMContentLoaded', () => {
    // 6. Start the process to fetch and load the SVG
    fetchHostelMap();
});

/**
 * Fetches the SVG file and injects it into the page.
 */
function fetchHostelMap() {
    const mapContainer = document.querySelector('.map-container');
    
    // This assumes your 6-room SVG is named 'hostel-map-v1.svg'
    // Change this path to match your file!
    fetch('assets/hostel-map.svg') // <-- MAKE SURE THIS PATH IS CORRECT
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(svgData => {
            mapContainer.innerHTML = svgData;
            // 7. NOW that the SVG is in the DOM, initialize all our JS logic
            initializeMapLogic();
        })
        .catch(error => {
            console.error('Error fetching hostel map:', error);
            mapContainer.innerHTML = `<p style="color: red;"><strong>Error:</strong> Could not load hostel map.</p>`;
            document.getElementById('room-info-panel').innerHTML = `<p>Map failed to load.</p>`
        });
}

/**
 * This function contains all the logic that runs *after* the SVG is loaded.
 * This version assumes the ID is DIRECTLY on the .room element.
 */
function initializeMapLogic() {
    // Get all interactive elements
    const allRooms = document.querySelectorAll('#hostel-map-svg .room');
    const infoPanel = document.getElementById('room-info-panel');
    const modal = document.getElementById('allocation-modal');
    const modalCloseButton = document.querySelector('.modal-close-button');
    const modalCancelButton = document.querySelector('.modal-cancel-btn'); // <-- Your custom class
    const allocationForm = document.getElementById('allocation-form');
    
    // --- Add listener for the reset button ---
    const resetButton = document.getElementById('reset-button');
    if(resetButton) { // Check if reset button exists
        resetButton.addEventListener('click', () => {
            if (confirm("Are you sure you want to reset ALL room allocations? This will revert to the default state.")) {
                localStorage.removeItem('hostelData');
                location.reload(); // Easiest way to reset the page
            }
        });
    }

    // --- Initial Setup: Color all rooms on page load ---
    allRooms.forEach(room => {
        const roomId = room.id; // Get ID directly from the <rect>
        if (roomDatabase[roomId]) { // Check if room exists in our DB
            updateRoomVisuals(roomId);
        } else {
            console.warn(`Room ${roomId} found in SVG but not in roomDatabase.`);
        }
    });
    clearInfoPanel(); 

    // --- Add Event Listeners to each room ---
    allRooms.forEach(room => {
        const roomId = room.id;
        // Only add listeners if the room is in our database
        if (roomDatabase[roomId]) {
            room.addEventListener('click', () => handleRoomClick(roomId));
            room.addEventListener('mouseover', () => showRoomInfo(roomId));
            room.addEventListener('mouseout', () => clearInfoPanel());
        }
    });
    
    // --- Modal Event Listeners ---
    modalCloseButton.addEventListener('click', closeAllocationModal);
    modalCancelButton.addEventListener('click', closeAllocationModal);
    allocationForm.addEventListener('submit', handleFormSubmit);
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeAllocationModal();
        }
    });
}


// =================================================================
// == HELPER FUNCTIONS (3-State Logic)
// =================================================================

/**
 * Gets the dynamic status of a room.
 */
function getRoomStatus(roomData) {
    if (!roomData) return "error";
    if (roomData.occupants.length === 0) return "available";
    if (roomData.occupants.length < roomData.capacity) return "partially-booked";
    return "booked";
}

/**
 * Updates the visual state (CSS class) of an SVG room.
 * This version finds the room <rect> directly by its ID.
 */
function updateRoomVisuals(roomId) {
    const roomElement = document.getElementById(roomId); // Find the <rect> by its ID
    if (!roomElement) {
        console.warn(`Could not find element for ID: ${roomId}`);
        return; 
    }
    
    const roomData = roomDatabase[roomId];
    const newStatus = getRoomStatus(roomData);

    // Add/remove classes on the <rect> element
    roomElement.classList.remove("available", "partially-booked", "booked");
    roomElement.classList.add(newStatus); 
}

/**
 * Decides what to do when a room is clicked.
 */
function handleRoomClick(roomId) {
    const roomData = roomDatabase[roomId];
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
    const roomData = roomDatabase[roomId];
    const spotsLeft = roomData.capacity - roomData.occupants.length;

    const modal = document.getElementById('allocation-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalRoomIdInput = document.getElementById('modal-room-id');

    modalRoomIdInput.value = roomId;
    modalTitle.textContent = `Allocate Room ${roomId.replace('room-', '')} (${spotsLeft} of ${roomData.capacity} spots open)`;
    modal.classList.add('show');
}

/**
 * Closes the pop-up modal and resets the form.
 */
function closeAllocationModal() {
    const modal = document.getElementById('allocation-modal');
    const allocationForm = document.getElementById('allocation-form');
    modal.classList.remove('show');
    allocationForm.reset(); 
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

    const roomData = roomDatabase[roomId];
    
    if (roomData.occupants.length < roomData.capacity) {
        roomData.occupants.push({ name: studentName, id: studentId });
        
        // --- Save data on change ---
        saveData();
    } else {
        alert("Error: This room is already full.");
    }

    updateRoomVisuals(roomId);
    closeAllocationModal();
    showRoomInfo(roomId); // Refresh info panel
}

/**
 * Frees up ALL spots in a booked room.
 */
function deallocateRoom(roomId) {
    roomDatabase[roomId].occupants = []; 
    
    // --- Save data on change ---
    saveData();
    
    updateRoomVisuals(roomId);
    showRoomInfo(roomId); // Refresh info panel
}


/**
 * Displays the details of a specific room in the info panel.
 */
function showRoomInfo(roomId) {
    const infoPanel = document.getElementById('room-info-panel');
    const roomData = roomDatabase[roomId];
    if (!roomData) {
        infoPanel.innerHTML = `<h3>Error</h3><p>No data found for room ${roomId}.</p>`;
        return;
    }

    const status = getRoomStatus(roomData);
    let occupantList = 'N/A';

    if (roomData.occupants.length > 0) {
        occupantList = `<ul>${roomData.occupants.map(o => `<li>${o.name} (ID: ${o.id})</li>`).join('')}</ul>`;
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