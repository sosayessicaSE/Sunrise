
import React from 'react';
import agent1Image from '../images/agent1.png';
import agent2Image from '../images/agent2.png';
import agent3Image from '../images/agent3.png';
import agent4Image from '../images/agent4.png';
import "../views/agents.css"

const agents = [
  {
    id: 1,
    name: "William Holland",
    phone: "123-456-7890",
    email: "william@sunrise.com",
    imageUrl: agent1Image,
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane@sunrise.com",
    imageUrl: agent2Image,
  },
  {
    id: 3,
    name: "Bob Brown",
    phone: "555-123-4567",
    email: "bob@sunrise.com",
    imageUrl: agent3Image,
  },
  {
    id: 4,
    name: "Alice Johnson",
    phone: "555-123-4567",
    email: "alice@sunrise.com",
    imageUrl: agent4Image,
  },
];

const Agents = ({ isDarkMode }) => {
  return (
    <div className='agents'>
      <div className="agents-list">
        {agents.map(agent => (
          <div key={agent.id} className={`agent-card ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <img src={agent.imageUrl} alt={agent.name} className={`agent-image ${isDarkMode ? 'dark-theme' : 'light-theme'}`} />
            <h3>{agent.name}</h3>
            <p>Phone: {agent.phone}</p>
            <p>Email: <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
