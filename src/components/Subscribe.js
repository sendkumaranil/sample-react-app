import React from 'react'

function Subscribe(){
    return (
        <div>
            <h4>Subscribe our News Reader:</h4>
            <table>
                <tr><td>Select:</td></tr>
                <tr>
                    <td>
                        <ul>
                            <li>
                                <input type='radio' name='period' value='Daily' />Daily
                            </li>
                            <li>
                                <input type='radio' name='period' value='Monthly' />Monthly
                            </li>
                            <li>
                                <input type='radio' name='period' value='Yearly' />Yearly
                            </li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        Email: <input type='email' name='email' />&nbsp;
                        <input type='submit' value='Subscribe' />
                    </td>
                </tr>
            </table>
        </div>
    )
}
export default Subscribe