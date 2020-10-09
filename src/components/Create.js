"use-strict";
import React from "react";

// Component "Create" allows you to create a new task
const Create = () => {
  return (
    <div className="container bg-light">
      <h2 className="">Create Task</h2>
      <form className="row">
        {/* Title enter by User */}
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" id="title" />
        {/* Date create task by data base */}
        <label htmlFor="date" className="form-label">
          Date de création
        </label>
        <input type="text" id="date" />
        {/* Category enter by User*/}
        <label htmlFor="cat" className="form-label">
          Catégorie
        </label>
        <input type="text" id="cat" />
        {/* Description enter by User*/}
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea className="form-control" id="description"></textarea>
        {/* Validation button */}
        <button type="submit" className="btn btn-danger col-2">
          Envoyer
        </button>
        {/* Mettre en place le button reset */}
      </form>
    </div>
  );
};

export default Create;
