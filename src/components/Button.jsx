import PropTypes from 'prop-types';

function Button({ label, onClick, ...rest }) {
  return (
    <button
      className="px-4 py-2 rounded border border-secondary text-secondary hover:text-white hover:bg-secondary text-center transition-all duration-300 w-24 disabled:text-shade-mlight disabled:border-shade-mlight disabled:bg-white"
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
