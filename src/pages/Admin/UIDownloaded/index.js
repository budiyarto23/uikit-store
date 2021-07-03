import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import "./uiDownloaded.scss";
import AdminHeader from "pages/Admin/AdminHeader/index";
import FormText from "components/Form/FormText/FormText";

export default function UIDownloaded({ data }) {

  const maxLengthDesc = 25;
  const [search, setSearch] = useState("");

  const handlerSeaarch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#FFFBF8" }}>
      <AdminHeader />
      <div className="container mt-5">
        <div className="title-collection">Download History</div>
        <div className="total-collection">Total: 1.342</div>
        <div
          className="d-flex flex-row justify-content-between mt-4"
          style={{ height: 46 }}
        >
          <div className="d-flex flex-row">
            <div className="frame-search">
              <FormText
                name="Search"
                className=""
                type="text"
                value={search}
                placeholder="Search here"
                onChange={handlerSeaarch}
                style={{ width: 500 }}
              />
            </div>
            <div className="frame-filter">
              <select
                className="form-select form-collection"
                aria-label="Default select example"
              >
                <option selected>Filter Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="frame-filter">
              <select
                className="form-select form-collection"
                aria-label="Default select example"
              >
                <option selected>Filter Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        {/* table here */}

        <table class="frame-table bg-white mt-3 mb-5 table">
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col">INVOICE</th>
              <th scope="col">NAME</th>
              <th scope="col">PRODUCT NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">DATE</th>
              <th scope="col">STATUS</th>
              <th scope="col">CONFIRM</th>
            </tr>
          </thead>
          {data.map((item, index) => (
            <tbody>
              <tr>
                <th
                  scope="row"
                  key={index}
                  className="ml-5"
                  style={{ paddingLeft: 14 }}
                >
                  {index + 1}
                </th>
                <td>{item.name}</td>
                <td className="max-description">
                  {item.description.length > maxLengthDesc
                    ? `${item.description.substring(0, maxLengthDesc)}...`
                    : item.description}
                </td>
                <td>{item.id}</td>
                <td>{item.idrPrice}</td>
                <td>{item.usdPrice}</td>
                <td>
                  <span className="status-badges available">AVAILABLE</span>
                </td>
                <td>
                  <div class="dropdown">
                    <button
                      class="btn btn-outline-light btn-sml dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Option
                    </button>
                    <ul
                      class="dropdown-menu uicollection"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a
                          class="dropdown-item"
                          href={`/preview/downloaded/${item.id}`}
                        >
                          Detail
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
