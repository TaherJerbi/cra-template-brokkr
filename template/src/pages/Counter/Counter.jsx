import React, { useState } from 'react'
import styles from './Counter.module.css'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
export default function Counter ({
  sum,
  count,
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd
}) {
  const { t } = useTranslation()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0
  return (
    <div>
      <h1>
        SUM :
        {' '}
        {sum}
      </h1>
      <h1>{process.env.NODE_ENV}</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(incrementValue)}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </div>
      <h6>{t('withLove')}</h6>
    </div>
  )
}

Counter.propTypes = {
  sum: PropTypes.number,
  count: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  incrementByAmount: PropTypes.func,
  incrementAsync: PropTypes.func,
  incrementIfOdd: PropTypes.func
}
