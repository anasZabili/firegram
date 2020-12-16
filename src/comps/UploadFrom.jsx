import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadFrom = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const allowTypes = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && allowTypes.includes(selected.type)) {
      setError('')
      setFile(selected);
    } else {
      setFile(null);
      setError("Please select an image file Png or Jpeg");
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadFrom;
