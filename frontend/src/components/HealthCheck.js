import React, { useEffect, useState } from 'react';
import { getHealth } from '../api';

export default function HealthCheck() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getHealth()
      .then(setData)
      .catch(e => setErr(e.message));
  }, []);

  if (err) return <div style={{ color: 'red' }}>API Error: {err}</div>;
  if (!data) return <div>Checking backend...</div>;
  return <div>API Status: {data.status}</div>;
}