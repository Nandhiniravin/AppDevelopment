import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Basic.css';
import Navbar1 from '../navbar/Navbar1';
import Footer from '../footer/Footer';
function TimeSheetManagement() {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState({
    date: '',
    startTime: '',
    endTime: '',
    task: '',
    project: '',
  });
  const [filters, setFilters] = useState({
    selectedDate: '',
    selectedProject: '',
    selectedTask: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEntry({
      ...entry,
      [name]: value,
    });
  };

  const handleAddEntry = () => {
    setEntries([...entries, entry]);
    setEntry({
      date: '',
      startTime: '',
      endTime: '',
      task: '',
      project: '',
    });
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString();
    const entryExists = entries.some((e) => e.date === formattedDate);

    if (entryExists) {
      alert('An entry for this date already exists.');
    } else {
      setEntry({
        ...entry,
        date: formattedDate,
      });
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Function to calculate the total hours worked between start and end times
  const calculateTimeDifference = (startTime, endTime) => {
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);
    const timeDifferenceMs = end - start;
    const hours = timeDifferenceMs / (1000 * 60 * 60);
    return parseFloat(hours.toFixed(2));
  };

  const filteredEntries = entries.filter((entry) => {
    const isDateMatch =
      !filters.selectedDate || entry.date === filters.selectedDate;
    const isProjectMatch =
      !filters.selectedProject || entry.project === filters.selectedProject;
    const isTaskMatch =
      !filters.selectedTask || entry.task === filters.selectedTask;
    return isDateMatch && isProjectMatch && isTaskMatch;
  });

  return (
    <div>
    <Navbar1/>
    <div className="ccontainer">
      <h1>Time Sheet Management System</h1>
      <div className="filter-container">
      <div className="filter-form-box">
        <div className="filter-form">
          <label>Date Filter:</label>
          <input
            type="text"
            name="selectedDate"
            value={filters.selectedDate}
            onChange={handleFilterChange}
          />
          <label>Project Filter:</label>
          <input
            type="text"
            name="selectedProject"
            value={filters.selectedProject}
            onChange={handleFilterChange}
          />
          <label>Task Filter:</label>
          <input
            type="text"
            name="selectedTask"
            value={filters.selectedTask}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      </div>
      <div className="entry-form-box">
        <div className="entry-form">
          <label>Date:</label>
          <Calendar
            onChange={handleDateChange}
            value={entry.date ? new Date(entry.date) : null}
            showNeighboringMonth={false}
          />
          <label>Start Time:</label>
          <input
            type="time"
            name="startTime"
            value={entry.startTime}
            onChange={handleInputChange}
          />
          <label>End Time:</label>
          <input
            type="time"
            name="endTime"
            value={entry.endTime}
            onChange={handleInputChange}
          />
          <label>Task:</label>
          <textarea
            name="task"
            value={entry.task}
            onChange={handleInputChange}
          />
          <label>Project:</label>
          <textarea
            name="project"
            value={entry.project}
            onChange={handleInputChange}
          />
          <button onClick={handleAddEntry}>Add Entry</button>
        </div>
      </div>
      <div className="entries-box">
        <h2>Time Sheet Entries</h2>
        <ul className="entries">
          {filteredEntries.map((entry, index) => (
            <li key={index}>
              Date: {entry.date}, Start Time: {entry.startTime}, End Time: {entry.endTime}, Task: {entry.task}, Project: {entry.project}, Total Hours: {calculateTimeDifference(entry.startTime, entry.endTime)} hours
            </li>
          ))}
        </ul>
      </div>
    </div>
     <Footer/>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TimeSheetManagement />
    </div>
  );
}

export default App;
