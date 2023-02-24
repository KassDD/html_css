import { useState } from 'react'

import IconEdit from './icons/icon-edit.svg'
import IconRemove from './icons/icon-remove.svg'

import './App.sass'

function App() {
  const [inputValue, set_inputValue] = useState('')
  const [dataList, set_dataList] = useState([])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // fetch

    const dataToSave =
      inputValue.trim() !== '' ? [...dataList, inputValue] : [...dataList]

    set_dataList(dataToSave)
  }

  const handleRemove = (elValue) => {
    console.log('handleRemove', elValue)
  }

  const handleEdit = (elValue) => {
    console.log('handleEdit', elValue)
  }

  return (
    <div className='App'>
      <div className='main_space'>
        <form className='main_form'>
          <label htmlFor='anything' className='main_label'>
            Enter you CVV
          </label>

          <div className='main_row_wrap'>
            <input
              className='main_input'
              id='anything'
              type='text'
              onChange={(event) => {
                set_inputValue(event.target.value)
              }}
              value={inputValue}
              placeholder='3 digits'
            />
            <button
              onClick={handleFormSubmit}
              className='main_button'
              type='submit'>
              put your finger
            </button>
          </div>
        </form>

        {dataList.length === 0 ? (
          <p className='main_paragraph'>Empty list</p>
        ) : (
          <ul className='main_list'>
            {dataList.map((el, i) => (
              <li className='main_value' key={i}>
                <span className='main_text'>{el}</span>

                <div className='main_button_group'>
                  <button className='main_list_button_trash'>
                    <img
                      src={IconEdit}
                      alt='icon-edit'
                      onClick={() => handleRemove(el)}
                    />
                  </button>
                  <button
                    className='main_list_button_edit'
                    onClick={() => handleEdit(el)}>
                    <img src={IconRemove} alt='icon-edit' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
