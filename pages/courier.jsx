import React from 'react';
import PageHeading from '../components/Homepage/PageHeading';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const api_url = process.env.API_URL || 'http://localhost:8000/api/';

const courier = ({ cities, delivery_modes, packaging_types }) => {
  const [senderAreas, setSenderAreas] = useState([]);
  const [receiverAreas, setReceiverAreas] = useState([]);
  const [courierType, setCourierType] = useState('intracity');
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const updateSenderAreas = (senderCityId) => {
    const cityObj = cities.filter((city) => city.id == senderCityId)[0];
    setSenderAreas(cityObj.areas);
  };
  const updateReceiverAreas = (receiverCityId) => {
    const cityObj = cities.filter((city) => city.id == receiverCityId)[0];
    setReceiverAreas(cityObj.areas);
  };
  return (
    <>
      <PageHeading title='SEND A PARCEL' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container'>
          <div className='row'>
            <ul className='nav nav-pills' id='pills-tab' role='tablist'>
              <li
                onClick={(e) => setCourierType('intracity')}
                className='mb-3 nav-item col-6 button success text-center'
                role='presentation'
              >
                <label className={`nav-link fs-6 py-3 ${courierType == 'intracity' && 'active'}`}>
                  Intra City
                </label>
              </li>
              <li
                onClick={(e) => setCourierType('intercity')}
                className='mb-3 nav-item col-6 button success text-center'
                role='presentation'
              >
                <label
                  className={`nav-link fs-6 py-3 ${courierType == 'intercity' ? 'active' : ''}`}
                >
                  Inter City
                </label>
              </li>
              <input type='hidden' ref={register} name='courier_type' value={courierType} />
            </ul>
            <div className='col-12 col-md-6'>
              <div className='row'>
                <div className='col-12'>
                  <div className='form-group'>
                    <select
                      onChange={(e) => {
                        updateSenderAreas(e.target.value);
                      }}
                      name='sender_city_id_city'
                      ref={register}
                      className='form-control'
                    >
                      <option value=''>Sender City</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='form-group'>
                    <select name='sender_area_id_area' ref={register} className='form-control'>
                      <option value=''>Sender Area</option>
                      {senderAreas.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='form-group'>
                    <textarea
                      ref={register}
                      className='form-control'
                      placeholder='Sender Address'
                      name='sender_address'
                      cols='30'
                      rows='3'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='row'>
                <div className='col-12'>
                  <div className='form-group'>
                    <select
                      onChange={(e) => {
                        updateReceiverAreas(e.target.value);
                      }}
                      name='receiver_city_id_city'
                      ref={register}
                      className='form-control'
                    >
                      <option value=''>Receiver City</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='form-group'>
                    <select name='receiver_city_id_city' ref={register} className='form-control'>
                      <option value=''>Receiver Area</option>
                      {receiverAreas.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='col-12'>
                  <div className='form-group'>
                    <textarea
                      ref={register}
                      className='form-control'
                      placeholder='Receiver Address'
                      name='receiver_address'
                      cols='30'
                      rows='3'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <input
                  type='text'
                  ref={register}
                  name='receiver_name'
                  placeholder='Receiver Name'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  ref={register}
                  name='receiver_phone_number'
                  placeholder='Receiver Phone Number'
                  className='form-control'
                />
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <select name='packaging_type_id' ref={register} className='form-control'>
                  <option value=''>Packaging Type</option>
                  {packaging_types.map((packaging_type) => (
                    <option key={packaging_type.id} value={packaging_type.id}>
                      {packaging_type.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <select name='delivery_mode' ref={register} className='form-control'>
                  <option value=''>Delivery Mode</option>
                </select>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='form-check'>
                <input type='checkbox' className='form-check-input' ref={register} name='fragile' />
                <label className='form-check-label'>Fragile?</label>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  ref={register}
                  name='paid_by_receiver'
                />
                <label className='form-check-label'>Paid by Receiver?</label>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className='form-check'>
                <input type='checkbox' className='form-check-input' ref={register} name='cod' />
                <label className='form-check-label'>Cash on Delivery?</label>
              </div>
            </div>
            <div className='col-12'>
              <div className='form-group'>
                <input type='submit' className='btn btn-custom-primary w-100' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default courier;

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
    },
  };
};
