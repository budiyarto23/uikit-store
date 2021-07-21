import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./uiCollection.scss";
import AdminHeader from "pages/Admin/AdminHeader/index";
import FormText from "components/Form/FormText/FormText";
import Button from "components/Button";
import PageNotFound from "pages/PageNotFound";
import { getUiKits } from "config/redux/action";

function UICollection() {
  const maxLengthDesc = 50;
  const [search, setSearch] = useState("");
  const { loading, kitsData } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsData: state.kits.kitsCollection,
  }));
  const dispatch = useDispatch();
  const totalCollection = kitsData.length;

  const renderUiKits = () => {
    dispatch(getUiKits());
    // eslint-disable-next-line
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    renderUiKits();
    // eslint-disable-next-line
  }, []);

  const handlerSeaarch = (event) => {
    setSearch(event.target.value);
  };

  const pathHistory = useHistory();

  const routeUIKits = () => {
    let path = "/admin/add-kit";
    pathHistory.push(path);
  };


  const getUid = JSON.parse(localStorage.getItem("userId"));
  console.log(getUid);

  return (
    <>
      {getUid ? (
        <div
          className="container-fluid p-0"
          style={{ backgroundColor: "#F3F4F6", minHeight: "110vh" }}
        >
          <AdminHeader />
          <div className="container mt-5">
            <div className="title-collection">UI Kits Collection</div>
            <div className="total-collection">Total: {totalCollection}</div>
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
                  <div className="form-item">
                    <div className="select-wrap">
                      <select
                        id="select"
                        className="form-item__element form-item__element--select select-category"
                        required
                        // value={category}
                        // onChange={handlerSelectCategory}
                      >
                        <option disabled selected value="">
                          Select Category
                        </option>
                        <option value="Web UI">Web UI</option>
                        <option value="Mobile UI">Mobile UI</option>
                        <option value="Design System">Design System</option>
                      </select>
                    </div>
                  </div>
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

            {/* table here  */}

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
              {loading && (
                <tbody style={{ height: 320 }}>
                  <td colSpan="7" className="text-center">
                    <div className="d-flex justify-content-center mb-4">
                      <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div className="text-center loading-text">Wait a moment.</div>
                  </td>
                </tbody>
              )}
              {!loading &&
                kitsData.map((item, index) => (
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
                      <td>{item.data.productName}</td>
                      <td className="max-description">
                        {item.data.productDescription.length > maxLengthDesc
                          ? `${item.data.productDescription.substring(
                              0,
                              maxLengthDesc
                            )}...`
                          : item.data.productDescription}
                      </td>
                      <td>{item.id}</td>
                      <td>{item.data.productName}</td>
                      <td>
                        <span className="status-badges available">
                          AVAILABLE
                        </span>
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
                              <button className="dropdown-item">
                              <Link to={`/admin/update-kit/${item.id}`} style={{ color: "#000", textDecoration: "none" }}>Update</Link>
                              </button>
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
                ))}
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
