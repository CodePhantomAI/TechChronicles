import React from 'react';
import { timelineData } from './data/timelineData';
import { TimelineCard } from './components/TimelineCard';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineCard
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
            image={item.image}
            keyFigures={item.keyFigures}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;