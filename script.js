// 1. /images 폴더에 있는 모든 이미지 파일 이름을 배열에 정의합니다.
// 이 배열의 이름들은 GitHub images 폴더의 실제 파일 이름과 대소문자까지 일치해야 합니다.
const imageFiles = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
];

// 2. 랜덤 인덱스를 생성하는 함수
function getRandomIndex(max) {
    // Math.random()은 0 (포함)부터 1 (미포함) 사이의 숫자를 반환합니다.
    // Math.floor를 사용하여 정수 인덱스(0, 1, 2, ...)를 얻습니다.
    return Math.floor(Math.random() * max);
}

// 3. 랜덤 이미지를 표시하는 메인 함수
function displayRandomImage() {
    // 이미지 파일 배열의 길이
    const maxIndex = imageFiles.length;

    // 0부터 (배열 길이 - 1) 사이의 랜덤 인덱스 선택
    const randomIndex = getRandomIndex(maxIndex);

    // 선택된 랜덤 이미지 파일 이름
    const randomFileName = imageFiles[randomIndex];

    // HTML의 <img id="random-image"> 태그 요소를 가져오기
    const imageElement = document.getElementById('random-image');

    // 이미지 소스(src)를 랜덤 파일 경로로 설정
    // 경로는 'images/' 폴더 아래에 있는 파일입니다. (폴더 이름은 모두 소문자 가정)
    imageElement.src = 'images/' + randomFileName;
}

// 4. 웹 페이지가 완전히 로드되면 함수 실행
window.onload = displayRandomImage;