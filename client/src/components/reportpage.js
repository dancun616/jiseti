import React, { useState } from "react";

const Report = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [priority, setPriority] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reportObj = {
      description,
      date,
      location,
      image,
      priority,
      type,
    };
    console.log(reportObj);
  };

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLocation(`${lat}, ${long}`);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <h2>Add a Report</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="">Select type</option>
            <option value="red_flag">Red Flag</option>
            <option value="intervention">Intervention</option>
          </select>
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </label>
        <br />
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required/>
          <button type="button" onClick={handleLocationClick}>Use current location</button>
        </label>
        <br />
        <label>
          Image:
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
        <label>
          Priority Level:
          <br />
          <input type="radio" name="priority" value="low" onChange={(e) => setPriority(e.target.value)} /> Low
          <br />
          <input type="radio" name="priority" value="medium" onChange={(e) => setPriority(e.target.value)} /> Medium
          <br />
          <input type="radio" name="priority" value="high" onChange={(e) => setPriority(e.target.value)} /> High
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <a className='' href='/report'>My Reports</a>

      {/* Display submitted form data below with edit and delete buttons */}
      {/* TODO: Implement display and functionality for edit and delete buttons */}
    </div>
  );
};

export default Report;




