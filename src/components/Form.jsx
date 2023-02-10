import PropTypes from 'prop-types';

function TextField({ id, label, ...rest }) {
  return (
    <div class="mb-3 pt-0">
      <label htmlFor={id} className="text-secondary font-medium">
        {label}
      </label>
      <input
        id={id}
        className="mt-1 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
        {...rest}
      />
    </div>
  );
}

function Form({ onChange }) {
  return (
    <div className="xl:container mx-auto my-8">
      <div className="px-6 my-4">
        <p className="text-2xl font-medium underline">Search</p>
      </div>
      <div className="flex justify-between items-center my-4 sm:flex-wrap px-6">
        <div className="lg:w-1/2 xl:w-1/3 sm:w-full">
          <TextField
            label="Status"
            id="capsule-status"
            type="text"
            placeholder="Search Status"
            onChange={e => onChange({ value: e.target.value, type: 'status' })}
          />
        </div>

        <div className="lg:w-1/2 lg:pl-4 xl:w-1/3 sm:w-full">
          <TextField
            label="Type"
            id="capsule-type"
            type="text"
            placeholder="Search Type"
            onChange={e => onChange({ value: e.target.value, type: 'type' })}
          />
        </div>

        <div className="lg:w-1/2 xl:w-1/3 xl:pl-4 sm:w-full">
          <TextField
            label="Original Launch"
            id="capsule-launch"
            type="text"
            placeholder="Search Original Launch"
            onChange={e =>
              onChange({ value: e.target.value, type: 'original_launch' })
            }
          />
        </div>
      </div>
    </div>
  );
}

TextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
};

Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
