import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Details from '@/components/Details';
import Button from '@/components/Button';

function Table({ data, onNext, onPrev, offset, limit }) {
  const [showDetails, setShowDetails] = useState(false);
  const [capsule, setCapsule] = useState({});

  function toggleDetails(item) {
    setCapsule(item);
    setShowDetails(state => !state);
  }

  return (
    <div className="xl:container mx-auto px-6 my-8">
      <div className="my-4">
        <p className="text-2xl font-medium underline">Capsules</p>
      </div>
      <div className="overflow-x">
        <table className="table-auto overflow-x-auto w-full">
          <thead>
            <tr className="text-primary font-bold h-14 border-y">
              <th className="text-left sm:whitespace-nowrap sm:px-4">Name</th>
              <th className="text-left sm:whitespace-nowrap sm:px-4">Type</th>
              <th className="text-left truncate lg:w-80 sm:w-40">Landings</th>
              <th className="text-left sm:whitespace-nowrap sm:px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr
                key={item.capsule_serial}
                className="text-lg h-14 border-y cursor-pointer hover:text-secondary transition-all duration-300"
                onClick={() => toggleDetails(item)}
              >
                <td
                  className="text-left sm:whitespace-nowrap sm:px-4"
                  title={item.capsule_serial}
                >
                  {item.capsule_serial}
                </td>
                <td
                  className="text-left sm:whitespace-nowrap sm:px-4"
                  title={item.type}
                >
                  {item.type}
                </td>
                <td
                  className="text-left truncate lg:w-80 sm:w-40"
                  title={item.landings}
                >
                  {item.landings || '-'}
                </td>
                <td
                  className={clsx(
                    'text-left sm:whitespace-nowrap sm:px-4 capitalize',
                    {
                      ['text-success']: item.status === 'active',
                      ['text-danger']: item.status === 'destroyed',
                      ['text-warning']: item.status === 'retired',
                      ['text-shade-dark']: item.status === 'unknown',
                    },
                  )}
                  title={item.status}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-4 my-4">
        <Button label="Previous" onClick={onPrev} disabled={offset === 0} />
        <Button label="Next" onClick={onNext} disabled={data?.length < limit} />
      </div>
      <Details open={showDetails} onClose={toggleDetails} data={capsule} />
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      capsule_id: PropTypes.string,
      capsule_serial: PropTypes.string,
      type: PropTypes.string,
      details: PropTypes.string,
    }),
  ),
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  offset: PropTypes.number,
  limit: PropTypes.number,
};

export default Table;
