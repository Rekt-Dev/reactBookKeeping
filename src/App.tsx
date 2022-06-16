import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import Expenses from "./routes/Expenses";
import Invoices from "./routes/Invoices";

export default function App() {
  return (
    <div className="App">
      <h1>React Bookeeping </h1>
      <nav
        style={{
          borderBottom: "solid 3px",
          paddingBottom: "2rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/src/routes/expenses.tsx">Expenses</Link> |{" "}
        <Link to="/cash">Cashflow</Link> | <Link to="/debt">Debt</Link>
      </nav>
      <Expenses />
      <Invoices />
    </div>
  );
}
