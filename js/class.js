document.addEventListener("DOMContentLoaded", function () {
  const scheduleContainer = document.getElementById("schedule-container");

  const currentDate = new Date();
  const currentDay = capitalize(
    currentDate.toLocaleDateString("ro-RO", { weekday: "long" })
  );

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function isCurrentTimeInRange(start, end) {
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentTime = currentHour * 60 + currentMinutes;
    const startTime = start.hour * 60 + start.minute;
    const endTime = end.hour * 60 + end.minute;
    return currentTime >= startTime && currentTime <= endTime;
  }

  function createSchedule(grade) {
    const clasa = orarClaseleGimnaziale.find((c) => c.clasa === grade);
    if (!clasa) {
      scheduleContainer.innerHTML = `<div>No schedule found for ${grade}</div>`;
      return;
    }

    const classDiv = document.createElement("div");
    classDiv.className = "class-schedule";

    const classTitle = document.createElement("div");
    classTitle.className = "class-title";
    classTitle.textContent = `Clasa ${clasa.clasa}`;
    classDiv.appendChild(classTitle);

    Object.keys(clasa.orar).forEach((day) => {
      const dayDiv = document.createElement("div");
      dayDiv.className = "day-schedule";
      dayDiv.id = day;

      const dayTitle = document.createElement("div");
      dayTitle.className = "day-title";
      dayTitle.textContent = day;
      dayDiv.appendChild(dayTitle);

      const ul = document.createElement("ul");
      clasa.orar[day].forEach((subject, index) => {
        const li = document.createElement("li");
        li.textContent = subject;

        if (day === currentDay) {
          if (index < lessonTimes.length) {
            if (
              isCurrentTimeInRange(
                lessonTimes[index].start,
                lessonTimes[index].end
              )
            ) {
              li.classList.add("highlight");
            } else if (
              isCurrentTimeInRange(
                { hour: 0, minute: 0 },
                lessonTimes[index].end
              )
            ) {
              li.classList.add("past");
            }
          }
        } else if (
          ["Luni", "Marti", "Miercuri", "Joi", "Vineri"].indexOf(day) <
          ["Luni", "Marti", "Miercuri", "Joi", "Vineri"].indexOf(currentDay)
        ) {
          li.classList.add("past");
        }

        ul.appendChild(li);
      });

      dayDiv.appendChild(ul);
      classDiv.appendChild(dayDiv);
    });

    scheduleContainer.appendChild(classDiv);
  }

  // Call the function for a specific grade, e.g., "V-a"
  createSchedule("V-a");
});
