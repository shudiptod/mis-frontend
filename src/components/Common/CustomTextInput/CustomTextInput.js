const CustomTextInput = ({ label, name, type = "text" }) => {
  return (
    <div>
      <label className="text-black-800">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
      />
    </div>
  );
};

export default CustomTextInput;
