const httpGET = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  data.forEach((user) => {
    user.active = user.username.includes("r"); // In questo modo aggiungo ad ogni utente un altra chiave che si chiamerà "active" e ho deciso che sarà "true" se l'username contine la lettera "r" altrimenti sarà "false"
  });
  return data;
};

export { httpGET };
