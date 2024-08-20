// 레시피 데이터
const recipes = {
    "0000": "티트리 모델링 팩 분말: 4 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 2 티스푼, 나노레시피 D-판테놀 75% 원액: 1.5 티스푼, 프랑스와즈 고분자 히알루론산 원액: 1 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "0001": "티트리 모델링 팩 분말: 4.5 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 2 티스푼, 나노레시피 D-판테놀 75% 원액: 1.5 티스푼, 프랑스와즈 진주 분말: 1 티스푼, 시크릿덤 비타민C 분말 파우더: 1 티스푼",
    "0010": "티트리 모델링 팩 분말: 4.5 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 2 티스푼, 프랑스와즈 고분자 히알루론산 원액: 1.5 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "0011": "티트리 모델링 팩 분말: 5 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 1.5 티스푼, 프랑스와즈 진주 분말: 1.5 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "0100": "티트리 모델링 팩 분말: 4.5 티스푼, 나노레시피 D-판테놀 75% 원액: 2 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 1.5 티스푼, 프랑스와즈 고분자 히알루론산 원액: 1 티스푼, 알로에겔 베라250: 1 티스푼",
    "0101": "티트리 모델링 팩 분말: 5 티스푼, 나노레시피 D-판테놀 75% 원액: 2 티스푼, 프랑스와즈 진주 분말: 1.5 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 1 티스푼, 시크릿덤 비타민C 분말 파우더: 0.5 티스푼",
    "0110": "티트리 모델링 팩 분말: 5 티스푼, 나노레시피 D-판테놀 75% 원액: 2 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "0111": "티트리 모델링 팩 분말: 5.5 티스푼, 나노레시피 D-판테놀 75% 원액: 1.5 티스푼, 프랑스와즈 진주 분말: 1.5 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "1000": "티트리 모델링 팩 분말: 5 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 2 티스푼, 나노레시피 D-판테놀 75% 원액: 1.5 티스푼, 프랑스와즈 고분자 히알루론산 원액: 1 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "1001": "티트리 모델링 팩 분말: 5.5 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 2 티스푼, 프랑스와즈 진주 분말: 1 티스푼, 나노레시피 D-판테놀 75% 원액: 1 티스푼, 시크릿덤 비타민C 분말 파우더: 0.5 티스푼",
    "1010": "티트리 모델링 팩 분말: 5.5 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 2 티스푼, 콜라겐 추출물 (프랑스와즈 고분자): 1.5 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "1011": "티트리 모델링 팩 분말: 6 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 1.5 티스푼, 콜라겐 추출물 (프랑스와즈 고분자): 1 티스푼, 프랑스와즈 진주 분말: 1 티스푼, 시크릿덤 비타민C 분말 파우더: 0.5 티스푼",
    "1100": "티트리 모델링 팩 분말: 5.5 티스푼, 나노레시피 D-판테놀 75% 원액: 2 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 1.5 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "1101": "티트리 모델링 팩 분말: 6 티스푼, 나노레시피 D-판테놀 75% 원액: 1.5 티스푼, 프랑스와즈 진주 분말: 1 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 1 티스푼, 시크릿덤 비타민C 분말 파우더: 0.5 티스푼",
    "1110": "티트리 모델링 팩 분말: 6 티스푼, 나노레시피 D-판테놀 75% 원액: 1.5 티스푼, 프랑스와즈 고분자 히알루론산 원액: 1.5 티스푼, 알로에겔 베라250: 0.5 티스푼",
    "1111": "티트리 모델링 팩 분말: 6.5 티스푼, 나노레시피 D-판테놀 75% 원액: 1 티스푼, 프랑스와즈 진주 분말: 1 티스푼, 콜라겐 추출물 (프랑스와즈 고분자): 1 티스푼, 글로우몬스터 3Kda 히알루론산 원액: 0.5 티스푼"
};

let skinRecords = JSON.parse(localStorage.getItem('skinRecords')) || [];
let finalScores = JSON.parse(localStorage.getItem('finalScores')) || [];

document.querySelectorAll('input[type="range"]').forEach(slider => {
    const valueDisplay = document.getElementById(slider.id + "Value");
    slider.addEventListener('input', function() {
        valueDisplay.innerText = this.value;
    });
    valueDisplay.innerText = slider.value;
});

function recommendRecipe() {
    const moistureBefore = parseInt(document.getElementById("moistureBefore").value);
    const oilBefore = parseInt(document.getElementById("oilBefore").value);
    const elasticityBefore = parseInt(document.getElementById("elasticityBefore").value);
    const fluorescenceBefore = parseInt(document.getElementById("fluorescenceBefore").value);
    const finalScoreBefore = parseInt(document.getElementById("finalScoreBefore").value);

    const moistureAfter = parseInt(document.getElementById("moistureAfter").value);
    const oilAfter = parseInt(document.getElementById("oilAfter").value);
    const elasticityAfter = parseInt(document.getElementById("elasticityAfter").value);
    const fluorescenceAfter = parseInt(document.getElementById("fluorescenceAfter").value);
    const finalScoreAfter = parseInt(document.getElementById("finalScoreAfter").value);

    // 이진 값을 조합하여 키 생성 (예: 0101)
    const binaryKey = `${moistureAfter >= 50 ? 1 : 0}${oilAfter >= 50 ? 1 : 0}${elasticityAfter >= 50 ? 1 : 0}${fluorescenceAfter >= 50 ? 1 : 0}`;
    const recommendedRecipe = recipes[binaryKey];

    // 추천 레시피 결과를 화면에 표시
    document.getElementById('recipeResult').innerText = `추천 레시피: ${recommendedRecipe}`;

    const record = {
        date: new Date().toLocaleString(),
        before: {
            moisture: moistureBefore,
            oil: oilBefore,
            elasticity: elasticityBefore,
            fluorescence: fluorescenceBefore,
            finalScore: finalScoreBefore
        },
        after: {
            moisture: moistureAfter,
            oil: oilAfter,
            elasticity: elasticityAfter,
            fluorescence: fluorescenceAfter,
            finalScore: finalScoreAfter,
            recipe: recommendedRecipe // 레시피 추가
        }
    };

    skinRecords.push(record);
    finalScores.push({
        date: record.date,
        before: finalScoreBefore,
        after: finalScoreAfter,
        average: (finalScoreBefore + finalScoreAfter) / 2
    });

    localStorage.setItem('skinRecords', JSON.stringify(skinRecords));
    localStorage.setItem('finalScores', JSON.stringify(finalScores));

    displayRecords();
}

