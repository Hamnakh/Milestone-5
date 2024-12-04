// document.getElementById('generateBtn')?.addEventListener('click', async function () {
//     const picture = (document.getElementById('picture') as HTMLInputElement)?.files?.[0];
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const phone = (document.getElementById('phone') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const address = (document.getElementById('address') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//     let pictureURL = '';
//     if (picture) {
//         pictureURL = URL.createObjectURL(picture);
//     }
//     // Generate a unique URL for sharing
//     const username = "username"; // Replace this with the actual username logic
//     // const uniqueResumeURL = `https://${username}.vercel.app/resume`;
//     const uniqueResumeURL = `https://vercel.com/hamnas-projects-87249bff`
//     // Generate the resume content with slide-in animation
//     const generatedResume = `
//         <div class="resume-slide-left">
//             <h2>${name}</h2>
//             <img src="${pictureURL}" alt="Profile Picture" width="100" height="100"><br>
//             <strong>Phone:</strong> ${phone}<br>
//             <strong>Email:</strong> ${email}<br>
//             <strong>Address:</strong> ${address}<br><br>
//             <strong>Skills:</strong> <div id="skillsList">${skills}</div><br>
//             <button id="addSkillBtn" class="button-hover">Add More Skills</button>
//             <div id="additionalSkills"></div><br>
//             <strong>Education:</strong> <div id="educationList">${education}</div><br>
//             <button id="addEducationBtn" class="button-hover">Add More Education</button>
//             <div id="additionalEducation"></div><br>
//             <strong>Experience:</strong> <div id="experienceList">${experience}</div><br>
//             <button id="addExperienceBtn" class="button-hover">Add More Experience</button>
//             <div id="additionalExperience"></div><br>
//             <button id="downloadBtn" class="button-hover">Download PDF</button>
//             <button id="shareBtn" class="button-hover">Share Resume</button>
//             <div id="uniqueLink">${uniqueResumeURL}</div>
//         </div>
//     `;
//     // Insert generated resume into the DOM
//     const resumeContainer = document.getElementById('generatedResume') as HTMLElement;
//     resumeContainer.innerHTML = generatedResume;
//     resumeContainer.classList.add('slide-from-left');  // Add slide-in effect class
//     // Add event listeners for dynamically added buttons
//     addDynamicEventListeners();
//     // PDF Download Functionality
//     document.getElementById('downloadBtn')?.addEventListener('click', function () {
//         const resumeContent = document.getElementById('generatedResume') as HTMLElement;
//         // import('html2pdf.js').then(html2pdf => {
//             import('document.print').then(html2pdf => {
//         html2pdf().from(resumeContent).set({
//                 filename: `${name}-resume.pdf`,
//                 jsPDF: { format: 'a4' },
//                 margin: 10
//             }).save();
//         });
//     });
//     // Share Functionality - Copy URL to Clipboard
//     document.getElementById('shareBtn')?.addEventListener('click', function () {
//         navigator.clipboard.writeText(uniqueResumeURL).then(() => {
//             alert('Resume link copied to clipboard!');
//         }).catch(err => {
//             console.error('Could not copy link:', err);
//         });
//     });
// });
// function addDynamicEventListeners() {
// }
function generateUsername(name) {
    // Remove spaces and special characters
    return name.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '');
}
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g;
    var form = document.getElementById("resumeForm");
    var educationFields = document.getElementById("educationFields");
    var experienceFields = document.getElementById("experienceFields");
    var skillsList = document.getElementById("skillsList");
    var resumeOutput = document.getElementById("resumeOutput");
    var editResumeButton = document.getElementById("editResume");
    var saveResumeButton = document.getElementById("saveResume");
    var editMessage = document.getElementById("editMessage");
    var replacePhotoInput = document.getElementById("replacePhoto");
    var formattingButtons = document.getElementById("formattingButtons");
    var downloadPdfButton = document.getElementById("downloadResume");
    var shareableLinkContainer = document.getElementById("shareable-link-container");
    var shareableLinkElement = document.getElementById("shareable-link");
    var isEditing = false;
    // Add Education Entry
    (_a = document.getElementById("addEducation")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a;
        var newField = document.createElement("div");
        newField.classList.add("education-entry");
        newField.innerHTML = "\n            <input type=\"text\" name=\"degree\" placeholder=\"Degree\" required>\n            <input type=\"text\" name=\"school\" placeholder=\"School\" required>\n            <input type=\"number\" name=\"graduationYear\" placeholder=\"Graduation Year\" required>\n            <button type=\"button\" class=\"removeEducation\">Remove</button>\n        ";
        educationFields.appendChild(newField);
        // Remove Education Entry
        (_a = newField.querySelector(".removeEducation")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            newField.remove();
        });
    });
    // Add Work Experience Entry
    (_b = document.getElementById("addExperience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var _a;
        var newField = document.createElement("div");
        newField.classList.add("experience-entry");
        newField.innerHTML = "\n            <input type=\"text\" name=\"jobTitle\" placeholder=\"Job Title\">\n            <input type=\"text\" name=\"company\" placeholder=\"Company\">\n            <input type=\"number\" name=\"startYear\" placeholder=\"Start Year\">\n            <input type=\"number\" name=\"endYear\" placeholder=\"End Year\">\n            <div>\n            <textarea name=\"jobDescription\" placeholder=\"Job Description\"></textarea>\n            </div>\n            <button type=\"button\" class=\"removeExperience\">Remove</button>\n        ";
        experienceFields.appendChild(newField);
        // Remove Experience Entry
        (_a = newField.querySelector(".removeExperience")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            newField.remove();
        });
    });
    // Add Skills
    (_c = document.getElementById("addSkill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var skillInput = document.getElementById("skillInput");
        var skillValue = skillInput.value.trim();
        if (skillValue) {
            var skillItem = document.createElement("div");
            skillItem.textContent = skillValue;
            skillItem.classList.add("skill-item");
            skillsList.appendChild(skillItem);
            skillInput.value = "";
        }
    });
    // Generate Resume on Form Submit
    form.addEventListener("submit", function (e) {
        var _a;
        e.preventDefault();
        resumeOutput.innerHTML = "";
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var profilePicture = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
        var username = generateUsername(name);
        // Personal Information Section
        var personalInfoSection = document.createElement("div");
        personalInfoSection.classList.add("section");
        if (profilePicture) {
            var imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(profilePicture);
            personalInfoSection.appendChild(imgElement);
        }
        personalInfoSection.innerHTML += "\n            <h1>".concat(name, "</h1>\n            <h3>Contact</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone || "Not provided", "</p>\n        ");
        resumeOutput.appendChild(personalInfoSection);
        // Education Section (with unordered list)
        var educationSection = document.createElement("div");
        educationSection.classList.add("section");
        educationSection.innerHTML = "<h3>Education</h3>";
        var educationList = document.createElement("ul");
        document.querySelectorAll(".education-entry").forEach(function (entry) {
            var degree = entry.querySelector('input[name="degree"]').value;
            var school = entry.querySelector('input[name="school"]').value;
            var graduationYear = entry.querySelector('input[name="graduationYear"]').value;
            var listItem = document.createElement("li");
            listItem.innerHTML = "<strong>".concat(degree, "</strong> from ").concat(school, ", Year: (").concat(graduationYear, ")");
            educationList.appendChild(listItem);
        });
        educationSection.appendChild(educationList);
        resumeOutput.appendChild(educationSection);
        // Work Experience Section (with unordered list)
        var experienceSection = document.createElement("div");
        experienceSection.classList.add("section");
        experienceSection.innerHTML = "<h3>Work Experience</h3>";
        var experienceList = document.createElement("ul");
        document.querySelectorAll(".experience-entry").forEach(function (entry) {
            var jobTitle = entry.querySelector('input[name="jobTitle"]').value;
            var company = entry.querySelector('input[name="company"]').value;
            var startYear = entry.querySelector('input[name="startYear"]').value;
            var endYear = entry.querySelector('input[name="endYear"]').value;
            var jobDescription = entry.querySelector('textarea[name="jobDescription"]').value;
            if (jobTitle || company) {
                var listItem = document.createElement("li");
                listItem.innerHTML = "<strong>".concat(jobTitle, "</strong> at ").concat(company, " (").concat(startYear, " - ").concat(endYear || "Present", ")<br>").concat(jobDescription || "");
                experienceList.appendChild(listItem);
            }
        });
        if (experienceList.children.length > 0) {
            experienceSection.appendChild(experienceList);
            resumeOutput.appendChild(experienceSection);
        }
        // Skills Section
        if (skillsList.children.length > 0) {
            var skillsSection = document.createElement("div");
            skillsSection.classList.add("section");
            skillsSection.innerHTML = "<h3>Skills</h3>";
            var ulElement_1 = document.createElement("ul");
            Array.from(skillsList.children).forEach(function (skill) {
                var liElement = document.createElement("li");
                liElement.textContent = skill.textContent || "";
                ulElement_1.appendChild(liElement);
            });
            skillsSection.appendChild(ulElement_1);
            resumeOutput.appendChild(skillsSection);
        }
        // Store resume HTML in localStorage with the sanitized username
        var resumeHTML = resumeOutput.innerHTML; // Get the generated HTML
        localStorage.setItem("resume-".concat(username), resumeHTML);
        // Generate the shareable URL
        var shareableURL = "".concat(window.location.origin).concat(window.location.pathname, "?resume=").concat(encodeURIComponent(username));
        // Display the shareable link
        shareableLinkContainer.style.display = "block";
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = "Share";
    });
    // Edit Mode Toggle
    editResumeButton === null || editResumeButton === void 0 ? void 0 : editResumeButton.addEventListener("click", function () {
        isEditing = true;
        editMessage.style.display = "block";
        formattingButtons.style.display = "block";
        resumeOutput.setAttribute("contenteditable", "true");
        editResumeButton.classList.add("hidden");
        saveResumeButton.classList.remove("hidden");
    });
    saveResumeButton === null || saveResumeButton === void 0 ? void 0 : saveResumeButton.addEventListener("click", function () {
        isEditing = false;
        editMessage.style.display = "none";
        formattingButtons.style.display = "none";
        resumeOutput.setAttribute("contenteditable", "false");
        editResumeButton.classList.remove("hidden");
        saveResumeButton.classList.add("hidden");
    });
    //download button
    downloadPdfButton.addEventListener("click", function () {
        window.print(); // This will print only the #resumeOutput section
    });
    // Handle loading a resume from the shareable link
    window.addEventListener("DOMContentLoaded", function () {
        var urlParams = new URLSearchParams(window.location.search);
        var resumeUsername = urlParams.get("resume");
        if (resumeUsername) {
            // Retrieve the saved resume HTML from localStorage
            var savedResume = localStorage.getItem("resume-".concat(resumeUsername));
            if (savedResume) {
                // Display the saved resume and hide the form
                resumeOutput.innerHTML = savedResume;
                form.style.display = "none"; // Hide the form when a resume is loaded
            }
        }
    });
    // Text Formatting
    (_d = document.getElementById("boldText")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        document.execCommand("bold", false);
    });
    (_e = document.getElementById("italicText")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        document.execCommand("italic", false);
    });
    (_f = document.getElementById("underlineText")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
        document.execCommand("underline", false);
    });
    (_g = document.getElementById("highlightText")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () {
        document.execCommand("hiliteColor", false, "yellow");
    });
    // Replace Photo in Edit Mode
    replacePhotoInput.addEventListener("change", function () {
        var _a;
        var file = (_a = replacePhotoInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var imgElement = resumeOutput.querySelector("img");
            if (imgElement) {
                imgElement.src = URL.createObjectURL(file);
            }
        }
    });
});
