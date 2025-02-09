let currentRoom = 1;

document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("game-rooms").style.display = "block";
    showRoom(currentRoom);
});

function showRoom(roomNumber) {
    // إخفاء جميع الغرف
    let rooms = document.querySelectorAll('.room');
    rooms.forEach(room => room.style.display = 'none');

    // عرض الغرفة المطلوبة
    let room = document.getElementById('room-' + roomNumber);
    if (room) {
        room.style.display = 'block';
    }
}

function goToNextRoom(answer) {
    if (answer === 1) {
        alert("إجابة صحيحة! الانتقال إلى الغرفة التالية.");
        currentRoom++;
        showRoom(currentRoom);
    } else {
        alert("إجابة خاطئة! حاول مجددًا.");
    }
}
