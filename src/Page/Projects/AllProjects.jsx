import React, { Suspense } from 'react';
import Loading from '../../Components/Loading/Loading';

const Projects = React.lazy(() => import('./Projects'));

const AllProjects = () => (
    <div className="container mx-auto mt-28 md:mt-28 lg:mt-30">
        <Suspense fallback={<Loading />}>
            <Projects showAllProjects />
        </Suspense>
    </div>
);

export default AllProjects;
