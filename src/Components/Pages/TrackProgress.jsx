import React from 'react'
import { FaCheckCircle, FaTruck, FaShippingFast, FaBoxOpen } from 'react-icons/fa'

const steps = [
  { label: "Order Confirmed", icon: <FaCheckCircle /> },
  { label: "Picked by Courier", icon: <FaTruck /> },
  { label: "On the Way", icon: <FaShippingFast /> },
  { label: "Ready for Pickup", icon: <FaBoxOpen /> },
];

const TrackProgress = () => {
  const currentStep = 1;

  return (
    <div className=" mt-5">

      <div className="relative ">
        <div className="flex justify-between items-center ">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1 z-10">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full  text-xl 
                ${index <= currentStep ? "green-500" : "gray-300"}`}>
                {step.icon}
              </div>
              <p className={`mt-2 text-sm text-center w-[100px] 
                ${index <= currentStep ? "text-green-700 font-semibold whitespace-nowrap" : "text-gray-500 whitespace-nowrap"}`}>
                {step.label}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute top-[20px] left-[5%] right-[5%] h-1 gray-300 z-0 rounded"></div>

        <div
          className="absolute top-[20px] left-[5%] h-1 green-500 z-10 rounded transition-all duration-700 ease-in-out"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 90}%`
          }}
        ></div>
      </div>
    </div>
  )
}

export default TrackProgress
