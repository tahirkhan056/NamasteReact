const Contact = () => {
  const people = [
    {
      name: "John",
      course: [
        { name: "React Js", type: "Paid" },
        { name: "Javascript", type: "Free" },
      ],
    },
    {
      name: "Jane",
      course: [
        { name: "Angular", type: "Paid" },
        { name: "TypeScript", type: "Free" },
      ],
    },
  ];

  return (
    <div className="mt-20">
      {people.map((p, i) => {
        return (
          <div key={i}>
            <h1>{p.name}'s courses</h1>
            <div>
              {p.course.map((c, i) => {
                return (
                  <p key={i}>
                    {" "}
                    {c.name} is {c.type}{" "}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
