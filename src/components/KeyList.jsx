/**
 * Key List Function Component
 * @returns { string } The HTML list of keys available
 */
const KeyList = () => (
  <table className='keyList'>
    <thead>
      <tr>
        <th>Button</th>
        <th>Key</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>AC</td>
        <td>Escape</td>
      </tr>
      <tr>
        <td>DEL</td>
        <td>Del</td>
      </tr>
      <tr>
        <td>=</td>
        <td>Enter</td>
      </tr>
    </tbody>
  </table>
);

export default KeyList;
