import React, { useState } from "react";

import img from "../../assets/img/empty-user.png";
import ReviewModals from "../../Components/Modals/ReviewModals";

import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

const Section3b = ({ agentInfo, agentId }) => {
  const [reviewModal, setReviewModal] = useState(false);
  return (
    <div className="section-3b mx-[13px] md:mx-[30px] lg:mx-[70px] py-[30px]">
      <div className="flex justify-between items-center mb-3">
        <p className="text-[20px] sm:text-[30px] font-[700]">
          Ratings & reviews ({agentInfo?.reviews?.length})
        </p>
        <button
          className="bg-[var(--main-text-color)] text-white w-[150px] h-[35px] rounded text-[13px] font-[600] hover:scale-[1.01] active:scale-[0.995]"
          onClick={() => setReviewModal(true)}
        >
          Write a Review ?
        </button>
      </div>
      {agentInfo?.reviews?.length > 0 && (
        <div className="flex flex-col py-5 gap-5">
          {agentInfo?.reviews
            ?.slice()
            .reverse()
            .map((item, index) => (
              <div className="flex gap-5 border-b border-gray-300 pb-2" key={index}>
                <div className="w-[50px]">
                  <img src={img} width={"100%"} />
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-[14px] font-[600]">{item?.user?.name}</p>
                  <p className="text-[12px] text-gray-400 font-[500]">
                    {new Date().toDateString() === new Date(item.createdAt).toDateString() ? "Today" : new Date(item.createdAt).toDateString()}
                  </p>
                  <div className="flex items-center gap-1 my-2">
                    {[...Array(Math.floor(item?.actualRating))].map(
                      (_, index) => (
                        <IoMdStar
                          className="text-[23px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      )
                    )}
                    {item?.actualRating % 1 !== 0 && (
                      <IoMdStarHalf className="text-[23px] text-[var(--main-text-color)]" />
                    )}
                    {[...Array(5 - Math.ceil(item?.actualRating))].map(
                      (_, index) => (
                        <IoMdStarOutline
                          className="text-[23px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      )
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-[12px] w-[130px]">Local Knowledge</p>
                    <div className="flex items-center gap-1">
                      {[
                        ...Array(
                          Math.floor(item?.otherRatings?.localKnowledge)
                        ),
                      ].map((_, index) => (
                        <IoMdStar
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                      {item?.otherRatings?.localKnowledge % 1 !== 0 && (
                        <IoMdStarHalf className="text-[16px] text-[var(--main-text-color)]" />
                      )}
                      {[
                        ...Array(
                          5 - Math.ceil(item?.otherRatings?.localKnowledge)
                        ),
                      ].map((_, index) => (
                        <IoMdStarOutline
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 my-1">
                    <p className="text-[12px] w-[130px]">Process expertise</p>
                    <div className="flex items-center gap-1">
                      {[
                        ...Array(
                          Math.floor(item?.otherRatings?.processExpertise)
                        ),
                      ].map((_, index) => (
                        <IoMdStar
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                      {item?.otherRatings?.processExpertise % 1 !== 0 && (
                        <IoMdStarHalf className="text-[16px] text-[var(--main-text-color)]" />
                      )}
                      {[
                        ...Array(
                          5 - Math.ceil(item?.otherRatings?.processExpertise)
                        ),
                      ].map((_, index) => (
                        <IoMdStarOutline
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 my-1">
                    <p className="text-[12px] w-[130px]">Responsiveness</p>
                    <div className="flex items-center gap-1">
                      {[
                        ...Array(
                          Math.floor(item?.otherRatings?.responsiveness)
                        ),
                      ].map((_, index) => (
                        <IoMdStar
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                      {item?.otherRatings?.responsiveness % 1 !== 0 && (
                        <IoMdStarHalf className="text-[16px] text-[var(--main-text-color)]" />
                      )}
                      {[
                        ...Array(
                          5 - Math.ceil(item?.otherRatings?.responsiveness)
                        ),
                      ].map((_, index) => (
                        <IoMdStarOutline
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 my-1">
                    <p className="text-[12px] w-[130px]">Negotiation skills</p>
                    <div className="flex items-center gap-1">
                      {[
                        ...Array(
                          Math.floor(item?.otherRatings?.negotiationSkill)
                        ),
                      ].map((_, index) => (
                        <IoMdStar
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                      {item?.otherRatings?.negotiationSkill % 1 !== 0 && (
                        <IoMdStarHalf className="text-[16px] text-[var(--main-text-color)]" />
                      )}
                      {[
                        ...Array(
                          5 - Math.ceil(item?.otherRatings?.negotiationSkill)
                        ),
                      ].map((_, index) => (
                        <IoMdStarOutline
                          className="text-[16px] text-[var(--main-text-color)]"
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[14px] mt-3">{item?.description}</p>
                </div>
              </div>
            ))}
        </div>
      )}
      <ReviewModals
        agentId={agentId}
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        agentInfo={agentInfo}
      />
    </div>
  );
};

export default Section3b;
