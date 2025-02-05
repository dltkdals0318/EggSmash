document.addEventListener("DOMContentLoaded", () => {
    const eggs = document.querySelectorAll(".date img");
    const resetButton = document.querySelector(".button");
    const originalEggs = {};
    const crackSoundPath = "./wav/egg_crack.wav";
    const resetSoundPath = "./wav/reset_bubble.wav";

    eggs.forEach((egg, index) => {
        originalEggs[index] = egg.src;

        egg.addEventListener("click", () => {
            const crackSound = new Audio(crackSoundPath);
            crackSound.play();

            egg.src = "./img/egg_cracked.png";
            egg.dataset.cracked = "true";
            egg.style.width = "4.833rem";
        })
    });

    resetButton.addEventListener("click", () => {
        const resetSound = new Audio(resetSoundPath);
        resetSound.volume = .5;
        resetSound.play();

        eggs.forEach((egg, index) => {
            egg.src = originalEggs[index];
            egg.dataset.cracked = "false";
            egg.style.width = "4.833rem";
        });
    });
});


