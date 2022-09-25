import { useEffect, useState } from "react";

const TransActionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filterTransaction = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransaction(e.target.value);
  };

  // const removeHandler = (id) => {
  //   const filter = transactions.filter((p) => p.id !== id);
  //   setFilteredTnx(filter);
  //   console.log(filter);
  // };

  useEffect(() => {
    filterTransaction(searchItem);
   
  }, [transactions]);

  if (!transactions.length) return <h3>add some transaction</h3>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="Search for Tnx..."
        className="search"
      />
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
              {/* <button onClick={removeHandler}>delete</button> */}
            </div>
          ))
        : "No item match!"}
    </section>
  );
};

export default TransActionComponent;
