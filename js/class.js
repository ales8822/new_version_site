$(document).ready(function () {
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
// Get the schedule container element
var scheduleContainer = $("#schedule-container");

// Get the current date and day
var currentDate = new Date();
var currentDay = currentDate.toLocaleDateString("ro-RO", { weekday: "long" });
currentDay = capitalizeFirstLetter(currentDay);

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// Function to check if current time is within a range
function isCurrentTimeInRange(start, end) {
  var currentHour = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();
  var currentTime = currentHour * 60 + currentMinutes;
  var startTime = start.ora * 60 + start.minute;
  var endTime = end.ora * 60 + end.minute;
  return currentTime >= startTime && currentTime <= endTime;
}

// Function to create schedule for a specific class
function createSchedule(grade) {
  var clasa = orarClasele.filter(function (c) {
    return c.clasa === grade;
  })[0];

  if (!clasa) {
    scheduleContainer.html("<div>Nu s-a găsit orar pentru " + grade + "</div>");
    return;
  }

  var classDiv = $("<div>").addClass("class-schedule");

  var classTitle = $("<div>")
    .addClass("class-title")
    .text("Clasa " + clasa.clasa);
  classDiv.append(classTitle);

  $.each(clasa.orar, function (day, subjects) {
    var dayDiv = $("<div>").addClass("day-schedule").attr("id", day);

    var dayTitle = $("<div>").addClass("day-title").text(day);
    dayDiv.append(dayTitle);

    var ul = $("<ul>");

    $.each(subjects, function (index, subject) {
      var li = $("<li>").text(subject);
      console.log(day);
      console.log(currentDay);

      if (day === currentDay) {
        var nextLessonStartTime = lessonTimes[index + 1]
          ? lessonTimes[index + 1].start
          : null;
        var currentEndTime = lessonTimes[index].end;

        if (index < lessonTimes.length) {
          if (nextLessonStartTime) {
            li.addClass("upcoming-lesson");
          }

          if (isCurrentTimeInRange(lessonTimes[index].start, currentEndTime)) {
            li.removeClass("upcoming-lesson").addClass("highlight");
          } else if (
            isCurrentTimeInRange(currentEndTime, { ora: 23, minute: 59 })
          ) {
            li.addClass("past");
          }
        }
      } else if (
        ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"].indexOf(day) <
        ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"].indexOf(
          currentDay
        )
      ) {
        li.addClass("past");
      }

      ul.append(li);
    });

    dayDiv.append(ul);
    classDiv.append(dayDiv);
  });

  scheduleContainer.append(classDiv);
}
//   // Create schedule for a specific class, e.g., "VII-a"
//   createSchedule("VII-a");
