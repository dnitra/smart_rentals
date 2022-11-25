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
    const [formData, setFormData] = useState({});

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
            const response = await axios.get("/publicListings/show");
            console.log(response.data);
            setProperties(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const sendingForm = async () => {
        try {
            const response = await axios.post(
                `api/application/sendEmail/${openForms.slice(-1)}`,
                { formData }
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    return (
        <div className="pubListings">
            <div className="tiles">
                {properties
                    ? properties.map((property, index) => {
                          return (
                              <Card key={property.id}>
                                  <div className="tile">
                                      <div className="tiles-content">
                                          <div className="tiles-picture">
                                              <div className="tiles-picture__big">
                                                  {property.images.length ===
                                                  0 ? (
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
                                                              property.images[0]
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

                                          <div
                                              className={
                                                  "tile-address" +
                                                  (openForms.includes(
                                                      property.id
                                                  )
                                                      ? " tile-address_open-form"
                                                      : "")
                                              }
                                          >
                                              <h3
                                                  key={index}
                                                  className="tile-address__heading"
                                              >
                                                  {
                                                      property.address
                                                          .street_and_number
                                                  }
                                                  <br></br>
                                                  {property.address.zip_code}
                                                  <br></br>
                                                  {property.address.city}

                                                  <br />
                                              </h3>
                                              <h3 className="tile-address__price">
                                                  Monthly price:
                                                  <br />
                                                  {new Intl.NumberFormat(
                                                      "de-DE",
                                                      {
                                                          style: "currency",
                                                          currency: "CZK",
                                                      }
                                                  ).format(property.price)}
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
                                          {openForms.includes(property.id) ? (
                                              <div className="tiles-form">
                                                  <div className="listings-form__form">
                                                      <ApplicationForm
                                                          setFormData={
                                                              setFormData
                                                          }
                                                      />
                                                      <button
                                                          className="tile-btn"
                                                          onClick={sendingForm}
                                                          type="button"
                                                      >
                                                          Send application
                                                      </button>
                                                  </div>
                                              </div>
                                          ) : (
                                              ""
                                          )}
                                      </div>
                                  </div>
                              </Card>
                          );
                      })
                    : ""}
            </div>
        </div>
    );
}
