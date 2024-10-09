import './App.css';
import ContactForm from './ContactForm';
import Message from './Message';

function App() {

   function handleFormSUbmit() {
      
   }
  
  function modalWindowHandler() {
     
   }

  return (
    <>
      <ContactForm
        onSubmit={handleFormSUbmit}
        onClick={modalWindowHandler}
      />
      <Message />
    </>
  );
}

export default App;
