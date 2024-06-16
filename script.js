const titleText = "<h1>Hello.</h1>";
const contentText = "Welcome to my official website\nThis is jorgejosecontreras.com\nDeveloped by Jorge Jose Contreras";
const footerText = "\nEmail inquiries to jorgec@usa.com";
const resumeTitleText = "<h2>Resume</h2>";
const resumeText = "Broward, Miami-Dade, Palm Beach Counties\n\n<b>Education:</b>\nFlorida Atlantic University, B.B.A. in Finance, 2024\n\n<b>Experience:</b>\nDC Construction Associates, Inc., Accounting Assistant, 2024 - Current\nAirline Spares America, Inc., Bookkeeping Assistant, 2022 - 2024\nASI Aero, Inc., Data Entry Clerk, 2021 - 2022\nSunniland Patio, Inc., Administrative Assistant, 2020 - 2021\nAirline Spares America, Inc., Administrative Assistant, 2018 - 2020";
const skillsText = "<b>Skills:</b>\nC & HTML\nQuickBooks\nMicrosoft Office\nComponent Control\nAdobe Creative Cloud";

let index = 0;
let isTitleTyped = false;
let isContentTyped = false;
let isFooterTyped = false;
let isResumeTitleTyped = false;
let isResumeTyped = false;

function type() {
    if (!isTitleTyped) {
        if (index < titleText.length) {
            document.getElementById("typewriter").innerHTML = `<span class="title">${titleText.slice(0, index + 1)}</span>`;
            index++;
            setTimeout(type, 150); // Slow speed for title
        } else {
            isTitleTyped = true;
            index = 0;
            setTimeout(type, 500); // Pause before starting the next text
        }
    } else if (!isContentTyped) {
        if (index < contentText.length) {
            document.getElementById("typewriter").innerHTML = `<span class="title">${titleText}</span>${contentText.slice(0, index + 1)}`;
            index++;
            setTimeout(type, 50); // Faster speed for paragraph
        } else {
            isContentTyped = true;
            index = 0;
            setTimeout(type, 500); // Pause before starting the footer text
        }
    } else if (!isFooterTyped) {
        if (index < footerText.length) {
            document.getElementById("typewriter").innerHTML = `<span class="title">${titleText}</span>${contentText}<footer>${footerText.slice(0, index + 1)}</footer>`;
            index++;
            setTimeout(type, 50); // Speed for footer text
        } else {
            isFooterTyped = true;
            index = 0;
            setTimeout(type, 500); // Pause before starting the resume title
        }
    } else if (!isResumeTitleTyped) {
        if (index < resumeTitleText.length) {
            document.getElementById("typewriter").innerHTML = `<span class="title">${titleText}</span>${contentText}<footer>${footerText}${resumeTitleText.slice(0, index + 1)}</footer>`;
            index++;
            setTimeout(type, 50); // Speed for resume title text
        } else {
            isResumeTitleTyped = true;
            index = 0;
            setTimeout(type, 500); // Pause before starting the resume text
        }
    } else if (!isResumeTyped) {
        if (index < resumeText.length) {
            document.getElementById("typewriter").innerHTML = `<span class="title">${titleText}</span>${contentText}<footer>${footerText}${resumeTitleText}${resumeText.slice(0, index + 1)}</footer>`;
            index++;
            setTimeout(type, 50); // Speed for resume text
        } else {
            isResumeTyped = true;
            index = 0;
            setTimeout(type, 500); // Pause before starting the skills text
        }
    } else {
        if (index < skillsText.length) {
            document.getElementById("typewriter").innerHTML = `<span class="title">${titleText}</span>${contentText}<footer>${footerText}${resumeTitleText}${resumeText}<div class="skills">${skillsText.slice(0, index + 1)}</div></footer>`;
            index++;
            setTimeout(type, 50); // Speed for skills text
        }
    }
}

window.onload = type;
