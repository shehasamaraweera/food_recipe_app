import React from "react";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="left">
          <h1>Food Recipe</h1>

          <h5>
            Welcome to Food Recipe, a place where you can discover delicious
            recipes and make everyday cooking more enjoyable. Whether you are a
            beginner learning to cook or someone who already enjoys spending
            time in the kitchen, you can explore a variety of recipes for
            different tastes and occasions. From simple homemade meals to
            special dishes for family and friends, our collection gives you easy
            ideas to try whenever you need inspiration for your next meal.
            <br />
            <br />
            Cooking is more than simply preparing food. It is a way to explore
            new flavors, share moments with others, and create something you can
            enjoy. Browse through our recipes, discover new dishes, and follow
            the step-by-step instructions to prepare them at home. You can also
            share your own favorite recipes with others and become part of a
            community that enjoys cooking, learning, and trying something new.
          </h5>

          <button>Share your Recipe</button>
        </div>

        <div className="right">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHJlY2lwZXN8ZW58MHx8MHx8&w=1000&q=80"
            width="320"
            height="300"
            alt="Food"
          />
        </div>
      </section>

      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#d4f6e8"
            fillOpacity="1"
            d="M0,160L30,181.3C60,203,120,245,180,240C240,235,300,181,360,165.3C420,149,480,171,540,176C600,181,660,171,720,165.3C780,160,840,160,900,176C960,192,1020,224,1080,213.3C1140,203,1200,149,1260,122.7C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>

    </>
  );
}
