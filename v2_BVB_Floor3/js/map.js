// js/map.js

// --- NEW ---
// 1. Define the default state as a constant
const DEFAULT_ROOM_DATA = {
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
};

// --- MODIFIED ---
// 2. Make roomDatabase a 'let' and load its data
let roomDatabase = loadData();

// --- NEW ---
// 3. Function to load data from localStorage
function loadData() {
    const savedData = localStorage.getItem('hostelData');
    if (savedData) {
        console.log("Loading saved data from localStorage...");
        return JSON.parse(savedData);
    } else {
        console.log("No saved data found, using default data.");
        return DEFAULT_ROOM_DATA;
    }
}

// --- NEW ---
// 4. Function to save data to localStorage
function saveData() {
    localStorage.setItem('hostelData', JSON.stringify(roomDatabase));
    console.log("Data saved to localStorage.");
}

// 5. Wait for the basic HTML page to load
document.addEventListener('DOMContentLoaded', () => {
    fetchHostelMap();
});

/**
 * Fetches the SVG file and injects it into the page.
 */
function fetchHostelMap() {
    const mapContainer = document.querySelector('.map-container');
    
    fetch('assets/hostel-map.svg')
        .then(response => response.ok ? response.text() : Promise.reject(response.status))
        .then(svgData => {
            mapContainer.innerHTML = svgData;
            initializeMapLogic(); // Run setup *after* SVG is loaded
        })
        .catch(error => {
            console.error('Error fetching hostel map:', error);
            mapContainer.innerHTML = `<p style="color: red;"><strong>Error:</strong> Could not load hostel map. (Check path and make sure you're on a server)</p>`;
            document.getElementById('room-info-panel').innerHTML = `<p>Map failed to load.</p>`
        });
}

/**
 * This function contains all the logic that runs *after* the SVG is loaded.
 */
function initializeMapLogic() {
    // Get all interactive elements
    const allRooms = document.querySelectorAll('#hostel-map-svg .room'); // This finds all <rect> tags
    const infoPanel = document.getElementById('room-info-panel');
    const modal = document.getElementById('allocation-modal');
    const modalCloseButton = document.querySelector('.modal-close-button');
    const modalCancelButton = document.querySelector('.modal-cancel-btn'); // <-- Your custom class, KEPT
    const allocationForm = document.getElementById('allocation-form');
    
    // Add listener for the reset button
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
        if (confirm("Are you sure you want to reset ALL room allocations? This will revert to the default state.")) {
            localStorage.removeItem('hostelData');
            location.reload(); 
        }
    });

    // Initial Setup: Color all rooms on page load
    allRooms.forEach(room => {
        // Find the parent <g> tag to get its ID
        const parentGroup = room.closest('g'); // <-- This is the CRITICAL FIX
        if (parentGroup && roomDatabase[parentGroup.id]) {
            updateRoomVisuals(parentGroup.id);
        }
    });
    clearInfoPanel(); 

    // Add Event Listeners to each room
    allRooms.forEach(room => {
        const parentGroup = room.closest('g'); // <-- This is the CRITICAL FIX
        // Only add listeners if the room is in our database
        if (parentGroup && roomDatabase[parentGroup.id]) {
            const roomId = parentGroup.id; // This is the ID, e.g., "room-301-c3"
            
            // Add listeners to the <rect> tag, but pass the parent's ID
            room.addEventListener('click', () => handleRoomClick(roomId));
            room.addEventListener('mouseover', () => showRoomInfo(roomId));
            room.addEventListener('mouseout', () => clearInfoPanel());
        }
    });
    
    // Modal Event Listeners
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
// == HELPER FUNCTIONS (Only handleFormSubmit and deallocateRoom are changed)
// =================================================================

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
    // First, get the group <g> tag using its ID
    const groupElement = document.getElementById(roomId);
    if (!groupElement) {
        console.warn(`Could not find group element for ID: ${roomId}`);
        return; 
    }
    
    // NOW, find the <rect class="room"> *inside* that group
    const roomElement = groupElement.querySelector('.room');
    if (!roomElement) {
        console.warn(`Could not find a .room <rect> inside ${roomId}`);
        return;
    }

    const roomData = roomDatabase[roomId];
    const newStatus = getRoomStatus(roomData);

    // Add/remove classes on the <rect> element, not the <g>
    roomElement.classList.remove("available", "partially-booked", "booked");
    roomElement.classList.add(newStatus); 
}

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
        
        // --- MODIFIED: Save data on change ---
        saveData();
    } else {
        alert("Error: This room is already full.");
    }

    updateRoomVisuals(roomId);
    closeAllocationModal();
    showRoomInfo(roomId);
}

/**
 * Frees up ALL spots in a booked room.
 */
function deallocateRoom(roomId) {
    roomDatabase[roomId].occupants = []; 
    
    // --- MODIFIED: Save data on change ---
    saveData();
    
    updateRoomVisuals(roomId);
    showRoomInfo(roomId);
}


/**
 * Displays the details of a specific room in the info panel.
 */
function showRoomInfo(roomId) {
    const infoPanel = document.getElementById('room-info-panel');
    const roomData = roomDatabase[roomId];
    if (!roomData) {
        infoPanel.innerHTML = `<h3>Error</h3><p>No data found for room ${roomId}.</Movablep>`;
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