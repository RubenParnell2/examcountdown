const exams = [
    {
      date: "2024-05-09",
      time: "am",
      board: "AQA",
      subject: "religiousStudies",
      unitCode: "8062/1",
      unitTitle: "Religious Studies Paper 1",
      durationMins: 105,
    },
    {
      date: "2024-05-09",
      time: "am",
      board: "OCR",
      subject: "engineering",
      unitCode: "R038",
      unitTitle: "Engineering Design",
      durationMins: 75,
    },
    {
      date: "2024-05-09",
      time: "pm",
      board: "Edexcel",
      subject: "drama",
      unitCode: "1DR0 03",
      unitTitle: "Theatre Makers in Practice",
      durationMins: 105,
    },
    {
      date: "2024-05-10",
      time: "am",
      board: "AQA",
      subject: "biology",
      unitCode: "8461/1F/H",
      unitTitle: "Biology Paper 1 Tier F/H",
      durationMins: 105,
    },
    {
      date: "2024-05-10",
      time: "pm",
      board: "Edexcel",
      subject: "german",
      unitCode: "1GN0 1F/H",
      unitTitle: "Listening & Understanding in German",
      durationMins: 35,
    },
    {
      date: "2024-05-10",
      time: "pm",
      board: "Edexcel",
      subject: "german",
      unitCode: "1GN0 3F/H",
      unitTitle: "Reading & Understanding in German",
      durationMins: 45,
    },
    {
      date: "2024-05-13",
      time: "am",
      board: "AQA",
      subject: "englishLiterature",
      unitCode: "8702/1M",
      unitTitle: "English Lit Paper 1",
      durationMins: 105,
    },
    {
      date: "2024-05-13",
      time: "pm",
      board: "WJEC",
      subject: "mediaStudies",
      unitCode: "C680U10-1",
      unitTitle: "Component 1 (EDUQAS)",
      durationMins: 90,
    },
    {
      date: "2024-05-14",
      time: "am",
      board: "Edexcel",
      subject: "french",
      unitCode: "1FR0 1F/H",
      unitTitle: "Listening & Understanding in French",
      durationMins: 35,
    },
    {
      date: "2024-05-14",
      time: "am",
      board: "Edexcel",
      subject: "french",
      unitCode: "1FR0 3F/H",
      unitTitle: "Reading & Understanding in French",
      durationMins: 45,
    },
    {
      date: "2024-05-14",
      time: "pm",
      board: "Edexcel",
      subject: "business",
      unitCode: "1BS0 01",
      unitTitle: "Investigating Small Business",
      durationMins: 105,
    },
    {
        date: "2024-05-15",
        time: "am",
        board: "AQA",
        subject: "history",
        unitCode: "8145/1B",
        unitTitle: "History Paper 1",
        durationMins: 120,
      },
      {
        date: "2024-05-15",
        time: "pm",
        board: "AQA",
        subject: "computerScience",
        unitCode: "8525/1B",
        unitTitle: "Computer Science Paper 1B Python",
        durationMins: 120,
      },
      {
        date: "2024-05-16",
        time: "am",
        board: "Edexcel",
        subject: "maths",
        unitCode: "1MA1 1F/H",
        unitTitle: "Non-Calculator",
        durationMins: 90,
      },
      {
        date: "2024-05-16",
        time: "pm",
        board: "AQA",
        subject: "religiousStudies",
        unitCode: "8062/2",
        unitTitle: "Religious Studies Paper 2",
        durationMins: 105,
      },
      {
        date: "2024-05-17",
        time: "am",
        board: "AQA",
        subject: "chemistry",
        unitCode: "8462/1F/H",
        unitTitle: "Chemistry Paper 1 Tier F/H",
        durationMins: 105,
      },
      {
        date: "2024-05-17",
        time: "pm",
        board: "AQA",
        subject: "geography",
        unitCode: "8035/1",
        unitTitle: "Geography Paper 1",
        durationMins: 90,
      },
      {
        date: "2024-05-20",
        time: "am",
        board: "AQA",
        subject: "englishLiterature",
        unitCode: "8702/2",
        unitTitle: "English Literature Paper 2",
        durationMins: 135,
      },
      {
        date: "2024-05-20",
        time: "pm",
        board: "WJEC",
        subject: "mediaStudies",
        unitCode: "C680U10-1",
        unitTitle: "Component 2 (EDUQAS)",
        durationMins: 90,
      },
      {
        date: "2024-05-21",
        time: "am",
        board: "Edexcel",
        subject: "german",
        unitCode: "1GN0 4F/H",
        unitTitle: "Writing in German",
        durationMins: 75,
      },
      {
        date: "2024-05-21",
        time: "pm",
        board: "AQA",
        subject: "computerScience",
        unitCode: "8520/2",
        unitTitle: "Computer Science Paper 2",
        durationMins: 105,
      },
      {
        date: "2024-05-21",
        time: "pm",
        board: "OCR",
        subject: "childDevelopment",
        unitCode: "R057",
        unitTitle: "Health & Wellbeing in Child Dev",
        durationMins: 75,
      },
      {
        date: "2024-05-22",
        time: "am",
        board: "AQA",
        subject: "physics",
        unitCode: "8463/1F/H",
        unitTitle: "Physics Paper 1 Tier F/H",
        durationMins: 105,
      },
      {
        date: "2024-05-22",
        time: "pm",
        board: "AQA",
        subject: "pe",
        unitCode: "8582/1",
        unitTitle: "Physical Education Paper 1",
        durationMins: 75,
      },
      {
        date: "2024-05-23",
        time: "am",
        board: "AQA",
        subject: "englishLanguage",
        unitCode: "8700/1",
        unitTitle: "English Language Paper 1",
        durationMins: 105,
      },
      {
        date: "2024-05-24",
        time: "am",
        board: "Edexcel",
        subject: "french",
        unitCode: "1FR0 4F/H",
        unitTitle: "Writing in French",
        durationMins: 75,
      },
      {
        date: "2024-06-03",
        time: "am",
        board: "Edexcel",
        subject: "maths",
        unitCode: "1MA1 2F/H",
        unitTitle: "Calculator",
        durationMins: 90,
      },
      {
        date: "2024-06-03",
        time: "pm",
        board: "AQA",
        subject: "pe",
        unitCode: "8582/2",
        unitTitle: "Physical Education Paper 2",
        durationMins: 75,
      },
      {
        date: "2024-06-04",
        time: "am",
        board: "AQA",
        subject: "history",
        unitCode: "8145/2A",
        unitTitle: "History Paper 2",
        durationMins: 120,
      },
      {
        date: "2024-06-05",
        time: "am",
        board: "AQA",
        subject: "geography",
        unitCode: "8035/2",
        unitTitle: "Geography Paper 2",
        durationMins: 90,
      },
      {
        date: "2024-06-05",
        time: "pm",
        board: "Edexcel",
        subject: "business",
        unitCode: "1BS0 02",
        unitTitle: "Business: Building a Business",
        durationMins: 105,
      },
      {
        date: "2024-06-06",
        time: "am",
        board: "AQA",
        subject: "englishLanguage",
        unitCode: "8700/2",
        unitTitle: "English Language Paper 2",
        durationMins: 105,
      },
      {
        date: "2024-06-07",
        time: "am",
        board: "AQA",
        subject: "biology",
        unitCode: "8461/2F/H",
        unitTitle: "Biology Paper 2 Tier F/H",
        durationMins: 105,
      },
      {
        date: "2024-06-10",
        time: "am",
        board: "Edexcel",
        subject: "maths",
        unitCode: "1MA1 3F/H",
        unitTitle: "Calculator",
        durationMins: 90,
      },
      {
        date: "2024-06-11",
        time: "am",
        board: "AQA",
        subject: "chemistry",
        unitCode: "8462/2F/H",
        unitTitle: "Chemistry Paper 2 Tier F/H",
        durationMins: 105,
      },
      {
        date: "2024-06-11",
        time: "pm",
        board: "AQA",
        subject: "furtherMaths",
        unitCode: "8365/1",
        unitTitle: "Paper 1",
        durationMins: 105,
      },
      {
        date: "2024-06-14",
        time: "am",
        board: "AQA",
        subject: "geography",
        unitCode: "8035/3",
        unitTitle: "Geography Paper 3",
        durationMins: 75,
      },
      {
        date: "2024-06-14",
        time: "pm",
        board: "AQA",
        subject: "physics",
        unitCode: "8463/2F/H",
        unitTitle: "Physics Paper 2 Tier F/H",
        durationMins: 105,
      },
      {
        date: "2024-06-17",
        time: "pm",
        board: "Edexcel",
        subject: "music",
        unitCode: "1MU0 03",
        unitTitle: "Appraising",
        durationMins: 105,
      },
      {
        date: "2024-06-18",
        time: "am",
        board: "AQA",
        subject: "designTechnology",
        unitCode: "8552/W",
        unitTitle: "Design Technology Written Paper",
        durationMins: 120,
      },
      {
        date: "2024-06-19",
        time: "am",
        board: "AQA",
        subject: "food",
        unitCode: "8585",
        unitTitle: "Food preparation and nutrition",
        durationMins: 105,
      },
      {
        date: "2024-06-19",
        time: "am",
        board: "AQA",
        subject: "furtherMaths",
        unitCode: "8365/2",
        unitTitle: "Paper 2",
        durationMins: 105,
      }
    ]
  

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