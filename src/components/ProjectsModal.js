import React from 'react';

const ProjectsModal = ({ projectData }) => {
    return (
        <div>

            <input type="checkbox" id="ProjectModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <label htmlFor="ProjectModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{projectData.name}</h3>
                    <p className="py-4"></p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsModal;