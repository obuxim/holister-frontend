import React from "react";
import PageHeading from "../components/Homepage/PageHeading";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import SingleItem from "../components/Buy4u/SingleItem";
const api_url = process.env.API_URL || "http://localhost:8000/api/";

const buy4u = ({ cities, delivery_modes, packaging_types, pricings }) => {
  const [deliveryCity, setDeliveryCity] = useState({});
  const [deliveryAreas, setDeliveryAreas] = useState([]);
  const [itemName, setItemName] = useState();
  const [itemQty, setItemQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(0.0);
  const [buy4uType, setBuy4uType] = useState("anywhere");
  const [items, setItems] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.items = items;
    setItems([]);
    console.log(data);
  };
  const updateDeliveryAreas = (deliveryCityId) => {
    const cityObj = cities.filter((city) => city.id == deliveryCityId)[0];
    setDeliveryCity(cityObj);
    setDeliveryAreas(cityObj.areas);
  };
  const addItem = () => {
    const item = {
      name: itemName,
      qty: itemQty,
      price: itemPrice,
    };
    setItems([...items, item]);
    setItemName("");
    setItemQty(1);
    setItemPrice(0.0);
  };
  return (
    <>
      <PageHeading title="BUY4U" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row">
            <ul className="p-0 nav nav-pills" id="pills-tab" role="tablist">
              <li
                onClick={(e) => setBuy4uType("anywhere")}
                className="mb-3 nav-item col-6 button success text-center"
                role="presentation"
              >
                <label
                  className={`h-100 d-flex align-items-center nav-link fs-6 py-3 ${
                    buy4uType == "anywhere" && "active"
                  }`}
                >
                  From Anywhere
                </label>
              </li>
              <li
                onClick={(e) => setBuy4uType("preferred")}
                className="mb-3 nav-item col-6 button success text-center"
                role="presentation"
              >
                <label
                  className={`h-100 d-flex align-items-center nav-link fs-6 py-3 ${
                    buy4uType == "preferred" ? "active" : ""
                  }`}
                >
                  From Preferred Shop
                </label>
              </li>
            </ul>
            <div className="col-7">
              {buy4uType == "preferred" ? (
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="preferred_shop_name"
                      ref={register}
                      placeholder="Preferred shop name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="preferred_shop_address"
                      ref={register}
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Preferred Shop Address"
                    ></textarea>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <select
                        onChange={(e) => {
                          updateDeliveryAreas(e.target.value);
                        }}
                        name="city_id"
                        ref={register}
                        className="form-control"
                      >
                        <option value="">Delivery City</option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <select
                        name="area_id"
                        ref={register}
                        className="form-control"
                      >
                        <option value="">Delivery Area</option>
                        {deliveryAreas.map((area) => (
                          <option key={area.id} value={area.id}>
                            {area.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        ref={register}
                        className="form-control"
                        placeholder="Delivery Address"
                        name="delivery_address"
                        cols="30"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    type="text"
                    ref={register}
                    name="receiver_name"
                    placeholder="Receiver Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    ref={register}
                    name="receiver_phone_number"
                    placeholder="Receiver Phone Number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <select
                    name="delivery_mode"
                    ref={register}
                    className="form-control"
                  >
                    <option value="">Delivery Mode</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-5 row">
              <div className="col-5">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="form-control"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <input
                    type="number"
                    value={itemQty}
                    onChange={(e) => setItemQty(e.target.value)}
                    placeholder="QTY"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <input
                    type="number"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                    step="any"
                    placeholder="Price"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-1">
                <div className="form-group">
                  <a className="btn btn-custom-primary" onClick={addItem}>
                    <FaPlus />
                  </a>
                </div>
              </div>
              {items.map((item, index) => (
                <SingleItem item={item} key={index} />
              ))}
            </div>
            <div className="col-12">
              <div className="form-group">
                <input type="submit" className="btn btn-custom-primary w-100" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default buy4u;

export const getStaticProps = async (context) => {
  // Get City & Area
  const cityRes = await fetch(`${api_url}city/get_with_areas`);
  console.log(cityRes);
  const cityJson = await cityRes.json();
  // Get Delivery Mode
  const deliveryModeRes = await fetch(`${api_url}delivery_mode`);
  const deliveryModeJson = await deliveryModeRes.json();
  // Get Packaging Type
  const packagingTypeRes = await fetch(`${api_url}packaging_type`);
  const packagingTypeJson = await packagingTypeRes.json();
  return {
    props: {
      cities: cityJson,
      delivery_modes: deliveryModeJson.data,
      packaging_types: packagingTypeJson.data,
      pricings: [
        {
          id: 1,
          courier_type_id: 1,
          weight: 1,
          delivery_mode_id: 1,
          price: 50,
        },
        {
          id: 1,
          courier_type_id: 1,
          weight: 2,
          delivery_mode_id: 1,
          price: 60,
        },
      ],
    },
  };
};
