import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { TfiCommentsSmiley } from "react-icons/tfi";
const ServiceDetails = () => {
  const { id } = useParams();

  const [service, setService] = useState([]);
  const [comments, setComments] = useState([]);
  const data = useLoaderData();

  const handleComment = (e) => {
    e.preventDefault();
    const textInput = e.target.textInput.value;
    setComments([...comments, textInput]);
    e.target.reset();
  };

  useEffect(() => {
    const findByServices = [...data].find((service) => service.id == id);
    setService(findByServices);
  }, [data, id]);

  const {
    image,
    serviceName,
    description,
    pricing,
    rating,
    category,
    counselor,
  } = service;
  return (
    <div className="w-11/12 mx-auto my-4">
      <div className="p-4 border-2 rounded-3xl">
        <img className="rounded-3xl w-full" src={image} alt="" />
      </div>
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-center mb-6">
          Service Name : {serviceName}
        </h2>

        <p className="font-medium text-xl">Counselor Name : {counselor}</p>
        <p className="font-medium text-xl">Category : {category}</p>
        <p className="font-medium text-xl">Pricing: ${pricing}</p>
        <p className="font-medium text-xl">Description: {description}</p>
        <p className="font-medium text-xl">Rating: {rating}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center mb-6">
          Comments and Feedbacks
        </h2>
        <form
          onSubmit={handleComment}
          className="flex flex-col justify-center items-center gap-2"
        >
          <textarea
            placeholder="Write Your Comment"
            name="textInput"
            className="textarea textarea-bordered textarea-lg w-full max-w-lg"
          ></textarea>
          <button className="btn bg-gradient-to-r from-orange-400 to-orange-200 mb-4">
            Comment
          </button>
        </form>
      </div>

      <div>
        {comments?.map((comment, index) => (
          <div key={index} className="flex gap-3 border p-4 rounded-2xl mb-3">
            <div>
                <TfiCommentsSmiley className="text-2xl text-orange-400"/>
            </div>
            <span className="text-xl font-bold"> {comment}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
