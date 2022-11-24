import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../../owner-portal/Components/Dashboard/Listings/Apartment/Card";
import "./Styles/PublicListings.scss";
import { useCustomContexts } from "../../Context/ContextsProvider";
import BuildingPlaceholder from "../../../../../resources/img/building-placeholder.jpg";
import likes from "../../../../img/Icons/likes.svg";
import views from "../../../../img/Icons/views.svg";
import ApplicationForm from "../Components/Listings/ApplicationForm";
import { property } from "lodash";

export default function PublicListings() {
    const { user, userData, changeUserData } = useCustomContexts();
    const [properties, setProperties] = useState([]);
    // const [form, setForm] = useState(false);
    const [sendform, sendSetForm] = useState([]);

    const [openForms, setOpenForms] = useState([]);

    const showForm = (e, propertyId) => {
        e.preventDefault();
        if (!openForms.includes(propertyId)) {
            const newOpenForms = [...openForms];
            newOpenForms.push(propertyId);
            setOpenForms(newOpenForms);
        }
    };

    useEffect(() => {
        getProperties();
    }, []);

    const getProperties = async () => {
        try {
            const response = axios.get("publicListings/show");

            console.log(response.data);
            setProperties(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const sendingForm = async () => {
        try {
            const response = axios.get("");
            sendSetForm(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="pubListings">
            <div className="tiles">
                {userData.rented_properties
                    ? userData.rented_properties
                          .filter(
                              (rented_property) =>
                                  rented_property.published == 1 &&
                                  rented_property.pivot.role_id == 1
                          )
                          .map((property, index) => {
                              return (
                                  <Card key={property.id}>
                                      <div className="tile">
                                          <div className="tiles-content">
                                              <div className="tiles-picture">
                                                  <div className="tiles-picture__big">
                                                      {property.images
                                                          .length === 0 ? (
                                                          <img
                                                              className="tileImg"
                                                              src={
                                                                  BuildingPlaceholder
                                                              }
                                                              alt="building placeholder"
                                                          />
                                                      ) : (
                                                          <img
                                                              className="tileImg"
                                                              src={
                                                                  "/" +
                                                                  property
                                                                      .images[0]
                                                                      ?.image_url
                                                              }
                                                              alt="property"
                                                          />
                                                      )}
                                                  </div>
                                                  <div className="tiles-picture__small">
                                                      <img
                                                          className="tileIcon"
                                                          src={views}
                                                          alt="views"
                                                      />

                                                      <img
                                                          className="tileIcon"
                                                          src={likes}
                                                          alt="likes"
                                                      />
                                                  </div>
                                              </div>

                                              <div className="tile-address">
                                                  <h3
                                                      key={index}
                                                      className="tile-address__heading"
                                                  >
                                                      {
                                                          property.address
                                                              .street_and_number
                                                      }
                                                      <br></br>
                                                      {
                                                          property.address
                                                              .zip_code
                                                      }
                                                      <br></br>
                                                      {property.address.city}
                                                      <br />
                                                  </h3>
                                                  {openForms.includes(
                                                      property.id
                                                  ) ? (
                                                      ""
                                                  ) : (
                                                      <button
                                                          type="button"
                                                          className="tile-btn"
                                                          onClick={(e) => {
                                                              showForm(
                                                                  e,
                                                                  property.id
                                                              );
                                                          }}
                                                      >
                                                          Apply
                                                      </button>
                                                  )}
                                              </div>
                                              <div className="tiles-form"></div>
                                          </div>
                                          {openForms.includes(property.id) ? (
                                              <div className="">
                                                  <ApplicationForm
                                                      select={showForm}
                                                  />
                                                  <button
                                                      className="tile-btn"
                                                      onClick={sendingForm}
                                                  >
                                                      Submit
                                                  </button>
                                              </div>
                                          ) : (
                                              ""
                                          )}
                                      </div>
                                  </Card>
                              );
                          })
                    : ""}
            </div>
        </div>
    );
}
