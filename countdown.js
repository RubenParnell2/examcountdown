// Function to calculate the time until an exam
function timeUntilExam(exam) {
    const examDate = exam.date;
    const examTime = exam.time === "am" ? "09:00" : "13:30"; // Set exam times as specified
    const examDateTime = new Date(`${examDate}T${examTime}`);
  
    const now = new Date();
  
    // Ensure exam time is in the future
    if (examDateTime <= now) {
      return "Exam has already started or finished";
    }
  
    const differenceInMilliseconds = examDateTime - now;
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / (1000));
  
    return `${days} Days, ${hours} Hrs, ${minutes} Mins, ${seconds} Secs`;
  }
  
  // Iterate through the exams and display the time until each exam
  for (let i = 0; i < exams.length; i++){
    exam = exams[i]
    const timeUntil = timeUntilExam(exam);
    console.log(`${exam.subject} ${exam.unitTitle}: ${timeUntil}`)
    exams[i].timeTo = timeUntil
  }

console.log(exams)

function populateCellsWithExamData() {
// Filter exams to include only upcoming exams
const upcomingExams = exams.filter((exam) => exam.timeTo !== "Exam has already started or finished");

// Sort upcoming exams by date and time (earliest first)
upcomingExams.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return a.time.localeCompare(b.time); // Compare times if dates are equal
});

// Iterate through the upcoming exams and populate table cells
upcomingExams.forEach((exam) => {
    exam.timeTo = timeUntilExam(exam);
    const subject = exam.subject; // Ensure consistent formatting for ID

    const unitCodeId = `unitCode-${subject}`;
    const unitTitleId = `unitTitle-${subject}`;
    const durationId = `duration-${subject}`;
    const dateId = `date-${subject}`;
    const countdownId = `countdown-${subject}`;

    const unitCodeCell = document.getElementById(unitCodeId);
    const unitTitleCell = document.getElementById(unitTitleId);
    const durationCell = document.getElementById(durationId);
    const dateCell = document.getElementById(dateId);
    const countdownCell = document.getElementById(countdownId);

    if (countdownCell) {
        unitCodeCell.textContent = exam.unitCode
        unitTitleCell.textContent = exam.unitTitle
        durationCell.textContent = exam.durationMins
        dateCell.textContent = exam.date
        countdownCell.textContent = exam.timeTo;
    }

    // Add code here to populate other cells as needed, using IDs like "unitCode-subject", "duration-subject", etc.
});
}

// Call the function when the page loads
window.onload = populateCellsWithExamData;
setInterval(populateCellsWithExamData, 1000);




//For each specific subject page:

function createSubjectTable(subject) {
    // Get reference to the container element for the table
    const tableContainer = document.getElementById("exam-tables");
  
    // Create a new table element
    const table = document.createElement("table");
    table.classList.add("exam-table"); // Add a class for styling
  
    // Generate table header row
    const headerRow = document.createElement("tr");
    const headerCell1 = document.createElement("th");
    headerCell1.textContent = "Exam Title";
    const headerCell2 = document.createElement("th");
    headerCell2.textContent = "Date & Time";
    const headerCell3 = document.createElement("th");
    headerCell3.textContent = "Duration";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    headerRow.appendChild(headerCell3);
    table.appendChild(headerRow);
  
    // Filter exams for the current subject
    const subjectExams = exams.filter((exam) => exam.subject.toLowerCase() === subject.toLowerCase());
  
    // For each exam, create a table row and populate cells
    subjectExams.forEach((exam) => {
      const row = document.createElement("tr");
      const cell1 = document.createElement("td");
      cell1.textContent = exam.unitTitle;
      const cell2 = document.createElement("td");
      cell2.textContent = `${exam.date} ${exam.time}`;
      const cell3 = document.createElement("td");
      cell3.textContent = `${exam.durationMins} minutes`;
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      table.appendChild(row);
    });
  
    // Append the new table to the container element
    tableContainer.appendChild(table);
  }
  
  // Get the current subject from the URL or another source
  const subject = getSubjectFromUrl(); // Replace with your logic to get subject
  
  // Create the table for the current subject
  createSubjectTable(subject);