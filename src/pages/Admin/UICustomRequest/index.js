import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./uiCustomRequest.scss";
import idrFormat from "utils/formatNumber";
import usdFormat from "utils/formatUSD";
import AdminHeader from "pages/Admin/AdminHeader/index";
import FormText from "components/Form/FormText/FormText";
import { getCustomKits } from "config/redux/action";
import PageNotFound from "pages/PageNotFound";

export default function UIDownloaded() {
  const [search, setSearch] = useState("");
  const { loading, kitsCustom } = useSelector((state) => ({
    loading: state.utils.isLoading,
    kitsCustom: state.kits.kitsCustom,
  }));
  const dispatch = useDispatch();
  let totalRequest = kitsCustom.length;

  const handlerSeaarch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(getCustomKits());
    // eslint-disable-next-line
  }, []);

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
            <div className="title-collection">Request Custom List</div>
            <div className="total-collection">Total: {totalRequest}</div>
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
                          Filter Category
                        </option>
                        <option value="Web UI">Web UI</option>
                        <option value="Mobile UI">Mobile UI</option>
                        <option value="Design System">Design System</option>
                      </select>
                    </div>
                  </div>
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
                          Filter Status
                        </option>
                        <option value="Confirm">Confirm</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* table here */}

            <table class="frame-table bg-white mt-3 mb-5 table">
              <thead>
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">UNIQUE CODE - DATE</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">OPTION</th>
                </tr>
              </thead>
              {loading && (
                <tbody style={{ height: 320 }}>
                  <td colSpan="7" className="text-center">
                    <div className="d-flex justify-content-center mb-4">
                      <div
                        className="spinner-border text-primary"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div className="text-center loading-text">
                      Wait a moment.
                    </div>
                  </td>
                </tbody>
              )}
              {!loading &&
                kitsCustom.map((item, index) => (
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
                      {item.data.thisKit.map((kitItem, index) => (
                        <>
                          <td key={index}>{kitItem.data.productName}</td>
                          <td className="max-description">
                            {kitItem.data.category}
                          </td>
                          <td>{`${idrFormat(
                            kitItem.data.idrPrice
                          )} - ${usdFormat(kitItem.data.usdPrice)}`}</td>
                          <td>{`${item.data.unique} - ${kitItem.data.date}`}</td>
                          <td>
                            <span className="status-badges available">
                              {item.data.status}
                            </span>
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
                                    href={`/preview/custom/${item.id}`}
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
                        </>
                      ))}
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
