function calculateTotal(homework, exam) {
  return homework + exam;
}

function getResult(total) {
  if (total >= 50) {
    return "ผ่าน";
  }

  return "ไม่ผ่าน";
}

module.exports = { calculateTotal };
