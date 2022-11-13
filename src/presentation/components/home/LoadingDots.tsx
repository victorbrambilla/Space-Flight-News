import React from 'react';

import styles from './LoadingDots.module.css';

export const LoadingDots = () => {
  return (
    <div>
      <div className={styles.snippet} data-title='.dot-falling'>
        <div className={styles.stage}>
          <div className={styles.dotFalling}></div>
        </div>
      </div>
    </div>
  );
};
