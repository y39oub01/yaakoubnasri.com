import React from 'react';

function Porjects ({darkmode}){
    return(
        <section className={darkmode? 'dark-section-projects':'light-section-projects'}>
            <div className='projects-container'>
                <h2 className='projects-heading' >My projects</h2>
                <div className='projects-cards'>
                    <div className='project-card'>
                        <figure>
                            <img src="" alt="not now" />
                            <figcaption><a href="">See project</a></figcaption>
                        </figure>

                    </div>
                    <div className='project-card'>
                        <figure>
                            <img  alt="not now" />
                            <figcaption><a href="">See project</a></figcaption>
                        </figure>

                    </div>
                    <div className='project-card'>
                        <figure>
                            <img  alt="not now" />
                            <figcaption><a href="">See project</a></figcaption>
                        </figure>

                    </div>
                    <div className='project-card'>
                        <figure>
                            <img  alt="not now" />
                            <figcaption><a href="">See project</a></figcaption>
                        </figure>

                    </div>
                    <div className='project-card'>
                        <figure>
                            <img  alt="not now" />
                            <figcaption><a href="">See project</a></figcaption>
                        </figure>

                    </div>
                    <div className='project-card'>
                        <figure>
                            <img  alt="not now" />
                            <figcaption><a href="">See project</a></figcaption>
                        </figure>

                    </div>

                </div>

            </div>

        </section>

    );

}
export default Porjects;