function displayRecords() {
    const recordList = document.getElementById('recordList');
    recordList.innerHTML = '';

    skinRecords.forEach((record, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>날짜:</strong> ${record.date} 
            | <strong>수분 (전):</strong> ${record.before.moisture} 
            | <strong>유분 (전):</strong> ${record.before.oil} 
            | <strong>탄력 (전):</strong> ${record.before.elasticity} 
            | <strong>형광 (전):</strong> ${record.before.fluorescence} 
            | <strong>최종 점수 (전):</strong> ${record.before.finalScore}
            | <strong>수분 (후):</strong> ${record.after.moisture} 
            | <strong>유분 (후):</strong> ${record.after.oil} 
            | <strong>탄력 (후):</strong> ${record.after.elasticity} 
            | <strong>형광 (후):</strong> ${record.after.fluorescence} 
            | <strong>최종 점수 (후):</strong> ${record.after.finalScore}
            <button onclick="editRecord(${index})">수정</button>
            <button onclick="deleteRecord(${index})">삭제</button>
        `;
        recordList.appendChild(listItem);
    });
}

function deleteRecord(index) {
    if (confirm("정말로 이 기록을 삭제하시겠습니까?")) {
        skinRecords.splice(index, 1);
        finalScores.splice(index, 1);
        localStorage.setItem('skinRecords', JSON.stringify(skinRecords));
        localStorage.setItem('finalScores', JSON.stringify(finalScores));
        displayRecords();
    }
}

function editRecord(index) {
    const record = skinRecords[index];
    document.getElementById("moistureBefore").value = record.before.moisture;
    document.getElementById("oilBefore").value = record.before.oil;
    document.getElementById("elasticityBefore").value = record.before.elasticity;
    document.getElementById("fluorescenceBefore").value = record.before.fluorescence;
    document.getElementById("finalScoreBefore").value = record.before.finalScore;

    document.getElementById("moistureAfter").value = record.after.moisture;
    document.getElementById("oilAfter").value = record.after.oil;
    document.getElementById("elasticityAfter").value = record.after.elasticity;
    document.getElementById("fluorescenceAfter").value = record.after.fluorescence;
    document.getElementById("finalScoreAfter").value = record.after.finalScore;

    document.querySelectorAll('input[type="range"]').forEach(slider => {
        const valueDisplay = document.getElementById(slider.id + "Value");
        valueDisplay.innerText = slider.value;
    });

    skinRecords.splice(index, 1);
    finalScores.splice(index, 1);
    localStorage.setItem('skinRecords', JSON.stringify(skinRecords));
    localStorage.setItem('finalScores', JSON.stringify(finalScores));
    displayRecords();
}

function clearChartContainer() {
    const chartContainer = document.getElementById('chartContainer');
    chartContainer.innerHTML = '<canvas id="chart"></canvas>';
}

function updateDateSelect() {
    const dateSelect = document.getElementById('dateSelect');
    dateSelect.innerHTML = ''; // 기존 옵션을 초기화

    skinRecords.forEach((record, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = record.date;
        dateSelect.appendChild(option);
    });
}

function visualizeData() {
    clearChartContainer();
    const selectedIndex = document.getElementById('dateSelect').value;
    const record = skinRecords[selectedIndex];
    const ctx = document.getElementById('chart').getContext('2d');

    const labels = ['수분', '유분', '탄력', '형광'];
    
    const dataBefore = [
        record.before.moisture,
        record.before.oil,
        record.before.elasticity,
        record.before.fluorescence
    ];
    
    const dataAfter = [
        record.after.moisture,
        record.after.oil,
        record.after.elasticity,
        record.after.fluorescence
    ];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '전',
                    data: dataBefore,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                },
                {
                    label: '후',
                    data: dataAfter,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                }
            ]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '항목'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '값 (0-100)'
                    }
                }
            }
        }
    });

    document.getElementById('chartContainer').style.height = '600px';
}

// 페이지가 로드될 때 날짜 선택 메뉴 업데이트
updateDateSelect();
displayRecords();

function visualizeFinalScore() {
    clearChartContainer();
    const ctx = document.getElementById('chart').getContext('2d');
    const labels = finalScores.map(record => record.date);
    const dataBefore = finalScores.map(record => record.before);
    const dataAfter = finalScores.map(record => record.after);
    const dataAverage = finalScores.map(record => record.average);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '최종 점수 (전)',
                    data: dataBefore,
                    borderColor: 'blue',
                    fill: false
                },
                {
                    label: '최종 점수 (후)',
                    data: dataAfter,
                    borderColor: 'green',
                    fill: false
                },
                {
                    label: '평균',
                    data: dataAverage,
                    borderColor: 'orange',
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '날짜'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '최종 점수'
                    }
                }
            }
        }
    });

    document.getElementById('chartContainer').style.height = '600px';
}

displayRecords();