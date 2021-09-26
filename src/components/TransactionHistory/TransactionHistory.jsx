import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>{'Type'.toUpperCase()}</th>
            <th className={styles.th}>AMOUNT</th>
            <th className={styles.th}>CURRENCY</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              {/* {console.log(index % 2 === 0)} */}
              <td
                className={styles.td}
                style={
                  index % 2 !== 0
                    ? { backgroundColor: 'wheat' }
                    : { backgroundColor: 'white' }
                }
              >
                {item.type}
              </td>
              <td
                className={styles.td}
                style={
                  index % 2 !== 0
                    ? { backgroundColor: 'wheat' }
                    : { backgroundColor: 'white' }
                }
              >
                {item.amount}
              </td>
              <td
                className={styles.td}
                style={
                  index % 2 !== 0
                    ? { backgroundColor: 'wheat' }
                    : { backgroundColor: 'white' }
                }
              >
                {item.currency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TransactionHistory;
