let currentRoom = 1;

document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("main-screen").style.display = "none";
    document.getElementById("game-rooms").style.display = "block";
});

function goToNextRoom(answer) {
    if (answer === 1) {
        alert("إجابة صحيحة! الانتقال إلى الغرفة التالية.");
        currentRoom++;
        if (currentRoom === 2) {
            document.getElementById("room-1").innerHTML = "<h2>غرفة 2: اختر الإجابة الصحيحة</h2><p>السؤال 2: ما هو لون البحر؟</p>";
        }
    } else {
        alert("إجابة خاطئة! حاول مجددًا.");
    }
}
