import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Modal } from "antd";
import { ColorRing } from "react-loader-spinner";
import GoogleMapReact from "google-map-react";

import { MdLocationPin } from "react-icons/md";

const MapModal = ({ mapModal, setMapModal }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [btnLoader, setBtnLoader] = useState(false);
  const [center, setCenter] = useState({ lat: 40.7128, lng: -74.006 });
  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
  }, []);
  const handleMapChange = ({ center }) => {
    console.log("center ===> ", center);
    setCenter(center);
  };
  const fn_useLocation = () => {
    setBtnLoader(true);
  }
  return (
    <Modal
      title="Choose Location on Map"
      style={{
        top: 20,
        fontFamily: "Montserrat",
      }}
      open={mapModal}
      onOk={() => setMapModal(false)}
      onCancel={() => setMapModal(false)}
      footer={null}
      width={700}
    >
      <hr />
      {loader ? (
        <div className="flex justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperClass="color-ring-wrapper"
            colors={["#12B7B6", "#12B7B6", "#12B7B6", "#12B7B6", "#12B7B6"]}
          />
        </div>
      ) : (
        <>
          <div style={{ height: "300px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyB7wcJO7zopVeQ8pytTS_wl6EeCHZYofOA",
              }}
              defaultCenter={center}
              defaultZoom={13}
              onChange={handleMapChange}
            >
              <AnyReactComponent />
            </GoogleMapReact>
          </div>
          <button
            className="mt-3 bg-[var(--main-text-color)] w-[100%] rounded text-white font-[700] text-[14px] h-[35px] hover:scale-[1.005] active:scale-[0.995]"
            onClick={fn_useLocation}
          >
            {!btnLoader ? "Use this Location" : "Loading..."}
          </button>
        </>
      )}
    </Modal>
  );
};

export default MapModal;

const AnyReactComponent = () => (
  <div>
    <MdLocationPin className="text-[40px] text-red-600 mt-[-10px]" />
  </div>
);
