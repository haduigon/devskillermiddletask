type Set = {
  name: string;
  email: string;
  checked: boolean;
  selected: string;
  message: string;
};

const defaultSet: Set = {
  name: '',
  email: '',
  checked: false,
  selected: '',
  message: '',
};

type Props = {
  onSubmit: () => void,
  onClick: () => void
}

const ContactForm: React.FC<Props> = () => {
  console.log(defaultSet);

  const selectProps = [
    { id: 1, label: 'First label' },
    { id: 2, label: 'Second label' },
    { id: 3, label: 'Third label' },
  ];

  console.log(selectProps);

  return (
    <form>
      <div className="flex-column justify-center">
        <div className="flex justify-center h-screen">
          <div className="flex-column">
            <div className="mt-2">
              <div className="flex justify-end ">
                <button>Login</button>
              </div>
            </div>

            <label className="flex mt-2 justify-left items-center mt-40">
              <input
                type="text"
                className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="ml-2">Input your name</p>
            </label>

            <label className="flex mt-2 justify-left items-center">
              <input
                type="email"
                className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="ml-2">Input your email</p>
            </label>

            <label className="flex mt-2 justify-left items-center">
              <textarea className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="ml-2">Input your message</p>
            </label>

            <div className="flex">
              <label className="flex mt-2 justify-left items-center">
                <input
                  name='radio'
                  type="radio"
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="ml-2">Var A</p>
              </label>

              <label className="flex mt-2 justify-left items-center ml-2">
                <input
                  name='radio'
                  type="radio"
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="ml-2">Var B</p>
              </label>

              <label className="flex mt-2 justify-left items-center ml-2">
                <input
                  name='radio'
                  type="radio"
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="ml-2">Var C</p>
              </label>

            </div>

            <select className="mt-2">
              <option className="text-left">Please select</option>
              {selectProps.map((prop) => (
                <option key={prop.id} value={prop.id} className="text-left">
                  {prop.label}
                </option>
              ))}
            </select>

            <label className="flex mt-2 justify-left items-center">
                <input
                  type="checkbox"
                  className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="ml-2">I agree with terms and conditions</p>
            </label>

            <button
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send form
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
