import "./index.css";
import React, { useState } from "react";
import { Modal } from "antd";
import { Rating } from "@material-tailwind/react";
import { createReview } from "../../Api/api";
import toast from "react-hot-toast";

const ReviewModals = ({ reviewModal, setReviewModal, agentInfo, agentId }) => {
  const [loader, setLoader] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [otherRating, setOtherRating] = useState({
    localKnowledge: 0,
    processExpertise: 0,
    responsiveness: 0,
    negotiationSkill: 0
  });
  const [description, setDescription] = useState("");
  const [pointOfView, setPointOfView] = useState("");
  const [yearOfService, setYearOfService] = useState("");
  const [completeAddress, setCompleteAddress] = useState("");
  const fn_submit = async () => {
    const data = {
      actualRating: ratingValue,
      otherRatings: otherRating,
      description,
      pointOfView,
      yearOfService,
      completeAddress,
      user: JSON.parse(localStorage.getItem("user"))._id,
      agent: agentId,
    };
    setLoader(true);
    const result = await createReview(data);
    if (result?.status === 200) {
      toast.success("Review Published!");
      setReviewModal(false);
      setLoader(false);
      setRatingValue(0);
      setOtherRating({});
      setDescription("");
      setPointOfView("");
      setYearOfService("");
      setCompleteAddress("");
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    }else{
      setLoader(false);
      toast.error("Fill all Fields")
    }
  };
  return (
    <Modal
      title={`Write Review`}
      style={{ top: 20, fontFamily: "Montserrat" }}
      open={reviewModal}
      onOk={() => setReviewModal(false)}
      onCancel={() => setReviewModal(false)}
      footer={null}
    >
      <hr />
      <div className="review-modal my-3">
        <div className="text-[13px] font-[600]">
          <p>
            How likely are you to recommend{" "}
            <span className="capitalize text-[var(--main-text-color)]">
              {agentInfo.name}
            </span>
          </p>
          <Rating value={ratingValue} onChange={(value) => setRatingValue(value)} />
        </div>
        <div className="other-reviews my-1">
          <div className="text-[12px] font-[500] flex items-center">
            <p className="w-[130px]">Local Knowledge</p>
            <Rating
              value={otherRating?.localKnowledge}
              onChange={(value) =>
                setOtherRating({ ...otherRating, localKnowledge: value })
              }
            />
          </div>
          <div className="text-[12px] font-[500] flex items-center">
            <p className="w-[130px]">Process Expertise</p>
            <Rating
              value={0}
              onChange={(value) =>
                setOtherRating({ ...otherRating, processExpertise: value })
              }
            />
          </div>
          <div className="text-[12px] font-[500] flex items-center">
            <p className="w-[130px]">Responsiveness</p>
            <Rating
              value={otherRating?.responsiveness}
              onChange={(value) =>
                setOtherRating({ ...otherRating, responsiveness: value })
              }
            />
          </div>
          <div className="text-[12px] font-[500] flex items-center">
            <p className="w-[130px]">Negotiation Skill</p>
            <Rating
              value={otherRating?.negotiationSkill}
              onChange={(value) =>
                setOtherRating({ ...otherRating, negotiationSkill: value })
              }
            />
          </div>
        </div>
        <div className="mt-2">
          <p className="text-[13px] font-[600]">
            Describe in detail your experience with{" "}
            <span className="capitalize text-[var(--main-text-color)]">
              {agentInfo.name}
            </span>
          </p>
          <textarea
            className="text-[12px] w-full border rounded border-gray-300 h-[100px] focus:outline-none p-2 font-[500]"
            placeholder="Include details to help others decide if they should contact this person..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="other-infos mt-4 flex flex-col gap-2">
          <div className="flex gap-2">
            <p className="text-[12px] font-[600] w-[120px]">
              Primary point of contact
            </p>
            <div>
              <p className="flex items-center text-[12px] font-[500] gap-2">
                <input
                  type="radio"
                  value={agentInfo.name}
                  name="primary-point-of-contact"
                  id="contact-agent-name"
                  onChange={(e) => setPointOfView(e.target.value)}
                />
                <label
                  htmlFor="contact-agent-name"
                  className="capitalize text-[var(--main-text-color)]"
                >
                  {agentInfo.name}
                </label>
              </p>
              <p className="flex items-center text-[12px] font-[500] gap-2">
                <input
                  type="radio"
                  value={`an associate of ${agentInfo.name}`}
                  name="primary-point-of-contact"
                  id="contact-associate-agent"
                  onChange={(e) => setPointOfView(e.target.value)}
                />
                <label htmlFor="contact-associate-agent">
                  An associate of{" "}
                  <span className="capitalize text-[var(--main-text-color)]">
                    {agentInfo.name}
                  </span>
                </label>
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[12px] font-[600] w-[120px]">Year of Service</p>
            <input
              placeholder="YYYY"
              className="border border-gray-300 rounded px-2 h-[30px] text-[12px] flex-1 focus:outline-none font-[500]"
              onChange={(e) => setYearOfService(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[12px] font-[600] w-[120px]">Complete Address</p>
            <input
              placeholder="Enter Address Here..."
              className="border border-gray-300 rounded px-2 h-[30px] text-[12px] flex-1 focus:outline-none font-[500]"
              onChange={(e) => setCompleteAddress(e.target.value)}
            />
          </div>
        </div>
        <button
          className={`${loader ? "bg-[var(--main-text-color-small-blur)] cursor-not-allowed" : "bg-[var(--main-text-color)] cursor-pointer"} text-white text-[13px] font-[600] w-full mt-5 hover:scale-[1.01] active:scale-[0.995] h-[35px] rounded`}
          disabled={loader}
          onClick={fn_submit}
        >
          {loader ? "Loading..." : "Submit Review"}
        </button>
      </div>
    </Modal>
  );
};

export default ReviewModals;
