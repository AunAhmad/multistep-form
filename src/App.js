import FormState from "./context/formState";
import UserForm from "./components/UserForm";
function App() {
  return (
    <FormState>
      <div className="App">
        <UserForm />
      </div>
    </FormState>
  );
}

export default App;
