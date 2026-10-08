// 1. Find all the <rect> tags with class="room"
let roomRects = document.querySelectorAll('.room');
let db = {}; // 2. Create an empty "database" object

// 3. Loop through every single room <rect> it found
roomRects.forEach(rect => { 
    // 4. Find the parent <g> tag (where the ID is)
    let parentGroup = rect.closest('g'); 
    
    // 5. Safety check: did we find a group and is it a room?
    if (parentGroup && parentGroup.id.startsWith('room-')) {
        let fullID = parentGroup.id; // 6. Get the ID, e.g., "room-301-c3"
        let parts = fullID.split('-'); // 7. Split it: ["room", "301", "c3"]
        
        // 8. Get the last part: "c3"
        let capacityString = parts[parts.length - 1]; 
        
        // 9. Turn "c3" into the number 3
        let capacity = parseInt(capacityString.replace('c', ''), 10); 
        
        // 10. Add this room to our database object
        db[fullID] = { capacity: capacity, occupants: [] };
    }
});

// 11. Convert the final object into a clean string...
let output = JSON.stringify(db, null, 2);
// 12. ...and print it to the console so you can copy it.
console.log(output);