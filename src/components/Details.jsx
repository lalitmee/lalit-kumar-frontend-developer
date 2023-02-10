import PropTypes from 'prop-types';
import clsx from 'clsx';

import Button from '@/components/Button';

function DetailItem({ label, value }) {
  return (
    <div
      className={clsx('p-4 ', {
        ['w-1/3']: label !== 'Description',
      })}
    >
      <p className="text-sm text-shade-mdark">{label}</p>
      <p className="text-xl">{value}</p>
    </div>
  );
}

function Details({ open, onClose, data }) {
  function handleOnClose(e) {
    if (e.target.id === 'dialog') onClose();
  }

  if (!open) return null;
  return (
    <div
      id="dialog"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onClick={handleOnClose}
    >
      <div className="bg-white">
        <div className="px-8 pb-4 mt-4 flex justify-between items-center border-b border-b-primary">
          <h1 className="text-2xl font-bold">Details</h1>
          <span
            className="text-2xl font-medium hover:bg-secondary hover:text-white px-2 cursor-pointer transition-all duration-300 rounded"
            onClick={onClose}
          >
            &times;
          </span>
        </div>
        <div className="flex justify-start items-baseline flex-wrap border-b border-b-primary p-4">
          <DetailItem label="Name" value={data.capsule_serial} />
          <DetailItem label="Type" value={data.type} />
          <DetailItem label="Status" value={data.status} />
          <DetailItem label="Landings" value={data.landings} />
          <DetailItem label="Reused" value={data.reuse_count} />
          <div className="w-full">
            {data.details && (
              <DetailItem label="Description" value={data.details} />
            )}
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <Button label="Close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.object,
};

DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Details;
