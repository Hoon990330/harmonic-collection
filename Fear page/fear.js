document.addEventListener("DOMContentLoaded", function () {
    const clickableBox = document.querySelector(".clickable-box");

    clickableBox.addEventListener("click", function () {
        // 놀라운 텍스트 요소 생성
        const surpriseText = document.createElement("div");
        surpriseText.className = "surprise-text";
        surpriseText.textContent = "Aaaaah!!!";

        // body에 텍스트 추가
        document.body.appendChild(surpriseText);

        // 텍스트가 1.5초 후에 제거되도록 설정
        setTimeout(() => {
            surpriseText.remove(); 
        }, 1500); // 애니메이션 지속 시간에 맞춤
    });
}); 