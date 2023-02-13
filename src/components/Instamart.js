import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible, name }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="text-xl">{title}</h1>
      {isVisible ? (
        <>
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible("")}
          >
            Hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(name)}
        >
          Show
        </button>
      )}
    </div>
  );
};
const Instamart = () => {
  const [visibleConfig, setVisibleConfig] = useState("about");
  return (
    <div>
      <h1 className="text-4xl p-2 m-2"> Instamart</h1>
      <Section
        title={"Abour Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis molestie auctor. Fusce eu nisl ut urna sollicitudin tincidunt. Praesent tincidunt enim gravida mi eleifend dictum. Aliquam condimentum metus nec mauris ornare efficitur. Nullam consequat nibh aliquet lorem imperdiet, eu pellentesque ipsum consectetur. Maecenas et bibendum ex, viverra molestie justo. Aliquam erat volutpat. Integer in sapien sit amet elit vulputate tincidunt nec porta mi. Ut volutpat augue id enim mattis, ac ultricies leo congue. Donec neque magna, varius sit amet auctor non, porta eget nibh. Fusce accumsan orci et aliquam eleifend. Integer sagittis diam gravida accumsan fringilla. Mauris ultricies erat eget fermentum venenatis."
        }
        name={"about"}
        isVisible={visibleConfig == "about"}
        setIsVisible={(val) => {
          setVisibleConfig(val);
        }}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis molestie auctor. Fusce eu nisl ut urna sollicitudin tincidunt. Praesent tincidunt enim gravida mi eleifend dictum. Aliquam condimentum metus nec mauris ornare efficitur. Nullam consequat nibh aliquet lorem imperdiet, eu pellentesque ipsum consectetur. Maecenas et bibendum ex, viverra molestie justo. Aliquam erat volutpat. Integer in sapien sit amet elit vulputate tincidunt nec porta mi. Ut volutpat augue id enim mattis, ac ultricies leo congue. Donec neque magna, varius sit amet auctor non, porta eget nibh. Fusce accumsan orci et aliquam eleifend. Integer sagittis diam gravida accumsan fringilla. Mauris ultricies erat eget fermentum venenatis."
        }
        name={"team"}
        isVisible={visibleConfig == "team"}
        setIsVisible={(val) => {
          setVisibleConfig(val);
        }}
      />
      <Section
        title={"Career"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis molestie auctor. Fusce eu nisl ut urna sollicitudin tincidunt. Praesent tincidunt enim gravida mi eleifend dictum. Aliquam condimentum metus nec mauris ornare efficitur. Nullam consequat nibh aliquet lorem imperdiet, eu pellentesque ipsum consectetur. Maecenas et bibendum ex, viverra molestie justo. Aliquam erat volutpat. Integer in sapien sit amet elit vulputate tincidunt nec porta mi. Ut volutpat augue id enim mattis, ac ultricies leo congue. Donec neque magna, varius sit amet auctor non, porta eget nibh. Fusce accumsan orci et aliquam eleifend. Integer sagittis diam gravida accumsan fringilla. Mauris ultricies erat eget fermentum venenatis."
        }
        name={"career"}
        isVisible={visibleConfig == "career"}
        setIsVisible={(val) => {
          setVisibleConfig(val);
        }}
      />
    </div>
  );
};

export default Instamart;
