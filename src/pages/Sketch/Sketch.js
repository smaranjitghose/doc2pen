import React from 'react';
import MetaComponent from '../../seo/MetaComponent';
import metaData from '../../seo/metaData';
import Canvas from './components/Canvas';
import styles from './Sketch.module.css';

function Sketch() {

    return (
        <section className={styles.Sketch}>
            <MetaComponent
                title={metaData.sketch.title}
                description={metaData.sketch.description}
                keywords={metaData.sketch.keywords}
            />
            <div className={styles.body}>
                <Canvas />
            </div>
        </section>
    )
}

export default Sketch;
