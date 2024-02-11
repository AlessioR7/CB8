const httpGET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  data.forEach((user) => {
    user.active = user.username.includes("r");
  });
  return data;
};

export default httpGET;
