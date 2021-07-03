import React, { useRef, useState } from "react";
import propTypes from "prop-types";

import "./inputFile.scss";

export default function File(props) {
  const [FileName, setFileName] = useState("");
  const {
    // value,
    placeholder,
    name,
    accept,
    outerClassName,
    inputClassName,
    multiple,
  } = props;

  const refInputFile = useRef(null);

  const onChange = (event) => {
    setFileName(event.target.value);
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files,
      },
    });
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <input
        accept={accept}
        ref={refInputFile}
        name={name}
        className="d-none"
        type="file"
        value={FileName}
        onChange={onChange}
        multiple={multiple}
      />
      <input
          onClick={() => refInputFile.current.click()}
          defaultValue={FileName}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
    </div>
  );
}

File.defaultProps = {
  placeholder: "Choose a File",
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  multiple: propTypes.bool
};
