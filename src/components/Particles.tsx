import React, { RefObject, CSSProperties, useEffect } from 'react';
import { tsParticles, Container, ISourceOptions, Main } from 'tsparticles';

interface IParticlesProps {
    id?: string;
    width?: string;
    height?: string;
    options?: ISourceOptions;
    params?: ISourceOptions;
    url?: string;
    style?: CSSProperties;
    className?: string;
    canvasClassName?: string;
    container?: RefObject<Container>;
    init?: (tsParticles: Main) => void;
    loaded?: (container: Container) => void;
}

const Particles = ({
    id,
    width,
    height,
    options,
    params,
    url,
    style,
    className,
    canvasClassName,
    container,
    init,
    loaded,
}: IParticlesProps) => {
    useEffect(() => {
        if (init) {
        }
        if (loaded) {
        }
    }, []);

    return (
        <div className={className} id={id}>
            <canvas
                className={canvasClassName}
                style={{
                    ...style,
                    width,
                    height,
                }}
            />
        </div>
    );
};

export default Particles;
