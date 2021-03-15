import React, { useState, useEffect } from "react";

const Courier = ({ cities, delivery_modes, packaging_types }) => {
  // Receiver City
  const [receiverCity, setReceiverCity] = useState(0);
  // Sender City
  const [senderCity, setSenderCity] = useState(0);
  // Receiver Areas
  const [receiverAreas, setReceiverAreas] = useState([]);
  // Sender Areas
  const [senderAreas, setSenderAreas] = useState([]);
  // Courier Type
  const [courierType, setCourierType] = useState(
    "Select sender and receiver city!"
  );
  // Eligible Delivery Modes
  const [eligibleDeliveryModes, setEligibleDeliveryModes] = useState([]);

  function senderCityUpdate(cityId) {
    setSenderCity(cityId);
    checkCourierType(cityId, receiverCity);
    const cityObj = cities.filter((city) => city.id == cityId)[0];
    setSenderAreas(cityObj.areas);
  }

  function receiverCityUpdate(cityId) {
    setReceiverCity(cityId);
    checkCourierType(senderCity, cityId);
    const cityObj = cities.filter((city) => city.id == cityId)[0];
    setReceiverAreas(cityObj.areas);
  }

  function checkCourierType(senderCityId, receiverCityId) {
    if (senderCityId == receiverCityId) {
      const modes = delivery_modes.filter(
        (mode) => mode.courier_type == "intracity"
      );
      setEligibleDeliveryModes(modes);
      setCourierType("intracity");
    } else {
      const modes = delivery_modes.filter(
        (mode) => mode.courier_type == "intercity"
      );
      setEligibleDeliveryModes(modes);
      setCourierType("intercity");
    }
  }
  return (
    <div className="container mt-5">
      <form>
        <div className="row justify-content-center">
          <div className="col-12 p-2">
            <h6 className="text-capitalize">Courier Type: {courierType}</h6>
          </div>
          <div className="col-6 row">
            <h6>Sender Address</h6>
            <div className="col-6">
              <select
                className="form-control"
                onChange={(e) => senderCityUpdate(parseInt(e.target.value))}
              >
                <option>Sender City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <select className="form-control">
                <option>Sender Area</option>
                {senderAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 mt-3">
              <textarea
                cols="30"
                rows="3"
                className="form-control"
                placeholder="Senders Street Address, House No"
              ></textarea>
            </div>
          </div>
          <div className="col-6 row">
            <h6>Receiver Address</h6>
            <div className="col-6">
              <select
                className="form-control"
                onChange={(e) => receiverCityUpdate(parseInt(e.target.value))}
              >
                <option>Receiver City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <select className="form-control">
                <option>Receiver Area</option>
                {receiverAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12 mt-3">
              <textarea
                cols="30"
                rows="3"
                className="form-control"
                placeholder="Receiver Street Address, House No"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Courier;