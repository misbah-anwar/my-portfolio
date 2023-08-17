import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            About
          </p>
        </div>

        <p className="text-xl mt-6 text-justify">
        As an aspiring AI/ML engineer and data scientist,
        I have experience with Python libraries like NumPy, 
        Pandas, Scikit-Learn, Seaborn, and Matplotlib. 
        I have used these libraries to manipulate data, 
        build ML models, and visualize results.
        Currently, I am passionate about learning and mastering TensorFlow, 
        an open-source library for numerical computation and ML. 
        I am excited to explore its capabilities in deep learning, neural networks, 
        and natural language processing. 
        </p>

        <br />

        <p className="text-xl">     
          I am constantly seeking opportunities to expand my skill set 
          and stay up-to-date with the latest advancements in the field. 
          I am excited about the potential of AI and ML to revolutionize industries 
          and improve lives, and I am committed to continuous learning and growth in 
          this dynamic field.
        </p>
      </div>
    </div>
  );
};

export default About;
