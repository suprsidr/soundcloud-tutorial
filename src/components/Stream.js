import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, i) => {
          return <div key={i} className="track">{track.title}</div>;
        })
      }
    </div>
  );
}

export default Stream;
