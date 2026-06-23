const test1 = 85;
const test2 = 92;
const isActive = true;
const courseDifficulty = 0.95;

const average = (test1 + test2) / 2;
const finalScore = average * courseDifficulty;

const isSuccessful = finalScore >= 90 && isActive;

const getGrade = (score) => {
    if (score >= 95) return "A";
    if (score >= 85) return "B";
    if (score >= 75) return "C";
    return "D";
};

const grade = getGrade(finalScore);

console.log(`Успешность: ${isSuccessful}; Итоговый балл: ${finalScore.toFixed(2)}; Оценка: ${grade}`);