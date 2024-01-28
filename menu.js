// menu.js

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.menu-group input[type="checkbox"]');
  
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        saveCheckboxState(checkbox.id, checkbox.checked);
        updateSubjectVisibility();
      });
    });
  
    // Load saved checkbox states on page load
    loadSavedCheckboxStates();
  
    // Initial update of subject visibility
    updateSubjectVisibility();
  });
  
function saveCheckboxState(checkboxId, isChecked) {
// Use localStorage to store checkbox states
const savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};
savedStates[checkboxId] = isChecked;
localStorage.setItem('checkboxStates', JSON.stringify(savedStates));
}

function loadSavedCheckboxStates() {
const savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};

// Apply saved checkbox states
for (const checkboxId in savedStates) {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
    checkbox.checked = savedStates[checkboxId];
    }
}
}
  
function updateSubjectVisibility() {
    const savedStates = JSON.parse(localStorage.getItem('checkboxStates')) || {};

    // Create a map to store the visibility status of each section header
    const sectionVisibilityMap = {};

    // Apply saved checkbox states to hide or show subjects
    for (const checkboxId in savedStates) {
        const subjectId = checkboxId.replace('Checkbox', '');
        const subject = document.getElementById(subjectId);

        if (subject) {
            // Find the closest parent row element
            const row = subject.closest('tr');

            if (savedStates[checkboxId]) {
                // Show the entire row when the checkbox is checked
                row.style.display = 'table-row';
            } else {
                // Hide the entire row when the checkbox is unchecked
                row.style.display = 'none';
            }

            // Track the visibility status of each section header
            const sectionId = subject.getAttribute('data-section-id');
            if (sectionId) {
                sectionVisibilityMap[sectionId] = sectionVisibilityMap[sectionId] || {
                    count: 0,
                    header: document.getElementById(`${sectionId}Header`),
                };

                // Count visible subjects within the section
                if (savedStates[checkboxId]) {
                    sectionVisibilityMap[sectionId].count++;
                }
            }
        }
    }

    // Hide or show the section headers based on the visibility status
    for (const sectionId in sectionVisibilityMap) {
        const { count, header } = sectionVisibilityMap[sectionId];
        if (header) {
            // Check if there are no visible subjects in the section
            const noVisibleSubjects = count === 0;
            header.closest('tr').style.display = noVisibleSubjects ? 'none' : 'table-row';
        }
    }
}