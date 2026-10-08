import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

export default function RecipeItems() {
  const allRecipes = useLoaderData();

  console.log(allRecipes);

  return (
    <>
      <div className="card-container">
        {allRecipes?.map((item, index) => (
          <div key={index} className="card">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHJlY2lwZXN8ZW58MHx8MHx8&w=1000&q=80"
              width="120"
              height="100"
              alt="Food"
            />

            <div className="card-body">
              <div className="title">{item.title}</div>
              <div className="icons">
                <div className="timer">
                  <BsFillStopwatchFill />
                  30 min
                </div>
                <FaHeart />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
