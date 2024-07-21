import React from 'react';

const modules = [
    {
      id: 1,
      title: 'Module 1',
      videos: ['video1-1.mp4', 'video1-2.mp4']
    },
    {
      id: 2,
      title: 'Module 2',
      videos: ['video2-1.mp4', 'video2-2.mp4']
    },
    {
      id: 3,
      title: 'Module 3',
      videos: ['video3-1.mp4', 'video3-2.mp4']
    }
  ];

function Sidebar({ onModuleClick }) {
  return (
    <div className="sidebar">
      <h2>Modules</h2>
      <ul>
        {modules.map(module => (
          <li key={module.id} onClick={() => onModuleClick(module.id, module.videos)}>
            {module.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
