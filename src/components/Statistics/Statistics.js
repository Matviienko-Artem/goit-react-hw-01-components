import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function get_random_color() {
  var color = '';
  for (var i = 0; i < 3; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? '0' + sub : sub;
  }
  return '#' + color;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          style={{ backgroundColor: `${get_random_color()}` }}
          className={styles.item}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
