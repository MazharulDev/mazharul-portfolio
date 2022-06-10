import React from 'react';

const ProjectsModal = ({ projectData }) => {
    return (
        <div>
            <input type="checkbox" id="ProjectModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="ProjectModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl text-center mb-4"><span>{projectData.name}</span> -- <span className='text-lg'>{projectData.category}</span> </h3>
                    <div className='grid grid-cols-2 gap-4'>
                        <img width={500} src={projectData.image1} alt="" />
                        <img width={500} src={projectData.image2} alt="" />
                        <img width={500} src={projectData.image3} alt="" />
                        <img width={500} src={projectData.image4} alt="" />
                        <img width={500} src={projectData.image5} alt="" />
                        <img width={500} src={projectData.image6} alt="" />
                        <img width={500} src={projectData.image7} alt="" />
                        <img width={500} src={projectData.image8} alt="" />
                    </div>
                    <h2 className='text-lg'>Feature:</h2>
                    <p>{projectData.feature}</p>
                    <h2 className='text-lg'>Technology used:</h2>
                    <p className='mb-5'>{projectData.technology}</p>
                    <a className='hover:underline mt-4 text-blue-500' href={projectData.live} target="_blank" rel="noreferrer">Live Link</a> ||
                    <a className='hover:underline text-blue-500 mx-4' href={projectData.clientCode} target="_blank" rel="noreferrer">Client Code Link</a>||
                    <a className='hover:underline text-blue-500' href={projectData.serverCode} target="_blank" rel="noreferrer">Server Code Link</a>
                    <div class="modal-action">
                        <label for="ProjectModal" class="btn">Close</label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectsModal;