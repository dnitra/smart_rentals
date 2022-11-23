import { property } from "lodash";
import React from "react";
import { useState } from "react";
import { useCustomContexts } from "../../../../Context/ContextsProvider";

function DashboardReports() {
    const [detailsShown, setDetailsShown] = useState(false);
    const [active, setActive] = useState(false);
    // const [toggle, setToggle] = useState(true)
    const [wrapped, setWrapped] = useState(true);
    const { user, userData, changeUserData } = useCustomContexts();

    const wrapReport = () => {
        // console.log(e);
        setWrapped(!wrapped);
    };
    console.log(userData);
    return (
        <div className="dashboard__reports-container">
            <div className="tasks">
                <p>&#9776;</p>
                <p>Tasks</p>
            </div>
            <div>
                {userData.rented_properties
                    ? userData.rented_properties
                          .filter((property) => {
                              return property.pivot.role_id == 1;
                          })
                          .map((property, i) => {
                              return property.reports.length > 0 ? (
                                  <div key={property.id}>
                                      <button
                                          data-index={i}
                                          className={
                                              "dashboard__reports-container__links" +
                                              (active === property.id
                                                  ? "--active"
                                                  : "")
                                          }
                                          onClick={(e) => {
                                              console.log(e.target);
                                              //   setDetailsShown(property.name);
                                              setActive(property.id);
                                              wrapReport();
                                          }}
                                      >
                                          {property.name} ,{" "}
                                          {property.address.street_and_number}
                                      </button>
                                      <div
                                          className={
                                              active === property.id && !wrapped
                                                  ? "dashboard__report dashboard__report--show"
                                                  : "dashboard__report"
                                          }
                                      >
                                          {property.reports.map((report, i) => {
                                              if (report.active != "0") {
                                                  return (
                                                      <div
                                                          className="dashboard__report--info"
                                                          key={i}
                                                      >
                                                          <div className="dashboard__report--info__current">
                                                              <p className="title">
                                                                  Accesory:
                                                              </p>
                                                              <p>
                                                                  {
                                                                      report.accessory_id
                                                                  }
                                                              </p>
                                                          </div>
                                                          <div className="dashboard__report--info__current">
                                                              <p className="title">
                                                                  Subject:
                                                              </p>
                                                              <p>
                                                                  {
                                                                      report.subject
                                                                  }
                                                              </p>
                                                          </div>
                                                          <div className="dashboard__report--info__current">
                                                              <p className="title">
                                                                  Detils:
                                                              </p>
                                                              <p>
                                                                  {
                                                                      report.details
                                                                  }
                                                              </p>
                                                          </div>
                                                      </div>
                                                  );
                                              }
                                          })}
                                      </div>
                                  </div>
                              ) : (
                                  ""
                              );
                          })
                    : ""}
            </div>
        </div>
    );
}

export default DashboardReports;
