import React from 'react'
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'
const Statistics = ({title, stats}) => {
  return (
    <section className={styles.statistics}>
      {<h2 className={styles.title}>{title}</h2> && title}

  <ul className={styles.stat_list}>
              {stats.map(({ id, label, percentage }) => {
                  return (
                    <li key={id} className={styles.item}>
                      <span className={styles.label}>{label}</span>
                      <span className={styles.percentage}>{percentage}%</span>
                    </li>
                  );
              })}
  </ul>
</section>
  )
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics