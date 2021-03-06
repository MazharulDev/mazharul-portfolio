import React from 'react';


const Project = ({ item, setProjectData }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image1} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.des}
      </p>
      <a className='hover:underline mt-4 text-blue-500' href={item.live} target="_blank" rel="noreferrer">Live Link</a>
      <a className='hover:underline text-blue-500' href={item.clientCode} target="_blank" rel="noreferrer">Client Code Link</a>
      <a className='hover:underline text-blue-500' href={item.serverCode} target="_blank" rel="noreferrer">Server Code Link</a>

      <label onClick={() => setProjectData(item)} htmlFor="ProjectModal" className="btn modal-button mt-4">Details Project</label>


    </div>
  );
};

export default Project;
