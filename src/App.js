import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2022, 12, 25),
    },
    { id: "e2", title: "New TV", amount: 5600, date: new Date(2022, 11, 6) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 6000,
      date: new Date(2023, 2, 3),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 3500,
      date: new Date(2023, 1, 12),
    },
  ];

  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
