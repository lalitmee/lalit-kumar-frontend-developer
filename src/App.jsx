import { useEffect, useState } from 'react';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Table from '@/components/Table';
import Form from '@/components/Form';
import axios from '@/lib/axios';

function App() {
  const [capsules, setCapsules] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 6;

  useEffect(() => {
    getCapsules({ offset, limit });
  }, [offset, limit]);

  function getCapsules({ offset, limit }) {
    axios
      .get('/capsules', {
        params: { limit, offset },
      })
      .then(response => {
        const { data } = response || {};
        setCapsules(data);
      });
  }

  function handleNext() {
    setOffset(state => state + limit);
  }

  function handlePrev() {
    setOffset(state => (state - limit < 0 ? 0 : state - limit));
  }

  function handleFilter(filterCb) {
    return [...capsules].filter(filterCb);
  }

  function onChange({ value, type }) {
    if (value) {
      const tempCapsules = handleFilter(capsule =>
        capsule[type].toLowerCase().includes(value.toLowerCase()),
      );
      setCapsules(tempCapsules);
    } else {
      getCapsules({ offset, limit });
    }
  }

  return (
    <div className="mx-auto">
      <Navbar />
      <Banner />
      <Form onChange={onChange} />
      <Table
        data={capsules}
        onNext={handleNext}
        onPrev={handlePrev}
        offset={offset}
        limit={limit}
      />
      <Footer />
    </div>
  );
}

export default App;
