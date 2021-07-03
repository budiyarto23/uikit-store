import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./uiCollection.scss";
import AdminHeader from "pages/Admin/AdminHeader/index";
import FormText from "components/Form/FormText/FormText";
import Button from "components/Button";
import PageNotFound from "pages/PageNotFound";

function UICollection({ data }) {
  // const maxLengthDesc = 50;
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    // localStorage.getItem("userId");
  }, []);

  const handlerSeaarch = (event) => {
    setSearch(event.target.value);
  };

  const pathHistory = useHistory();

  const routeUIKits = () => {
    let path = "/admin/add-kit";
    pathHistory.push(path);
  };

  
  const getUid = localStorage.getItem("userId");

  return (
    <>
    {getUid ? (
    <div className="container-fluid p-0" style={{ backgroundColor: "#FFFBF8" }}>
      <AdminHeader />
      <div className="container mt-5">
        <div className="title-collection">UI Kits Collection</div>
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
                <option selected>Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <Button
            type="button"
            className="btn btn-primary"
            onClick={routeUIKits}
          >
            Add New UI Kits
          </Button>
        </div>

        {/* table here */}

        <table class="table rounded bg-white mt-3 mb-5">
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col">NAME</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">PRICE</th>
              <th scope="col">DOWNLOADED</th>
              <th scope="col">STATUS</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          {/* {data.map((item, index) => (
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
                <td>
                  <span className="status-badges available">AVAILABLE</span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-outline-light btn-sml dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Option
                    </button>
                    <ul
                      className="dropdown-menu uicollection"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href={`/admin/preview/${item.id}`}
                        >
                          Detail
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          ))} */}
        </table>
      </div>
    </div>
    ) : (
      <PageNotFound />
    )}
    </>
  );
}

export default UICollection;