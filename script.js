// 1. /images 폴더에 있는 모든 이미지 파일 이름을 배열에 정의합니다.
// 파일 이름이 대소문자를 구분하는지 정확히 확인해주세요! (특히 GitHub에서는 중요)
const imageFiles = [
    'image1.jpg',
    'image2.png',
    'image3.gif',
    'my_photo_4.jpeg',
    // 여기에 모든 이미지 파일 이름을 추가합니다.
];

// 2. 랜덤 인덱스를 생성하는 함수
function getRandomIndex(max) {
    // Math.random()은 0 (포함)부터 1 (미포함) 사이의 숫자를 반환합니다.
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

    // HTML의 <img> 태그 요소 가져오기
    const imageElement = document.getElementById('random-image');

    // 이미지 소스(src)를 랜덤 파일 경로로 설정
    // 경로는 'images/' 폴더 아래에 있는 파일입니다.
    imageElement.src = 'images/' + randomFileName;
}

// 4. 웹 페이지가 완전히 로드되면 함수 실행
window.onload = displayRandomImage;