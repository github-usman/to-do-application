import React from 'react'

const TodoListPage = () => {
    
  return (
    <div className='container'>
       <form class="row g-3">
            <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">Email</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Confirm identity</button>
            </div>
      </form>
    </div>
  )
}

export default TodoListPage