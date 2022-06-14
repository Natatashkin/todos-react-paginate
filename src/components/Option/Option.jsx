const Option = ({ title, children }) => (
  <div className="option">
    <h5 className="option-title">{title}</h5>
    {children}
  </div>
);

export default Option;
